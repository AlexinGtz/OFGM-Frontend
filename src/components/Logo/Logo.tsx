import React from 'react'
import { Link } from "react-router-dom";
import LogoImage from '../../assets/Logo.png'
import './Logo.css'

const Logo = () => {
  return (
    <React.Fragment>
      <Link to='/'>
        <img className='Logo' src={LogoImage} alt='Company Logo'/>
      </Link>
    </React.Fragment>
  )
}

export default Logo