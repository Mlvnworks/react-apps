import React, { useContext } from 'react';

// user data
import UsersData from '../../App Data/UsersData';

const Friends = () => {
    const { users } = useContext(UsersData);

    return (
        <aside className='main-compo compo3'>
            <header>
                <h3>Friends</h3>
            </header>
            <ul className='container'>{users !== '' ? users.map(user => <li key={user.id}>{user.name}</li>) : ''}</ul>
        </aside>
    );
};

export default Friends;
