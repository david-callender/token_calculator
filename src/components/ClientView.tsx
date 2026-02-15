"use client";

import { FC, useState } from "react";
import { AppState, MendWasteView } from "./MendWasteView";
import { Chat } from "./Chat";


export const ClientView: FC = () => {
    // this will be handled on davids component
    const [numTokens, setNumTokens] = useState(0);
    
    

    let state = new AppState(numTokens);

    return <>
        <Chat numTokens={numTokens} setNumTokens={setNumTokens} />
        <MendWasteView  state={state}/>
    </>
}