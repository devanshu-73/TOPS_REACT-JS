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
                ))}

            </ul>
        </div>
    )
}

export default FetchApi
