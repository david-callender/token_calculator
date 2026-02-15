import type { Dispatch, FC, MouseEventHandler, SetStateAction } from "react";

type Props = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  onSubmit: MouseEventHandler<HTMLButtonElement>;
};

export const QueryBox: FC<Props> = ({ query, setQuery, onSubmit }) => {
  return (
    <div className="flex">
      <input
        className="border px-3 py-2 bg-slate-700 rounded-xl"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button className="border hover:cursor-pointer" onClick={onSubmit}>Go</button>
    </div>
  );
};
