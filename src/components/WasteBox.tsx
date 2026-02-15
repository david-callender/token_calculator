"use client";

import { useEffect, useState, type FC } from "react";
import { MendEntry, ResourceType } from "./ListView";
import { AppState } from "./MendWasteView";


type Props = {
    entry: MendEntry,
    state: AppState
}

// function convert(x: Water | Energy) -> Some generic unit
export const WasteBox: FC<Props> = ({ entry, state }) => {
    const [convertedNumber, changeConvertedNumber] = useState(0);

    useEffect(() => {
        if (entry.resourceType == ResourceType.energy) {
            changeConvertedNumber(entry.conversionFactor * state.joules);
        } else if (entry.resourceType == ResourceType.water) {
            changeConvertedNumber(entry.conversionFactor * state.gallons);
        } else if (entry.resourceType == ResourceType.carbon) {
            changeConvertedNumber(entry.conversionFactor * state.carbon);
        }
    }, [state.gallons, state.joules, state.carbon])

    return <>
        <div className="rounded-xl bg-waste m-2 place-self-center flex p-5 pl-2 shadow-xl hover:-translate-y-1 transition-all w-1/2 font-serif">
            <span className="w-1/2 text-left">{entry.units} {entry.detail}</span> 
            <span className="font-mono text-right w-1/2">{convertedNumber.toFixed(3)}</span> 
        </div>
    </>
        
    
}