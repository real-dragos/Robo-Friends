import React from 'react';
import classes from './SearchBox.module.css';

const SearchBox = ({ searchChange }) => {
    return (
        <div className={classes['searchBox']}>
            <input type="search" onChange={searchChange} placeholder="Search your robofriends" />
        </div>
    )
}

export default SearchBox;
