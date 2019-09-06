import React from 'react';
import Card from '../Card/Card';
import classes from './CardList.module.css';

const CardList = ({ robots }) => {
    return (
        <div className={classes['CardList']}>
            {robots.map((robot) =>
                <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
            )}
        </div>
    );
}

export default CardList;