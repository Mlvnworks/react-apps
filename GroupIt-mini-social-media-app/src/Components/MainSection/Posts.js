import React, { useContext, useState, useEffect } from 'react';
import CommentsData from '../../App Data/CommentsData';
import PostsData from '../../App Data/PostsData';
import UsersData from '../../App Data/UsersData';

const Posts = ({ commentOpen }) => {
    const { posts } = useContext(PostsData);
    const { users } = useContext(UsersData);
    const { getCommentPostId } = useContext(CommentsData);
    const [loaded, setloaded] = useState(false);

    const getRandomUser = () => {
        return users[Math.floor(Math.random() * users.length)].name;
    };

    useEffect(() => {
        if (posts !== '' && users !== '') {
            setloaded(true);
        }
    }, [users, posts]);

    const openModal = (id, by) => {
        getCommentPostId(id, by);
        commentOpen();
    };

    return (
        <main className='main-compo compo2 container'>
            <header>
                <h3>Posts</h3>
            </header>
            {/* posts */}
            {loaded
                ? posts.map(post => {
                      const pBy = getRandomUser();
                      return (
                          <div className='container' key={post.id}>
                              <header>
                                  <h4>{pBy}</h4>
                              </header>
                              <div>
                                  <p>{post.body}</p>
                              </div>
                              <footer>
                                  <button onClick={() => openModal(post.id, pBy)}>comments</button>
                              </footer>
                          </div>
                      );
                  })
                : ''}
        </main>
    );
};

export default Posts;
