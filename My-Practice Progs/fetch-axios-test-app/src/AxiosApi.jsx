import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosApi = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
    }, [])
    return (
        <div>
            <ul>
                {
                    users.map((user) => (
                        <>
                            <label htmlFor="username">Username : </label>
                            <input type="text" name="username" key={user.id} id="username" value={user.username} />
                        </>
                    ))
                }

            </ul>
        </div>
    )
}

export default AxiosApi
