import React from 'react';
import classes from './Card.module.css';

const Card = ({id, name, email}) => {
    return (
        <div className={classes['Card']}>
            <img alt="a robot" src={`https://robohash.org/${id}?size=200x200`}/>
            <h1>{name}</h1>
            <h3>{email}</h3>
        </div>
    )
}

export default Card;