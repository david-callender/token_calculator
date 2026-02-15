import { MendEntry, StartUnit } from "@/components/ListView"

export const WasteEntries: MendEntry[] = [
        {
            detail: "Drinks for ants",
            endUnit: "",
            conversionFactor: 1 / 10e-6,
            startUnit: StartUnit.gallons
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
            detail: "Hamster Wheel",
            endUnit: "Days on",
            conversionFactor: 1 / 1800,
            startUnit: StartUnit.joules,
        },

        {
            detail: "US Household (%)",
            endUnit: "Power Usage Per Hour",
            conversionFactor: (365 * 24 * 100) / 3.78e10 ,
            startUnit: StartUnit.joules
        }
    ]

export const MendEntries: MendEntry[] = [
    {
        detail: "planted trees",
        endUnit: "",
        conversionFactor: 1 / 21.7724,
        startUnit: StartUnit.kilogramsCarbon
    },
    {
        detail: "planted blueberry bushes",
        endUnit: "",
        conversionFactor: 0.5,
        startUnit: StartUnit.kilogramsCarbon
    },
    {
        detail: "absorbed by ocean per day",
        endUnit: "kgC",
        conversionFactor: (1 * 365) / ( 2.69e6 ),
        startUnit: StartUnit.kilogramsCarbon
    },

    {
        detail: "donate to charity",
        endUnit: "",
        conversionFactor: 1,
        startUnit: StartUnit.dollars
    },

    
]