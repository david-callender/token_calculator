"use client";

import { useEffect, useState, type FC } from "react";
import { MendEntry, StartUnit } from "./ListView";
import { AppState } from "./MendWasteView";
import { formatNumber } from "./MendBox";

type Props = {
  entry: MendEntry;
  state: AppState;
};

// function convert(x: Water | Energy) -> Some generic unit
export const WasteBox: FC<Props> = ({ entry, state }) => {
  const [convertedNumber, setConvertedNumber] = useState(0);
  const [toggled, setToggled] = useState(true);

  useEffect(() => {
    if (entry.startUnit == StartUnit.joules) {
      setConvertedNumber(entry.conversionFactor * state.convertToJoules);
    } else if (entry.startUnit == StartUnit.gallons) {
      setConvertedNumber(entry.conversionFactor * state.convertToGallons);
    } else if (entry.startUnit == StartUnit.kilogramsCarbon) {
      setConvertedNumber(
        entry.conversionFactor * state.convertToKilogramsCarbon
      );
    }
  }, [state.tokens]);

  return (
    <>
      <div
        onClick={() => {
          setToggled(!toggled);
        }}
        className="bg-waste m-2 flex w-2/3 items-baseline place-self-center rounded-xl p-5 pl-2 font-serif text-lg shadow-xl transition-all hover:-translate-y-1"
      >
        <div className="grow place-self-center text-left font-semibold">
          {entry.endUnit} {entry.detail}{" "}
          {entry.emoji ? (
            <span className="pl-2.5 text-2xl text-amber-50">{entry.emoji}</span>
          ) : (
            <></>
          )}
        </div>

        <div className="w-1/3 place-self-center text-right font-mono text-2xl">
          {formatNumber(convertedNumber)}
        </div>
      </div>
    </>
  );
};
