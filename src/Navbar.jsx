import React from 'react'
import { Link } from 'react-router'

function Navbar() {
    return (
        <>
            <Link to="/"><h1>home</h1></Link>
            <Link to="/about"><h1>about</h1></Link>
            <Link to="/login"><h1>login</h1></Link>
        </>
    )
}

export default Navbar
