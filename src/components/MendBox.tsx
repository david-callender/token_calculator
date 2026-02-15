import { FC, useEffect, useState } from "react";
import { MendEntry, StartUnit } from "./ListView";
import { AppState } from "./MendWasteView";

type Props = {
    entry: MendEntry,
    state: AppState,
}

export function formatNumber(n: number) {
    if (n < 0.0001 || n > 999) {
        return Number.parseFloat(n.toPrecision(3)).toExponential();
    } 
    return n.toFixed(5)
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
            setConvertedNumber(entry.conversionFactor * state.convertToKilogramsCarbon);
        } else if (entry.startUnit == StartUnit.dollars) {
            setConvertedNumber(state.convertToDollars)
        }
    }, [state.tokens])

    return <>
        <div className="relative flex group justify-center">
            
            <div onClick={() => {setToggled(!toggled)}} className="rounded-xl m-2 text-lg place-self-center flex p-7 pl-2 shadow-2xl hover:-translate-y-7 transition-all w-2/3 font-serif bg-foreground z-4">
                <div className="grow font-semibold text-left place-self-center bg-foreground z-3">{entry.endUnit} {entry.detail}</div> 
                <div className="font-mono text-right w-1/3 text-2xl place-content-center bg-foreground z-2">{formatNumber(convertedNumber)}</div> 
                
            </div>  
            <div className="absolute z-1 w-2/3 bottom-5 rounded-xl min-h-10 shadow-2xl pt-7 pb-2 font-mono pr-5 pl-5 group-hover:bottom-0 bg-waste transition-all duration-150 text-xs"> This Conversation, everyday,for 10 years: {formatNumber(convertedNumber * 365 * 10)} {entry.endUnit}</div>
            
        </div>
        
   

    </>
}