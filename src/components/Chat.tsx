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
  const [modelLoad, setModelLoad] = useState("");

  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<string>();
  const [messages, setMessages] = useState<MessagesT>([
    { role: "system", content: "You are a helpful AI assistant." },
  ]);

  const generateResponse = async (): Promise<void> => {
    const oldMessages = messages;
    setMessages([...oldMessages, { content: query, role: "user" }]);
    if (engine === undefined) {
      throw new Error("don't have engine yet");
    }
    const chunks = await engine.chat.completions.create({
      messages: [...oldMessages, { content: query, role: "user" }],
      stream: true,
      stream_options: { include_usage: true },
    });

    let reply = "";

    for await (const chunk of chunks) {
      reply += chunk.choices[0]?.delta.content ?? "";
      setResponse(reply);
    }
    setResponse(undefined);
    setMessages((m) => [
      ...m,
      {
        content: reply,
        role: "assistant",
      },
    ]);
  };

  const onSubmit = (): void => {
    void generateResponse();
  };

  return (
    <div className="flex w-md flex-col">
      {engine === undefined ? (
        <>
          <button
            className="border"
            onClick={() => {
              void (async (): Promise<void> => {
                // Initialize with a progress callback
                const initProgressCallback = (
                  progress: InitProgressReport
                ): void => {
                  setModelLoad(progress.text);
                };

                // Using CreateMLCEngine
                const engine = await CreateMLCEngine(
                  "SmolLM2-135M-Instruct-q0f16-MLC",
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
          <div>{modelLoad}</div>
        </>
      ) : (
        <>
          <Messages messages={messages} response={response} />
          <QueryBox query={query} setQuery={setQuery} onSubmit={onSubmit} />
        </>
      )}
    </div>
  );
};
