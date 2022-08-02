import React, { useContext } from 'react';
import CommentsData from '../../App Data/CommentsData';

const CommentsSection = ({ commentClose }) => {
    const { comments } = useContext(CommentsData);
    const { postedBy } = useContext(CommentsData);

    return (
        <section className='main-compo compo2 container comments'>
            <header>
                <h2>Comments</h2>
                <i className='bi bi-x-lg' onClick={commentClose}></i>
            </header>
            <p>Posted by {postedBy}</p>
            {comments !== ''
                ? comments.map(comment => (
                      <div key={comment.id}>
                          <div>{comment.name.split('')[0].toUpperCase()}</div>
                          <div>
                              <p>{comment.body}</p>
                          </div>
                      </div>
                  ))
                : ''}
        </section>
    );
};

export default CommentsSection;
