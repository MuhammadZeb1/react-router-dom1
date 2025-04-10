import React from 'react'
import { NavLink, Outlet } from 'react-router'
import Class from './Class'

function College() {
    return (
       <>
        <h1>College</h1>
        <NavLink to='class'>class</NavLink>
        <Outlet/>
       </>
    )
}

export default College
