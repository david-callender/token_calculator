import { FC } from "react";
import Link from 'next/link'

export const Footer: FC = () => {
    return (
        <div className="flex border-t-4 mt-10 min-h-25 border-border items-center">
            <div className="w-full text-center">   
                <Link href={"https://docs.google.com/document/d/1tYyp0OXOndGUwYQAyb1uccyR-AGzZRFTNcSFLeBppFA/edit?usp=sharing"} className="text-blue-900 pr-5"><u>Sources</u></Link>
                <Link href={"https://github.com/david-callender/token_calculator"} className="text-blue-900"><u>Github Repo</u></Link>
            </div>
        </div>
    )
    
}