import React from 'react';

// data
// userdata
import { UsersDataCart } from './App Data/UsersData';
// post data
import { PostsDataCart } from './App Data/PostsData';
// comments data
import { CommentsDataCart } from './App Data/CommentsData';

// Components
import Header from './Components/Header';
import MainSection from './Components/MainSection/MainSection';

// custom style
import './App.css';

const App = () => {
    return (
        <div className='App'>
            {/* users data */}
            <UsersDataCart>
                <Header />
                {/* posts data */}
                <PostsDataCart>
                    {/* comments data */}
                    <CommentsDataCart>
                        <MainSection />
                    </CommentsDataCart>
                </PostsDataCart>
            </UsersDataCart>
        </div>
    );
};

export default App;
