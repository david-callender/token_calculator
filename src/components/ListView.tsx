import { FC, useState } from "react";
import { WasteBox } from "./WasteBox";
import { MendBox } from "./MendBox";
import { AppState } from "./MendWasteView";

export enum StartUnit {
  gallons,
  joules,
  kilogramsCarbon,
  dollars,
}

export type MendEntry = {
  detail: string;
  endUnit: string;
  conversionFactor: number; // converts from Watts | Gallons -> unit
  startUnit: StartUnit;
  emoji?: string;
};

type Props = {
  state: AppState;
  entries: MendEntry[];
};

export const WasteView: FC<Props> = ({ entries, state }) => {
  return (
    <>
      <div className="border-border m-5 flex min-w-xl flex-col rounded-md border-5 shadow-2xl">
        {entries.map((entry, index) => {
          return <WasteBox key={index} entry={entry} state={state} />;
        })}
      </div>
    </>
  );
};

export const MendView: FC<Props> = ({ entries, state }) => {
  return (
    <>
      <div className="border-border m-5 flex min-w-xl flex-col rounded-md border-5 pt-3 pb-3 shadow-2xl">
        {entries.map((entry, index) => {
          return <MendBox key={index} entry={entry} state={state} />;
        })}
      </div>
    </>
  );
};
