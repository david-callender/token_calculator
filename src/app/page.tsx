import type { FC } from "react";

import { WasteView, type WasteEntry } from "./components/WasteView";

const Home: FC = () => {

  const entries: WasteEntry[] = [
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

  return (
    <div>

      <WasteView entries={entries} />
    </div>
  )

};


// tokens -> Water & electricity -> Waste Entry -> MendEntry


export default Home;
