import type { Dispatch, FC, SetStateAction } from "react";

type Props = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  onSubmit: () => void;
};

export const QueryBox: FC<Props> = ({ query, setQuery, onSubmit }) => {
  return (
    <form className="flex" action={onSubmit}>
      <input
        className="rounded-xl border px-3 py-2"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button className="border hover:cursor-pointer" type="submit">
        Go
      </button>
    </form>
  );
};
