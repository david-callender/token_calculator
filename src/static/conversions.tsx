import { MendEntry, StartUnit } from "@/components/ListView"

export const WasteEntries: MendEntry[] = [
        {
            detail: "",
            endUnit: "lake superiors",
            conversionFactor: 3.13e-16,
            startUnit: StartUnit.gallons,
            emoji: "🌊"
        },
        {
            detail: "burgers",
            endUnit: "calories",
            conversionFactor: 4.12e-7,
            startUnit: StartUnit.joules,
            emoji: "🍔"
        },
        {
            detail: "carbon",
            endUnit: "kg",
            conversionFactor: 2.31e-5,
            startUnit: StartUnit.kilogramsCarbon,
            emoji: "⚛"
        },

        {
            detail: "hamster wheels",
            endUnit: "hamster days",
            conversionFactor: 1.0,
            startUnit: StartUnit.joules
        }
    ]

export const MendEntries: MendEntry[] = [
    {
        detail: "trees",
        endUnit: "",
        conversionFactor: 1 / 21.7724,
        startUnit: StartUnit.kilogramsCarbon
    },
    {
        detail: "blueberry bushes",
        endUnit: "",
        conversionFactor: 0.5,
        startUnit: StartUnit.kilogramsCarbon
    },
    {
        detail: "carbon",
        endUnit: "kg",
        conversionFactor: 1.0,
        startUnit: StartUnit.kilogramsCarbon
    }
]