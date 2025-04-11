import { useState } from "react"
import "./App.css"

export default function Pad(props) {
    const styles = {
        backgroundColor: props.color
    }
    
    return (
        <button className={props.isOn ? "": "on"} style={styles} key={props.id}></button>
    )
}