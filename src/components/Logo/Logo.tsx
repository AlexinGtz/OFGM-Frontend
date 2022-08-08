import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import LogoImage from '../../assets/Logo.png';
import SmallLogo from '../../assets/LogoChico.png';
import './Logo.css'

const Logo = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const currentLogo = width > 900 ? LogoImage : SmallLogo;

  const handleResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, []);

  return (
    <React.Fragment>
      <Link to='/'>
        <img className='Logo' src={currentLogo} alt='Company Logo'/>
      </Link>
    </React.Fragment>
  )
}

export default Logo