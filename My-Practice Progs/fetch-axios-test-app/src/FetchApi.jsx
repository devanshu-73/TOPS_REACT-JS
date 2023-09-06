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
                    <div>{user.id}: {user.name}</div>
                ))}

            </ul>
        </div>
    )
}

export default FetchApi
