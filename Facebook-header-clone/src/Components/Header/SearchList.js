import React from 'react';

// assets
// styling
import './searchList.css';

const SearchList = ({ pics }) => {
    return (
        <li>
            <div>
                <img src={pics} alt='' />
                <p>Melvin Agustin</p>
            </div>
            <button>x</button>
        </li>
    );
};

export default SearchList;
