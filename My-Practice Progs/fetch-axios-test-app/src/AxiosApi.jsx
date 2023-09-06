import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosApi = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data));
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

export default AxiosApi
