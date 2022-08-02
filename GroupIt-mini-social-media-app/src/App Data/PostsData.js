import React, { createContext, useState } from 'react';

const PostsData = createContext();

export const PostsDataCart = ({ children }) => {
    const [posts, setPosts] = useState('');
    const getPosts = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setPosts(data);
        } catch (err) {
            console.log(err);
        }
    };
    useState(() => {
        getPosts();
    }, []);

    const context = {
        posts,
    };
    return <PostsData.Provider value={context}>{children}</PostsData.Provider>;
};

export default PostsData;
