import { FC } from "react";
import { MendBox } from "./MendBox";

export type MendEntry = {
    detail: string;
    value: number;
    units: string;
}

type Props = {
    entries: MendEntry[]
}

export const MendView: FC<Props> = ({ entries }) => {
    return <>
        
            <div className="flex m-10 w-1/2 flex-col border-border border-5 rounded-md">
                {entries.map((entry, index) => {
                    return (
                        <MendBox key={index} entry={entry}/>
                    )
                })}

            </div>

        
    </> 
}