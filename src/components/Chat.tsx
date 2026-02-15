"use client";

import { CreateMLCEngine } from "@mlc-ai/web-llm";
import { useState } from "react";

import { Messages } from "./Messages";
import { QueryBox } from "./QueryBox";

import type {
  ChatCompletionAssistantMessageParam,
  ChatCompletionSystemMessageParam,
  ChatCompletionToolMessageParam,
  ChatCompletionUserMessageParam,
  InitProgressReport,
  MLCEngine,
} from "@mlc-ai/web-llm";
import type { FC } from "react";

export type MessagesT = (
  | ChatCompletionSystemMessageParam
  | ChatCompletionUserMessageParam
  | ChatCompletionAssistantMessageParam
  | ChatCompletionToolMessageParam
)[];

export const Chat: FC = () => {
  const [engine, setEngine] = useState<MLCEngine>();

  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<MessagesT>([
    { role: "system", content: "You are a helpful AI assistant." },
  ]);

  const generateResponse = async (): Promise<void> => {
    const oldMessages = messages;
    setMessages([...oldMessages, { content: query, role: "user" }]);
    if (engine === undefined) {
      throw new Error("don't have engine yet");
    }
    const reply = await engine.chat.completions.create({
      messages: [...oldMessages, { content: query, role: "user" }],
    });

    console.log(reply.choices[0].message);
    setMessages((m) => [
      ...m,
      {
        content: reply.choices[0].message.content ?? "no content",
        role: "assistant",
      },
    ]);
  };

  const onSubmit = (): void => {
    console.log(messages);
    setMessages([...messages, { content: query, role: "user" }]);
    console.log(messages);
    void generateResponse();
  };

  return (
    <div className="flex w-md flex-col">
      <button
        className="border"
        onClick={() => {
          void (async (): Promise<void> => {
            // Initialize with a progress callback
            const initProgressCallback = (
              progress: InitProgressReport
            ): void => {
              console.log("Model loading progress:", progress);
            };

            // Using CreateMLCEngine
            const engine = await CreateMLCEngine(
              "SmolLM2-360M-Instruct-q0f16-MLC",
              {
                initProgressCallback,
              }
            );

            setEngine(engine);
          })();
        }}
      >
        Load Model
      </button>
      <Messages messages={messages} />
      <QueryBox query={query} setQuery={setQuery} onSubmit={onSubmit} />
    </div>
  );
};
