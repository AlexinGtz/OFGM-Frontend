import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationItem.css";

const navigationItem = (props: {link: string, children: string}) => {
  return (
    <li className="NavigationItem">
      <NavLink className="NavLink" to={props.link}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
