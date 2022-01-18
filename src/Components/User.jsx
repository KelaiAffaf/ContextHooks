import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/Context'
function User() {

    const user = useContext(UserContext)
    return (
        <div>

            <h1>{user.name}</h1>
            <h2>{user.age}</h2>


        </div>
    )
}

export default User
