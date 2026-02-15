"use client";

import { CreateMLCEngine } from "@mlc-ai/web-llm";
import { useRef, useState } from "react";

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
import type { Dispatch, FC, SetStateAction } from "react";

export type MessagesT = (
  | ChatCompletionSystemMessageParam
  | ChatCompletionUserMessageParam
  | ChatCompletionAssistantMessageParam
  | ChatCompletionToolMessageParam
)[];

type Props = {
  numTokens: number;
  setNumTokens: Dispatch<SetStateAction<number>>;
};

export const Chat: FC<Props> = ({ numTokens, setNumTokens }) => {
  const [concreteTokens, setConcreteTokens] = useState(0);

  const [engine, setEngine] = useState<MLCEngine>();
  const [startedLoading, setStartedLoading] = useState(false);
  const [modelLoad, setModelLoad] = useState("");

  const [response, setResponse] = useState<string>();

  const [query, setQuery] = useState("");

  const [messages, setMessages] = useState<MessagesT>([
    {
      role: "system",
      content: "You are a helpful AI assistant. Do not produce markdown text.",
    },
  ]);

  const ref = useRef<HTMLDivElement>(null);

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
      ref.current?.scrollTo({ top: ref.current.scrollHeight });
      setNumTokens((n) => n + 1);
      const usage = chunk.usage;
      if (usage !== undefined) {
        setConcreteTokens((c) => c + usage.total_tokens);
        setNumTokens((n) => concreteTokens + usage.total_tokens);
      }
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
    setQuery("");
    void generateResponse();
  };

  const onChatReset = (): void => {
    setMessages([
      { role: "system", content: "You are a helpful AI assistant." },
    ]);
    setNumTokens(0);
    setConcreteTokens(0);
  };

  return (
    <div className="flex w-lg flex-col gap-2">
      {engine === undefined ? (
        <>
          <div className="text-center">
            In order to begin, you must load the model.
          </div>
          <button
            className="border hover:cursor-pointer"
            disabled={startedLoading}
            onClick={() => {
              void (async (): Promise<void> => {
                setStartedLoading(true);
                // Initialize with a progress callback
                const initProgressCallback = (
                  progress: InitProgressReport
                ): void => {
                  setModelLoad(progress.text);
                };

                // Using CreateMLCEngine
                const engine = await CreateMLCEngine(
                  "Llama-3.2-3B-Instruct-q4f32_1-MLC",
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
          <Messages
            messages={messages}
            response={response}
            ref={ref}
            onChatReset={onChatReset}
            tokens={numTokens}
          />
          <QueryBox query={query} setQuery={setQuery} onSubmit={onSubmit} />
        </>
      )}
    </div>
  );
};
