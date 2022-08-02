import React, { useState, useReducer, createContext, useEffect } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const UsersData = createContext();

export const UsersDataCart = ({ children }) => {
    let [users, setUsers] = useState('');
    const getUsers = async () => {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users');
            const res = await data.json();
            setUsers(res);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const context = {
        users,
    };
    return <UsersData.Provider value={context}>{children}</UsersData.Provider>;
};

export default UsersData;
