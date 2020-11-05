import React from 'react';
import classN from './../dialogs.module.css';

function MessageItem(props) {
    return(
    <div className={classN.messageItem}>{props.message}</div>
    )
};

export default MessageItem;