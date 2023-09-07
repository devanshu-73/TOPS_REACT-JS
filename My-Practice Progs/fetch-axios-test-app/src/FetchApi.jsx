import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, [])
    return (
        <div>
            <ul>
                {users.map((user) => (
                    <>
                        <label htmlFor="username">Username :</label>
                        <input type="text" name="username" key={user.id} id="username" value={user.username} />
                    </>
                ))}

            </ul>
        </div>
    )
}

export default FetchApi
