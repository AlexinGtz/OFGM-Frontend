import React from 'react'

import './Button.css'

export const Button = (props: any) => {

  const className = [props.className, 'button'].join(" ");

  return (
    <div className='button' onClick={props.onClick}>
      <p className='buttonText'>{props.children}</p>
    </div>
  )
}
