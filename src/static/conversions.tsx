import { MendEntry, StartUnit } from "@/components/ListView";

export const WasteEntries: MendEntry[] = [
  {
    detail: "Drinks for ants",
    endUnit: "",
    conversionFactor: 1 / 10e-6,
    startUnit: StartUnit.gallons,
    emoji: "🐜",
  },
  {
    detail: "Burger calories",
    endUnit: "",
    conversionFactor: 4.12e-7,
    startUnit: StartUnit.joules,
    emoji: "🍔",
  },
  {
    detail: "Carbon (kg)",
    endUnit: "",
    conversionFactor: 2.31e-5,
    startUnit: StartUnit.kilogramsCarbon,
    emoji: "⚛",
  },

  {
    detail: "Time on hamster wheel (days)",
    endUnit: "",
    conversionFactor: 1 / 1800,
    startUnit: StartUnit.joules,
    emoji: "🐹",
  },

  {
    detail: "US Household (%)",
    endUnit: "Power Usage Per Hour for",
    conversionFactor: (365 * 24 * 100) / 3.78e10,
    startUnit: StartUnit.joules,
    emoji: "🏠",
  },
];

export const MendEntries: MendEntry[] = [
  {
    detail: "Planted trees",
    endUnit: "",
    conversionFactor: 1 / 21.7724,
    startUnit: StartUnit.kilogramsCarbon,
  },
  {
    detail: "Planted blueberry bushes",
    endUnit: "",
    conversionFactor: 0.5,
    startUnit: StartUnit.kilogramsCarbon,
  },
  {
    detail: "Absorbed by ocean per day",
    endUnit: "kgC",
    conversionFactor: (1 * 365) / 2.69e6,
    startUnit: StartUnit.kilogramsCarbon,
  },

  {
    detail: "Donated to charity",
    endUnit: "$",
    conversionFactor: 1,
    startUnit: StartUnit.dollars,
  },
];
