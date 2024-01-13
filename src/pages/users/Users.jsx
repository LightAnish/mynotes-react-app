import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserTile from '../../components/user-tile/UserTile';
import './style.css';

const Users = () => {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // fetchUsers()
    }, []);

    const fetchUsers = async () => {
        setIsLoading(true);
        const url = 'https://api.github.com/users';
        try {
            const { data } = await axios.get(url);
            setUsers(data);
        } catch {
            setError("Somthing went wrong? users can't be fetched.")
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className='container'>
            <UserTile />
            <UserTile />
            <UserTile />
        </div>
    )
}

export default Users