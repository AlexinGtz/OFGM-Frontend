import React from 'react'
import Logo from '../../assets/Ondas.png'

import './OnConstruction.css'

export const OnConstruction = () => {
    return (
        <div className='constructionMainDiv'>
            <img className='constructionLogo' src={Logo} />
            <h1 className='constructionText'>Sitio En Construcción</h1>
        </div>
    )
}
