import userContext from "./UserContext";
import React, { useState } from 'react'

const UserState = (props) => {
    const host = "http://localhost:5000"
    const userInitial = "pv"
    const [user, setUser] = useState(userInitial)

    //Get User
    const getUser = async (email) => {
        // API Call
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const json = await response.json()
    }

    return (
        <userContext.Provider value={{ getUser }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState;