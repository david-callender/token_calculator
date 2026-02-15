"use client";

import { FC, useState } from "react"
import { MendView, WasteView, StartUnit } from "./ListView"
import { MendEntry } from "./ListView"

export class AppState {
    tokens: number;
    // pattern with app state becomes tokens -> closest relevant unit (e.g. joules) -> final unit (e.g. burgers)

    private TOKENS_TO_GALLONS = 1;
    private TOKENS_TO_JOULES = 1;
    private TOKENS_TO_KILOGRAMS_CARBON = 1;

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

    set setTokens(tokens: number) {
        this.tokens = tokens;
    }
}

export const MendWasteView: FC = () => {

    const [numTokens, setNumTokens] = useState(5);

    let state = new AppState(numTokens);

    const WasteEntries: MendEntry[] = [
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