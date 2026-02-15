import { FC } from "react"
import { WasteEntry, WasteView } from "./WasteView"
import { MendEntry, MendView } from "./MendView"

export const MendWasteView: FC = () => {

    const WasteEntries: WasteEntry[] = [
        {
            detail: "water",
            units: "gallons",
            value: 5
        },
        {
            detail: "electricity",
            units: "watts",
            value: 10
        },
        {
            detail: "mice",
            units: "lives",
            value: 5
        }
    ]

    const MendEntries: MendEntry[] = [
        {
            detail: "to charity",
            units: "$",
            value: 5
        },
        {
            detail: "planted",
            units: "trees",
            value: 10
        },
        {
            detail: "adopt",
            units: "children",
            value: 5
        }
    ]
    return <>
        <WasteView entries={WasteEntries} />
        <MendView entries={MendEntries} />
    </>
}