//Exo Count
/*import { useState } from "react";
import Count from "./components/Count"

export default function App() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(prevCount => prevCount + 1);
  }

  function subtract() {
    setCount(prevCount => prevCount - 1);
  }

  return (
    <main className="container">
      <h1>

        Combien de fois mon enseignant va-t-il dire le mot state dans ce
        chapitre ?
      </h1>

      <div className="counter">
        <button
          className="minus"
          aria-label="Decrease count"
          onClick={subtract}
        >
          –
        </button>

        <Count count = {count}/>

        <button className="plus" aria-label="Increase count" onClick={add}>
          +
        </button>
      </div>
    </main>
  );
}*/




//Exo Oui Non
/*import { useState } from "react";


export default function App() {
  const [valeur, setValeur] = useState("Oui");

  return (
    <main>
      <h1 className="title">Est-ce que je sors ce soir?</h1>
      <button
        className="value"
        onClick={() => setValeur(valeur === "Oui" ? "Non" : "Oui")}
      >
        {valeur}
      </button>
    </main>
  );
}*/





//Exo Tableau
/*import { useState } from "react"

export default function App() {

  const [myFavoriteThings, setMyFavoriteThings] = useState([])

  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    setMyFavoriteThings(preMyFavoriteThings => [...preMyFavoriteThings,allFavoriteThings[preMyFavoriteThings.length] ])
  }
  
  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}*/


//Exo Contact
import { useState } from "react"
import avatar from "./images/user.png"
import Star from "./components/Star"


export default function App() {
    const [contact, setContact] = useState({
        firstName: "Jo",
        lastName: "Dalton",
        phone: "+1 (514) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })


      function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite 
        }))
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt={"Photo de profil de " + contact.firstName + " " + contact.lastName}
                />
                <div className="info">
                    
                        <Star 
                          isFilled = {contact.isFavorite}
                          toggleFavorite = {toggleFavorite}
                        />
                    
                    <h2 className="name">
                        {contact.firstName + " " + contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}

//Exo Gestion State
/*import { useState } from "react"
export default function App() {

  const [val, setVal] = useState("Oui")
  
  function handleClick() {
    val === "Oui" ?
    setVal("Bien sûr"):
    setVal("Oui")
  }
  
  return (
      <main>
          <h1 className="title">Est-il important de connaître les stats?</h1>
          <button onClick={handleClick} className="value">{val}</button>
      </main>
  )
}*/