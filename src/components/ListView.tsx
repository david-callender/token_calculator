import { FC } from "react"
import { WasteBox } from "./WasteBox"
import { MendBox } from "./MendBox";
import { AppState } from "./MendWasteView";

export enum ResourceType {
    water,
    energy,
    carbon
}

export type MendEntry = {
    detail: string;
    units: string;
    conversionFactor: number; // converts from Watts | Gallons -> unit
    resourceType: ResourceType
}


type Props = {
    state: AppState,
    entries: MendEntry[]
}



export const WasteView: FC<Props> = ({ entries, state }) => {
    return <>
            <div className="flex m-10 min-w-xl flex-col border-border border-5 rounded-md">
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
        
            <div className="flex m-10 min-w-xl flex-col border-border border-5 rounded-md">
                {entries.map((entry, index) => {
                    return (
                        <MendBox key={index} entry={entry} state={state} />
                    )
                })}

            </div>

        
    </> 
}