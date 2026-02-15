import type { FC } from "react";
import { WasteEntry } from "./WasteView";


type Props = {
    entry: WasteEntry
}

export const WasteBox: FC<Props> = ({ entry }) => {
    return <>
        <div className="rounded-xl bg-waste m-2 place-self-center flex p-5 pl-2 shadow-xl hover:-translate-y-1 transition-all w-1/2 font-serif">
            <span className="w-1/2 text-left">{entry.units} {entry.detail}</span> 
            <span className="font-mono text-right w-1/2">{entry.value.toFixed(3)}</span> 
        </div>
    </>
        
    
}