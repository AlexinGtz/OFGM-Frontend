import React, { useState, useEffect } from 'react'

export const TestScreen = (props: any) => {

  const [id, setId] = useState("");
  const [pokemon, setPokemon]: [any, any]= useState({});

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/'+ id)
    .then(response => response.json())
    .then(pokemon => {
      console.log(pokemon);
      setPokemon(pokemon);
    });
  }, [id]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => response.json())
    .then(pokemon => {
      console.log(pokemon);
      setPokemon(pokemon);
    });
  }, []);
  

  const onInputChangeHandler = (id: string) => {
    setId(id);
  }

  const inputType = "text";

  return (
    <div>
      <h2>TestScreen</h2>
      <h4>Name: {pokemon.name}</h4>
      <h4>ID: {pokemon.id}</h4>

      <input type={inputType} value={id} onChange={(event) => onInputChangeHandler(event.target.value)} />
    </div>
  )
}
