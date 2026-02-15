import { FC, useEffect, useState } from "react";
import { MendEntry, StartUnit } from "./ListView";
import { AppState } from "./MendWasteView";

type Props = {
  entry: MendEntry;
  state: AppState;
};

export function formatNumber(n: number) {
  if (n < 0.0001 || n > 999) {
    return Number.parseFloat(n.toPrecision(3)).toExponential();
  }
  return n.toFixed(5);
}

export const MendBox: FC<Props> = ({ entry, state }) => {
  const [convertedNumber, setConvertedNumber] = useState(0);
  const [toggled, setToggled] = useState(true);
  const [timePeriod, setTimePeriod] = useState(0);

  // slope of the line will just be joulesconversion factor * entry.conversionFactor
  useEffect(() => {
    if (entry.startUnit == StartUnit.joules) {
      setConvertedNumber(entry.conversionFactor * state.convertToJoules);
    } else if (entry.startUnit == StartUnit.gallons) {
      setConvertedNumber(entry.conversionFactor * state.convertToGallons);
    } else if (entry.startUnit == StartUnit.kilogramsCarbon) {
      setConvertedNumber(
        entry.conversionFactor * state.convertToKilogramsCarbon
      );
    } else if (entry.startUnit == StartUnit.dollars) {
      setConvertedNumber(state.convertToDollars * entry.conversionFactor);
    }
  }, [state.tokens]);

  return (
    <>
      <div className="group relative flex justify-center">
        <div
          onClick={() => {
            setToggled(!toggled);
          }}
          className="bg-foreground z-4 m-2 flex w-2/3 place-self-center rounded-xl p-7 pl-2 font-serif text-lg shadow-2xl transition-all hover:-translate-y-7"
        >
          <div className="bg-foreground z-3 grow place-self-center text-left font-semibold">
            {entry.endUnit} {entry.detail}
          </div>
          <div className="bg-foreground z-2 w-1/3 place-content-center text-right font-mono text-2xl">
            {formatNumber(convertedNumber)}
          </div>
        </div>
        <div className="bg-waste absolute bottom-5 z-1 min-h-10 w-2/3 rounded-xl pt-7 pr-5 pb-2 pl-5 font-mono text-xs shadow-2xl transition-all duration-150 group-hover:bottom-0">
          {" "}
          This Conversation, everyday,for 10 years:{" "}
          {formatNumber(convertedNumber * 365 * 10)} {entry.endUnit}
        </div>
      </div>
    </>
  );
};
