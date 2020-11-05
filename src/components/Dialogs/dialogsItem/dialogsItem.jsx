import React from 'react';
import classN from './../dialogs.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
    return (
        <div className={classN.item}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
};


export default DialogItem;