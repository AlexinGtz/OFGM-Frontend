import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/reducers/testReducer';
import { Link } from 'react-router-dom'

export const HomePage = () => {
  const counter = useSelector((state: any) => state.counter);
  const [stateCounter, setStateCounter] = useState(0);
  const dispatch = useDispatch();

  const setCounters = () => {
    dispatch(increment())
    setStateCounter((state) => {
      return state + 1;
    })
  }

  return (
    <div>
      <h2>HomePage</h2>
      <h1>Global: {counter}</h1>
      <h1>Local: {stateCounter}</h1>
      <button onClick={() => setCounters()}>A</button>
    </div>
  )
}
