import React from 'react'
import { useSelector } from 'react-redux'
import {NavLink,useParams} from 'react-router-dom'

export const Navbar = () => {
    const {id_user} = useParams()
    const {Id_user} = useSelector(x => x)
    return (
        <nav className='navbar'>
            <NavLink to={`/`} className={(x) => `link ${x.isActive && "active"}`}>Home</NavLink>
            <NavLink to={`/employee/${Id_user}`} className={(x) => `link ${x.isActive && "active"}`}>Employee</NavLink>
            <NavLink to={`/new`} className={(x) => `link ${x.isActive && "active"}`}>News employees</NavLink>
        </nav>
    )
}
