import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MessageList from './MessageList';
import MessageBar from './MessageBar';

const generalStyle = {
    borderRadius: 10,
    width: 800,
    backgroundColor: "#4169E1",
    padding: 10,
    textAlign: 'center',
    display: 'block',
    margin: 'auto',


  };

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const handleMessageSubmit = message => {
        setMessages([...messages, {body: message, username: "Moi"}]);
    };
    return(
        <div style={generalStyle}>
            <MessageList messages={messages} />
            <MessageBar handleMessageSubmit={handleMessageSubmit} />
        </div>

    );
};

export default Chat;