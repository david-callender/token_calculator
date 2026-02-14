import { FC } from "react"
import { WasteBox } from "./WasteBox"

export type WasteEntry = {
    detail: string;
    value: number;
    units: string;
}

type Props = {
    entries: WasteEntry[]
}

export const WasteView: FC<Props> = ({ entries }) => {
    return <>
        
            <div className="flex m-10 w-1/2 flex-col border-border border-5 rounded-md">
                {entries.map((entry, index) => {
                    return (
                        <WasteBox key={index} entry={entry}/>
                    )
                })}

            </div>

        
    </> 
}