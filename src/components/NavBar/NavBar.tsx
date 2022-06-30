import React from 'react'
import './NavBar.css'
import '../../index.css'
import { UserTypes } from '../../utils/common.types'
import Logo from '../Logo/Logo'
import UserAsset from '../../assets/UserAsset.png'
import NavigationItems from '../NavigationItems/NavigationItems'
import { Item, NavBarProps } from '../../types/ui.types'

const items: Array<Item> = []

const NavBar = (props: NavBarProps) => {
  return (
    <div className='navBar'>
        <Logo />
        <NavigationItems items={items} />
        {/* <img src={UserAsset} /> */}
    </div>
  )
}

export default NavBar