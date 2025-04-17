import React from "react"

export default function App() {
  const [pokemonData, setPokemonData] = React.useState({})
  const [count, setCount] = React.useState(1)

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
      .then(res => res.json())
      .then(data => setPokemonData(data))
  }, [count])

  return (
    <div>
      {pokemonData ? (<img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>): <p>chargement...</p>}
      <h2>Le numéro est {count}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Afficher le prochain Pokémon</button>
      <pre>{JSON.stringify(pokemonData, null, 2)}</pre>
    </div>
  )
}