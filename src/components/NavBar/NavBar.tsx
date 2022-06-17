import React from 'react'
import './NavBar.css'
import '../../index.css'
import { NavBarProps } from './NavBar.types'
import { UserTypes } from '../../utils/common.types'
import { Item } from '../NavigationItems/NavigationItems.types'
import Logo from '../Logo/Logo'
import UserAsset from '../../assets/UserAsset.png'
import NavigationItems from '../NavigationItems/NavigationItems'

const items: Array<Item> = [
  {
    link: "/news",
    tabName: "Noticias",
    authNeeded: false,
    userType: UserTypes.ANY
  },
  {
    link: "/about-us",
    tabName: "Contacto",
    authNeeded: false,
    userType: UserTypes.ANY
  },
  {
    link: "/auditions",
    tabName: "Audiciones",
    authNeeded: false,
    userType: UserTypes.ANY
  },
  {
    link: "/orchestra",
    tabName: "Orquesta",
    authNeeded: false,
    userType: UserTypes.ANY
  },
  {
    link: "/concerts",
    tabName: "Conciertos",
    authNeeded: false,
    userType: UserTypes.ANY
  },  
  {
      link: "/",
      tabName: "Inicio",
      authNeeded: false,
      userType: UserTypes.ANY
  }
]

const NavBar = (props: NavBarProps) => {
  return (
    <div className='nav-bar'>
        <Logo />
        <NavigationItems items={items} />
        {/* <img src={UserAsset} /> */}
    </div>
  )
}

export default NavBar