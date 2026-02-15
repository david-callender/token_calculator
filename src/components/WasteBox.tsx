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
      
        <div onClick={() => {setToggled(!toggled);}} className="rounded-xl m-2 place-self-center flex p-5 pl-2 shadow-xl text-lg items-baseline hover:-translate-y-1 transition-all w-2/3 font-serif bg-waste">
        
            <div className="grow text-left place-self-center font-semibold">{entry.endUnit} {entry.detail} { entry.emoji ? <span className='text-2xl text-amber-50 pl-2.5'>{entry.emoji}</span> : <></> }</div> 
            
            <div className="font-mono text-right text-2xl w-1/3 place-self-center">{formatNumber(convertedNumber)}</div> 
        
        </div>
    
        
    </>
        
    
}