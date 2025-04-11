import { useState } from "react"
import padsData from "./assets/pads"
import Pad from "./Pad"


export default function App() {
    const [pads, setPads] = useState(padsData)

    const buttonElements = pads.map(pad => (
        <Pad
          id = {pad.id}
          color = {pad.color}
          isOn = {pad.on}
        />
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}