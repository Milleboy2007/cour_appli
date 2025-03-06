import { useState } from 'react'
import './index.css'

export default function App() {
   
  function handleClick() {
      console.log("J'ai été cliqué!")
  }
   
  return (
       <div className="container">
           <img src="https://picsum.photos/640/360" onMouseOver={handleClick}/>
           <button onMouseOver={handleClick}>Bouton</button> 
       </div>
   )
}
