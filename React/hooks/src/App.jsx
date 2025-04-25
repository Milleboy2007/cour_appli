import React from "react"

export default function App() {
  const [pokemonData, setPokemonData] = React.useState({})
  const [count, setCount] = React.useState(1)
  const [name, setName] = React.useState("")

  /*React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
      .then(res => res.json())
      .then(data => setPokemonData(data))
  }, [count])*/

  function call(formData){
    const name = formData.get("name")
    setName(name)
  }

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => setPokemonData(data))
  }, [name])

  return (
    <div>
      {pokemonData.sprites ? (<img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>): <p>chargement...</p>}
      {/*<h2>Le numéro est {count}</h2>*/}
      {/*<button onClick={() => setCount(prev => prev + 1)}>Afficher le prochain Pokémon</button>*/}
      <h2>Le nom ou id est {name}</h2>
      <form action={call}>
        <input type="text" name="name" placeholder={name}></input>
      </form>
      <pre>{JSON.stringify(pokemonData, null, 2)}</pre>
    </div>
  )
}