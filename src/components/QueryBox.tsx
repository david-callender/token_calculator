import type { Dispatch, FC, SetStateAction } from "react";

type Props = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  onSubmit: () => void;
};

export const QueryBox: FC<Props> = ({ query, setQuery, onSubmit }) => {
  return (
    <form className="flex w-full gap-2" action={onSubmit}>
      <textarea
        onKeyDown={(e) => {
          if (e.code === "Enter" && !e.shiftKey) {
            onSubmit();
            e.preventDefault();
          }
        }}
        className="field-sizing-content grow resize-none rounded-xl border bg-slate-200 px-3 py-2"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button
        className="self-center rounded-md border bg-slate-200 p-1.5 hover:cursor-pointer"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
