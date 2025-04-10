import React from 'react'
import { NavLink, Outlet } from 'react-router'
import Class from './Class'

function College() {
    return (
       <>
        <h1>College</h1>
        <div>
            <NavLink to='/'>back</NavLink>
        </div>
        <NavLink to=''>class</NavLink>
        <NavLink to='class2'>class2</NavLink>
        <Outlet/>
       </>
    )
}

export default College
