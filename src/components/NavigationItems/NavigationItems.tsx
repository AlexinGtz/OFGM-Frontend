import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import { UserTypes } from "../../utils/common.types";
import { Item } from "../../types/ui.types";

const isAuth = false;
const userType = 2;

const NavigationItems = (props: {items: Array<Item>}) => {
  let items = props.items.filter(item => 
      item.authNeeded === isAuth && 
      (item.userType===userType || item.userType === UserTypes.ANY));

  return (
    <ul className="NavigationItems">
      {items.map(item => <NavigationItem link={item.link} key={item.tabName}>{item.tabName}</NavigationItem>)}
    </ul>
  );
};

export default NavigationItems