import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import MessageItem from './MessageItem';

const MessageList = ({messages}) => {

    return(
        <div>
            <ul>
            {messages.map((message, i) =>{
                return <MessageItem key={i} message={message} />
            })}
            {messages.length === 0 && <li>
                Pas de messages
                </li>}
            </ul>
        </div>
    );
};

export default MessageList;