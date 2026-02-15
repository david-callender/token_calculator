import type { FC } from "react";

import { Title } from "../components/Title";

import { ClientView } from "@/components/ClientView";
import { Footer } from "@/components/Footer";

const Home: FC = () => {
  return (
    <>
      <div>
        <Title />
        <div>
          <ClientView />
        </div>
      </div>
      <Footer />
    </>
  );
};

// tokens -> Water, electricity, Carbon -> Waste Entry -> MendEntry

export default Home;
