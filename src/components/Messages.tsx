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
};

export const Messages: FC<Props> = ({ messages, response, ref }) => {
  if (messages.length === 1) {
    return <div className="text-center">Type a message to get started</div>;
  }
  return (
    <div className="flex max-h-200 w-full flex-col overflow-auto border" ref={ref}>
      {messages.map((message, i) => {
        if (message.role === "user") {
          if (typeof message.content !== "string") {
            throw new TypeError("expected message to be string");
          }
          return (
            <pre
              key={i}
              className="m-2 max-w-10/12 self-end-safe rounded-xl bg-green-200 px-2 py-1 wrap-break-word"
            >
              {message.content}
            </pre>
          );
        } else if (message.role === "assistant") {
          return (
            <pre
              key={i}
              className="m-2 max-w-10/12 rounded-xl bg-green-200 px-2 py-1 text-wrap"
            >
              {message.content}
            </pre>
          );
        }
      })}
      {response !== undefined && (
        <pre className="m-2 max-w-10/12 rounded-xl bg-green-200 px-2 py-1 text-wrap">
          {response}
        </pre>
      )}
    </div>
  );
};
