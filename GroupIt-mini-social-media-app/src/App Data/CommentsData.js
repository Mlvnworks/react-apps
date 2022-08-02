import React, { createContext, useContext, useState, useEffect } from 'react';

const CommentsData = createContext();

export const CommentsDataCart = ({ children }) => {
    const [comments, setComments] = useState('');
    const [commentPostId, setCommenPostId] = useState('');
    const [postedBy, setPostedBy] = useState('');

    // ftetch comments
    const getComments = async pId => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/comments');
            const data = await res.json();

            // filter comments
            const commentsFiltered = data.filter(comment => comment.postId === pId);
            setComments(commentsFiltered);
        } catch (err) {
            console.log(err);
        }
    };

    // fetch comments when page loaded
    useEffect(() => {
        getComments(commentPostId === '' ? Math.floor(Math.random() * 100) : commentPostId);
    }, [commentPostId]);

    // get correct comment in post (it triggers when comment btn cliked)
    const getCommentPostId = (id, by) => {
        setCommenPostId(id);
        setPostedBy(by);
    };
    return <CommentsData.Provider value={{ comments, getCommentPostId, postedBy }}>{children}</CommentsData.Provider>;
};

export default CommentsData;
