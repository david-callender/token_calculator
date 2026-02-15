import { FC } from "react";
import { MendEntry } from "./MendView";

type Props = {
    entry: MendEntry
}
export const MendBox: FC<Props> = ({ entry }) => {
    return <>

        <div className="rounded-xl bg-foreground m-2 place-self-center flex p-5 pl-2 shadow-xl hover:-translate-y-1 transition-all w-1/2 font-serif">
            <span className="w-1/2 text-left">{entry.units} {entry.detail}</span> 
            <span className="font-mono text-right w-1/2">{entry.value.toFixed(3)}</span> 
        </div>
    </>
}