import React from 'react'
import harmonica from '../../assets/harmonica.png';

import './Spinner.css'

export const Spinner = () => {
  return (
    <div className='spinner'>
        <img src={harmonica} className='spinnerImage' />
    </div>
  )
}
