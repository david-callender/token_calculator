"use client";

import { FC, useState } from "react"
import { MendView, WasteView, StartUnit } from "./ListView"
import { MendEntry } from "./ListView"

export type AppState = {
    gallons: number,
    joules: number,
    kilogramsCarbon: number
}

export const MendWasteView: FC = () => {
    const [gallons, setGallons] = useState(5);
    const [joules, setJoules] = useState(12);
    const [carbon, setCarbon] = useState(15);

    const state: AppState = {
        gallons: gallons,
        joules: joules,
        kilogramsCarbon: carbon
    }

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