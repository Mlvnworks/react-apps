import React, { useContext, useState } from 'react';

// components
import SideBar from './SideBar';
import Posts from './Posts';
import Friends from './Friends';
import CommentsSection from './CommentsSection';

const MainSection = () => {
    // state for comment modal
    const [commentsModal, setcommentsModal] = useState(false);

    return (
        <section className='main-section'>
            <SideBar />
            {commentsModal ? (
                <CommentsSection
                    commentClose={() => {
                        setcommentsModal(!commentsModal);
                    }}
                />
            ) : (
                <Posts commentOpen={() => setcommentsModal(!commentsModal)} />
            )}
            <Friends />
        </section>
    );
};

export default MainSection;
