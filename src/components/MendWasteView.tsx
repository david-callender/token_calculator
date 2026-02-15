"use client";

import { FC, useState } from "react"
import { MendView, WasteView, StartUnit } from "./ListView"
import { MendEntry } from "./ListView"

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
        return this.tokens * (0.25 / 1e6)
    }

    set setTokens(tokens: number) {
        this.tokens = tokens;
    }


}

type Props = {
    state: AppState
}

export const MendWasteView: FC<Props> = ({ state }) => {
    

    const WasteEntries: MendEntry[] = [
        {
            detail: "",
            endUnit: "lake superiors",
            conversionFactor: 3.13e-16,
            startUnit: StartUnit.gallons,
            emoji: "🌊"
        },
        {
            detail: "burgers",
            endUnit: "calories",
            conversionFactor: 4.12e-7,
            startUnit: StartUnit.joules
        },
        {
            detail: "carbon",
            endUnit: "kg",
            conversionFactor: 2.31e-5,
            startUnit: StartUnit.kilogramsCarbon
        },

        {
            detail: "hamster wheels",
            endUnit: "hamster days",
            conversionFactor: 1.0,
            startUnit: StartUnit.joules
        }
    ]

    const MendEntries: MendEntry[] = [
        {
            detail: "water",
            endUnit: "gallons",
            conversionFactor: 1.0,
            startUnit: StartUnit.gallons
        },
        {
            detail: "burgers",
            endUnit: "calories",
            conversionFactor: 1.0,
            startUnit: StartUnit.joules
        },
        {
            detail: "carbon",
            endUnit: "kg",
            conversionFactor: 1.0,
            startUnit: StartUnit.kilogramsCarbon
        }
    ]

    return <>
        <div>
            <WasteView entries={WasteEntries} state={state}/>
            <MendView entries={MendEntries}  state={state}/>
        </div>
        
    </>
}