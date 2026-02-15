import type { FC } from "react";

import { MendWasteView } from "../components/MendWasteView";
import { Title } from "../components/Title";
import { Chat } from "@/components/Chat";
import { ClientView } from "@/components/ClientView";


const Home: FC = () => {

  return (<>
    <div>
      <Title />
      <div className="flex justify-center">
        <ClientView />
      </div>
    </div>
  </>
  )

};


// tokens -> Water, electricity, Carbon -> Waste Entry -> MendEntry


export default Home;
