"use client";

import { FC } from "react";
import { MendView, WasteView, StartUnit } from "./ListView";
import { MendEntries, WasteEntries } from "@/static/conversions";

export class AppState {
  tokens: number;
  // pattern with app state becomes tokens -> closest relevant unit (e.g. joules) -> final unit (e.g. burgers)

  private TOKENS_TO_GALLONS = 0.00001786226; // https://dl.acm.org/doi/10.1145/3724499
  private TOKENS_TO_JOULES = 214.56; // gpt5 mini https://app.powerbi.com/view?r=eyJrIjoiZjVmOTI0MmMtY2U2Mi00ZTE2LTk2MGYtY2ZjNDMzODZkMjlmIiwidCI6IjQyNmQyYThkLTljY2QtNDI1NS04OTNkLTA2ODZhMzJjMTY4ZCIsImMiOjF9
  private TOKENS_TO_KILOGRAMS_CARBON = 0.005; // https://tokenomy.ai/tools/energy-usage-estimator

  constructor(tokens: number) {
    this.tokens = tokens;
  }

  get convertToGallons(): number {
    return this.tokens * this.TOKENS_TO_GALLONS;
  }

  get convertToJoules(): number {
    return this.tokens * this.TOKENS_TO_JOULES;
  }

  get convertToKilogramsCarbon(): number {
    return this.tokens * this.TOKENS_TO_KILOGRAMS_CARBON;
  }

  get convertToDollars(): number {
    return this.tokens * (0.25 / 1e6);
  }

  set setTokens(tokens: number) {
    this.tokens = tokens;
  }
}

type Props = {
  state: AppState;
};

export const MendWasteView: FC<Props> = ({ state }) => {
  return (
    <>
      <div>
        <h1 className="text-center font-mono text-3xl">
          If you used a non-local LLM 🤖
        </h1>
        <WasteView entries={WasteEntries} state={state} />
        <h1 className="pt-7.5 text-center font-serif text-3xl">
          <strong>What you could do to mend it...</strong>
        </h1>
        <MendView entries={MendEntries} state={state} />
      </div>
    </>
  );
};
