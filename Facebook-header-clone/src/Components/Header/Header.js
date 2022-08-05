import React, { useRef, useState } from 'react';
import facebookProfilePic from '../../Assets/facebook profile pic.jpg';

// styling
import './header.css';

// components
import SearchList from './SearchList';

const Header = () => {
    // visual operation
    const [openSearch, setOpenSearch] = useState(false);
    const [openRecommendSearch, setOpenRecommendSearch] = useState(false);
    const searchBox = useRef(null);

    const onFormsubmit = e => {
        e.preventDefault();
        if (searchBox.current.value === '') {
            searchBox.current.focus();
        }
    };

    const toggleSearchBox = () => {
        setOpenSearch(true);
    };

    return (
        <header>
            <h1>
                <a href='#'>facebook</a>
            </h1>
            <form
                onSubmit={onFormsubmit}
                action='#'
                style={{
                    justifyContent: !openSearch ? 'end' : 'center',
                    margin: !openSearch ? '0 10px' : '',
                }}>
                <button className={openSearch ? '' : 'rounded'} onClick={toggleSearchBox}>
                    <i className='bi bi-search'></i>
                </button>
                <input
                    type='text'
                    className={openSearch ? '' : 'd-none'}
                    ref={searchBox}
                    onBlur={() => {
                        setOpenRecommendSearch(false);
                        setOpenSearch(false);
                    }}
                    onFocus={() => setOpenRecommendSearch(true)}
                    placeholder='Find in Facebook'
                />
            </form>
            {/* search recommendation */}
            <section className={openRecommendSearch ? '' : 'd-out'}>
                <div>
                    <h3>Recent Searches</h3>
                    <button>Edit</button>
                </div>
                <ul>
                    <SearchList pics={facebookProfilePic} />
                    <SearchList pics={facebookProfilePic} />
                    <SearchList pics={facebookProfilePic} />
                    <SearchList pics={facebookProfilePic} />
                    <SearchList pics={facebookProfilePic} />
                    <SearchList pics={facebookProfilePic} />
                    <SearchList pics={facebookProfilePic} />
                    <SearchList pics={facebookProfilePic} />
                </ul>
            </section>
            <div>
                <div>
                    <div>1</div>
                    <i className='bi bi-messenger'></i>
                    <p>Messenger</p>
                </div>
                <div>
                    <div>1</div>
                    <i className='bi bi-bell-fill'></i>
                    <p>Notifications</p>
                </div>
                <div>
                    <span>
                        <i className='bi bi-arrow-down-circle-fill'></i>
                    </span>
                    <img src={facebookProfilePic} alt='' />
                    <p>Acount</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
