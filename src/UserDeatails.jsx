import React from 'react'
import { useParams } from 'react-router'

function UserDeatails() {
    const paramData = useParams()
    return (
        <>
        <h5>user details page</h5>
        <h1>{paramData.id}</h1>
        </>
    )
}

export default UserDeatails
