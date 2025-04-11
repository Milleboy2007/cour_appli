import { useState } from "react";
import starFilled from "../images/star-filled.png"
import starEmpty from "../images/star-empty.png"


export default function Star(props) {

    
  return (
    <button
        onClick={props.toggleFavorite}
        aria-pressed={props.isFilled}
        className="favorite-button"
    >
    <img
        src={props.isFilled ? starFilled : starEmpty}
        alt={"icône étoile " + props.isFilled ? "plein":"vide"}
        className="favorite"
    />
    </button>
  );
}