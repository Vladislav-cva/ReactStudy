import React from 'react';
import classN from './dialogs.module.css';
import DialogItem from './dialogsItem/dialogsItem';
import MessageItem from './messageItem/messageItem';

function Dialogs (props) {
    let dialogsDataParse = props.dialogsData.map((item)=> <DialogItem name={item.name} id={item.id} /> );
    let messageDataParse = props.messageData.map((item)=> <MessageItem message={item.message}/>);

    let newMessage = React.createRef();
    let addMessage = () => {
        let messageSend = newMessage.current.value;
        alert(messageSend)
    };


    return (
        <div className={classN.content}>
            <div className={classN.dialogs}>
                <div className={classN.itemDialogs}>
                    {dialogsDataParse}
                </div>
                <div className={classN.messeges}>
                   <div>
                    <textarea ref={newMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send message</button>
                </div>
                    {messageDataParse}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;