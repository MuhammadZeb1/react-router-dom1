import React from 'react'
import { Link } from 'react-router'

function Navbar() {
    return (
        <>
            <div className='bg-blue-400 flex justify-between'>
                <div>
                    <Link>logo</Link>
                </div>
                <div>
                    <Link to="/"><h1>home</h1></Link>
                    <Link to="/about"><h1>about</h1></Link>
                    <Link to="/login"><h1>login</h1></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
