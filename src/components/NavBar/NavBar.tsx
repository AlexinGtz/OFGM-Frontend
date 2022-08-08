import React from 'react'
import './NavBar.css'
import '../../index.css'
import { UserTypes } from '../../utils/common.types'
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import { Item, NavBarProps } from '../../types/ui.types'

const items: Array<Item> = [{
    link: '/concerts',
    tabName: 'Conciertos',
    authNeeded: false,
    userType: UserTypes.ANY,
  },
  {
    link: '/',
    tabName: 'Inicio',
    authNeeded: false,
    userType: UserTypes.ANY,
  }
]

const NavBar = () => {
  return (
    <div className='navBar'>
        <Logo />
        <NavigationItems items={items} />
        {/* <img src={UserAsset} /> */}
    </div>
  )
}

export default NavBar