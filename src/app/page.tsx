import type { FC } from "react";

import { WasteView, type WasteEntry } from "./components/WasteView";
import { MendWasteView } from "./components/MendWasteView";

const Home: FC = () => {

  

  return (
    <div>

      <MendWasteView />
    </div>
  )

};


// tokens -> Water & electricity -> Waste Entry -> MendEntry


export default Home;
