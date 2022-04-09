import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'
import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='header-category'>
                    <p>all</p>
                    <p>tech</p>
                    <p>clothes</p>
                </div>
                <div className='header-logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='header-cart'>
                    <p>$</p>
                    <img src={cart} alt='cart' />
                </div>
            </div>
        )
    }
}
export default Header