import { FC, useEffect, useState } from "react";
import { MendEntry, StartUnit } from "./ListView";
import { AppState } from "./MendWasteView";

type Props = {
    entry: MendEntry,
    state: AppState
}
export const MendBox: FC<Props> = ({ entry, state }) => {
    const [convertedNumber, changeConvertedNumber] = useState(0);
    
    useEffect(() => {
        if (entry.startUnit == StartUnit.joules) {
            changeConvertedNumber(entry.conversionFactor * state.convertToJoules);
        } else if (entry.startUnit == StartUnit.gallons) {
            changeConvertedNumber(entry.conversionFactor * state.convertToGallons);
        } else if (entry.startUnit == StartUnit.kilogramsCarbon) {
            changeConvertedNumber(entry.conversionFactor * state.convertToKilogramsCarbon);
        }
    }, [state.tokens])
    

    return <>

        <div className="rounded-xl bg-foreground m-2 place-self-center flex p-5 pl-2 shadow-xl hover:-translate-y-1 transition-all w-1/2 font-serif">
            <span className="w-1/2 text-left">{entry.endUnit} {entry.detail}</span> 
            <span className="font-mono text-right w-1/2">{convertedNumber.toFixed(3)}</span> 
        </div>
    </>
}