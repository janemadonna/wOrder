import React from 'react'
import { NavLink } from 'react-router-dom'

const UserNav = () => {
    return (
        <div className='nav'>
            <NavLink className='nav-bar' to='/'>w</NavLink>
            <NavLink className='nav-bar' to='/fictionary'>fictionary</NavLink>
            <NavLink className='nav-bar' to='/anthology'>anthology</NavLink>
            <NavLink className='nav-bar' to='/mywords'>my words</NavLink>
            <NavLink className='nav-bar' to='/mypoems'>my poems</NavLink>
            <NavLink className='nav-bar' to='/logout'>log out</NavLink>
        </div>
    )
}

export default UserNav