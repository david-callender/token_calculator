import { FC, useState } from "react"
import { WasteBox } from "./WasteBox"
import { MendBox } from "./MendBox";
import { AppState } from "./MendWasteView";

export enum StartUnit {
    gallons,
    joules,
    kilogramsCarbon,
    dollars
}

export type MendEntry = {
    detail: string;
    endUnit: string;
    conversionFactor: number; // converts from Watts | Gallons -> unit
    startUnit: StartUnit,
    emoji?: string
}


type Props = {
    state: AppState,
    entries: MendEntry[]
}



export const WasteView: FC<Props> = ({ entries, state }) => {
    return <>
        <div className="flex m-5 min-w-xl flex-col border-border border-5 rounded-md shadow-2xl">
            {entries.map((entry, index) => {
                return (
                    <WasteBox key={index} entry={entry} state={state}/>
                )
            })}
        </div> 
    </> 
}



export const MendView: FC<Props> = ({ entries, state }) => {

    return <>
        <div className="flex pt-3 pb-3 m-5 min-w-xl flex-col border-border border-5 rounded-md shadow-2xl">
            {entries.map((entry, index) => {
                return (
                    <MendBox key={index} entry={entry} state={state} />
                )
            })}

        </div>
    </> 
}