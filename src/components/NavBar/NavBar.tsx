import React from 'react'
import './NavBar.css'
import '../../index.css'
import { NavBarProps } from './NavBar.types'
import { UserTypes } from '../../utils/common.types'
import { Item } from '../NavigationItems/NavigationItems.types'
import Logo from '../Logo/Logo'
import UserAsset from '../../assets/UserAsset.png'
import NavigationItems from '../NavigationItems/NavigationItems'

const items: Array<Item> = []

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