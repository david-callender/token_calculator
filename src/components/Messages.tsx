import type { MessagesT } from "./Chat";
import type { FC, Ref } from "react";

export type Message = {
  role: "user" | "assistant";
  content: string;
  id: number;
};

type Props = {
  messages: MessagesT;
  response: string | undefined;
  ref: Ref<HTMLDivElement>;
  onChatReset: () => void;
};

export const Messages: FC<Props> = ({
  messages,
  response,
  ref,
  onChatReset,
}) => {
  if (messages.length === 1) {
    return <div className="text-center">Type a message to get started</div>;
  }
  return (
    <div
      className="flex max-h-200 w-full flex-col overflow-auto rounded-xl border bg-slate-200"
      ref={ref}
    >
      <button
        className="mt-2 mr-2 self-end-safe rounded-xl bg-red-400 px-2 py-1 hover:cursor-pointer disabled:cursor-not-allowed disabled:text-gray-600"
        onClick={onChatReset}
        disabled={response !== undefined}
      >
        Reset Chat
      </button>
      {messages.map((message, i) => {
        if (message.role === "user") {
          if (typeof message.content !== "string") {
            throw new TypeError("expected message to be string");
          }
          return (
            <pre
              key={i}
              className="m-2 max-w-10/12 self-end-safe rounded-xl bg-green-200 px-2 py-1 font-serif text-wrap"
            >
              {message.content}
            </pre>
          );
        } else if (message.role === "assistant") {
          return (
            <pre
              key={i}
              className="m-2 max-w-10/12 rounded-xl bg-green-200 px-2 py-1 font-serif text-wrap"
            >
              {message.content}
            </pre>
          );
        }
      })}
      {response !== undefined && (
        <pre className="m-2 max-w-10/12 rounded-xl bg-green-200 px-2 py-1 font-serif text-wrap">
          {response}
        </pre>
      )}
    </div>
  );
};
