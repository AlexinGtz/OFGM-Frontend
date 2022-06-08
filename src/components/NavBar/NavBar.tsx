import React from 'react'
import './NavBar.css'
import { NavBarProps } from './NavBar.types'
import { UserTypes } from '../../utils/common.types'
import { Item } from '../NavigationItems/NavigationItems.types'
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const items: Array<Item> = [
    {
        link: "/login",
        tabName: "Login",
        authNeeded: false,
        userType: UserTypes.ANY
    },
    {
      link: "/signup",
      tabName: "Sign Up",
      authNeeded: false,
      userType: UserTypes.ANY
  },
]

const NavBar = (props: NavBarProps) => {
  return (
    <div className='nav-bar'>
        <Logo />
        <NavigationItems items={items} />
    </div>
  )
}

export default NavBar