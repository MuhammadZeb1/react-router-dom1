import React from 'react'
import { Link } from 'react-router'

function Users() {
    const userList = [
        {id:1,name:"muhammad"},
        {id:2,name:"ali"},
        {id:3,name:"khan"},
        {id:4,name:"majaid"},
        {id:15,name:"kkkk"},
    ]
    return (
        <>
        <p>users list</p>
        {
            userList.map((value)=>(
                <div key={value.id}>
                     <h5><Link to={`/users/${value.id}`}>{value.name}</Link></h5>
                </div>
            ))
        }
        </>
    )
}

export default Users
