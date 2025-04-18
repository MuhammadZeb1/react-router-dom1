import React from 'react'
import { Outlet } from 'react-router'
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
                    <Link to="/college"><h1>college</h1></Link>
                    <Link to="/users"><h1>users</h1></Link>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Navbar
