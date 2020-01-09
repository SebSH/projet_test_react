import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Emoji from 'react-emoji-render';

const Input =styled.input`
    background: pink;
    border 1px solid black;
`
const MessageBar = props => {
    const [message, setMessage] = useState('');
        const handleChange = e => {            
            setMessage(e.target.value);
        };
        const handleSubmit = () => {
            if(message) {
                props.handleMessageSubmit(message);
                setMessage("");
            }
        };
    return(
        <div>
            <Input type="text" value={message} name="message" onChange={handleChange} placeholder="Votre message"></Input>
            <input type="submit" onSubmit={handleSubmit} value="Envoyer"></input>
            <Emoji text="This ❤️ sentence includes :+1: a variety of emoji types :)" />
        </div>
    )
};


export default MessageBar;