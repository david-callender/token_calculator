"use client";

import { useEffect, useState, type FC } from "react";
import { MendEntry, StartUnit } from "./ListView";
import { AppState } from "./MendWasteView";
import { formatNumber } from "./MendBox";

type Props = {
    entry: MendEntry,
    state: AppState
}

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
            setConvertedNumber(entry.conversionFactor * state.convertToKilogramsCarbon);
        }
    }, [state.tokens])

    return <>
        <div onClick={() => {setToggled(!toggled);}} className="rounded-xl m-2 place-self-center flex p-5 pl-2 shadow-xl hover:-translate-y-1 transition-all w-1/2 font-serif bg-waste">
            <span className="w-1/2 text-left">{entry.endUnit} {entry.detail}</span> 
            <span className="font-mono text-right w-1/2">{formatNumber(convertedNumber)}</span> 
        </div>
    </>
        
    
}