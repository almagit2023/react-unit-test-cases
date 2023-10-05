import React, { useState, useEffect } from 'react'

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json()
        }
        else {
          throw new Error("Invalid Response")
        }
      })
      .then((data) => setPokemons(data.results))
      .catch((e) => setError(true))
  }, [])

  return error ?
    (<p>Unable to Fetch Data</p>) :
    (
      <table border="1">
        {pokemons.map((data, index) => (
          <tr>
            <td>{data.name}</td>
          </tr>
        ))}
      </table>
    )
}

export default PokemonList