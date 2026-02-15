"use client";

import { FC, useState } from "react"
import { MendView, WasteView, ResourceType } from "./ListView"
import { MendEntry } from "./ListView"

export type AppState = {
    gallons: number,
    joules: number,
    carbon: number
}

export const MendWasteView: FC = () => {
    const [gallons, setGallons] = useState(5);
    const [joules, setJoules] = useState(12);
    const [carbon, setCarbon] = useState(15);

    const state = {
        gallons,
        joules,
        carbon
    }

    const WasteEntries: MendEntry[] = [
        {
            detail: "water",
            units: "gallons",
            conversionFactor: 1.0,
            resourceType: ResourceType.water
        },
        {
            detail: "burgers",
            units: "calories",
            conversionFactor: 1.0,
            resourceType: ResourceType.energy
        },
        {
            detail: "carbon",
            units: "kg",
            conversionFactor: 1.0,
            resourceType: ResourceType.carbon
        }
    ]

    const MendEntries: MendEntry[] = [
        {
            detail: "water",
            units: "gallons",
            conversionFactor: 1.0,
            resourceType: ResourceType.water
        },
        {
            detail: "burgers",
            units: "calories",
            conversionFactor: 1.0,
            resourceType: ResourceType.energy
        },
        {
            detail: "carbon",
            units: "kg",
            conversionFactor: 1.0,
            resourceType: ResourceType.carbon
        }
    ]
    
    return <>
        <div>
            <WasteView entries={WasteEntries} state={state}/>
            <MendView entries={MendEntries}  state={state}/>
        </div>
        
    </>
}