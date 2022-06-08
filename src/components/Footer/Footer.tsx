import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='go-up-footer'>
            Go Up
        </div>
        <div className='footer-row'>
            <div className='my-info'>
                My Info
            </div>
            <div className='client-info'>
                <div>
                    Contact Info
                </div>
                <div>
                    Terms and Conditions
                </div>
            </div>
            <div className='empty-footer'/>
        </div>
    </div>
  )
}

export default Footer