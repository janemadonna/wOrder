import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav'>
            <NavLink className='nav-bar logo' to='/'>w</NavLink>
            <NavLink className='nav-bar' to='/fictionary'>fictionary</NavLink>
            <NavLink className='nav-bar' to='/anthology'>anthology</NavLink>
            <NavLink className='nav-bar' to='/login'>log in</NavLink>
            <NavLink className='nav-bar' to='/signup'>sign up</NavLink>
        </div>
    )
}

export default Nav