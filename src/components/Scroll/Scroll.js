import React from 'react'
import classes from './Scroll.module.css';

const Scroll = (props) => {
    return (
        <div className={classes['outerScroll']}>
            <div className={classes['innerScroll']}>
                {props.children}
            </div>
        </div>
    )
}
export default Scroll;
