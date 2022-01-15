import React from 'react'
import { NavLink } from 'react-router-dom'
import notpages from '../img/404.svg'

export const Notfound = () => {
    return (
        <div className='notfound'>
            <img src={notpages} alt='404' className='imgnot'/>
            <NavLink to="/" className="btn_back" >Back to home</NavLink>
        </div>
    )
}
