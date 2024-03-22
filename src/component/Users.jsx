import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User'

const Users = () => {

    //receives all data from routing parent
    const users = useLoaderData();
    
    const usersStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
    }
    
    return (
        <div>
            <p>Total users: {users.length}</p>
            <h2>Our user</h2>
            <div style={usersStyle}>
                {
                    //using like userEffect
                    users.map((user, idx) => <User key={idx} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;