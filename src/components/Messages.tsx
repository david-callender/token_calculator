import type { MessagesT } from "./Chat";
import type { FC } from "react";

export type Message = {
  role: "user" | "assistant";
  content: string;
  id: number;
};

type Props = {
  messages: MessagesT;
};

export const Messages: FC<Props> = ({ messages }) => {
  return (
    <div className="flex w-full flex-col border">
      {messages.map((message, i) => {
        if (message.role === "user") {
          if (typeof message.content !== "string") {
            throw new TypeError("expected message to be string");
          }
          return (
            <div key={i} className="self-end-safe">
              {message.content}
            </div>
          );
        } else if (message.role === "assistant") {
          return (
            <div key={i} className="self-start">
              {message.content}
            </div>
          );
        }
      })}
    </div>
  );
};
