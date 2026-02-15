import { FC, useEffect, useState } from "react";
import { MendEntry, StartUnit } from "./ListView";
import { AppState } from "./MendWasteView";

type Props = {
    entry: MendEntry,
    state: AppState,
}

export function formatNumber(n: number) {
    return n < 0.0001 ? Number.parseFloat(n.toPrecision(3)).toExponential() : n.toFixed(5)
}

export const MendBox: FC<Props> = ({ entry, state }) => {
    const [convertedNumber, setConvertedNumber] = useState(0);
    const [toggled, setToggled] = useState(true);


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

        <div onClick={() => {setToggled(!toggled)}} className="rounded-xl m-2 text-lg flex p-5 pl-2 shadow-xl hover:-translate-y-1 transition-all w-2/3 font-serif bg-foreground">
            <span className="grow font-semibold text-left place-self-center">{entry.endUnit} {entry.detail}</span> 
            <span className="font-mono text-right w-1/3 text-2xl place-content-center">{entry.startUnit == StartUnit.dollars ? "$" : "" }{formatNumber(convertedNumber)}</span> 
        </div>  
   
                 
    </>
}