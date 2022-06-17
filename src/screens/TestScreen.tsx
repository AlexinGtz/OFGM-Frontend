import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement } from '../redux/reducers/testReducer';

export const TestScreen = (props: any) => {

  const [id, setId] = useState("");  
  const counter = useSelector((state: any) => state.counter)
  const [pokemon, setPokemon]: [any, any]= useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/'+ id)
    .then(response => response.json())
    .then(pokemon => {
      setPokemon(pokemon);
    });
  }, [id]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => response.json())
    .then(pokemon => {
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
      <h1>{counter}</h1>
      <input type={inputType} value={id} onChange={(event) => onInputChangeHandler(event.target.value)} />
      <button onClick={() => dispatch(decrement())}>Restar</button>
    </div>
  )
}
