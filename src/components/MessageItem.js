import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

const MessageItem = ({message}) => {
    return(
        <div>
            <li>
                <p>@{message.username}</p>
                <p>{message.body}</p>
            </li>
        </div>
    )
};

MessageItem.propTypes = {
    message: PropTypes.object.isRequired
};

export default MessageItem;