import { FC } from "react";
import Link from "next/link";

export const Footer: FC = () => {
  return (
    <div className="border-border mt-10 flex min-h-25 items-center border-t-4">
      <div className="w-full text-center">
        <Link
          href={
            "https://docs.google.com/document/d/1tYyp0OXOndGUwYQAyb1uccyR-AGzZRFTNcSFLeBppFA/edit?usp=sharing"
          }
          className="pr-5 text-blue-900"
        >
          <u>Sources</u>
        </Link>
        <Link
          href={"https://github.com/david-callender/token_calculator"}
          className="text-blue-900"
        >
          <u>Github Repo</u>
        </Link>
      </div>
    </div>
  );
};
