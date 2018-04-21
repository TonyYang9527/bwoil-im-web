import React from 'react';
import {observer} from "mobx-react";
import './TextMessage.less';

const TextMessage = observer(({message}) => {
        const textStyle = message.fromUser ? 'textMessage-fromUser' : 'textMessage-fromGuest';
        return (
            <span className={textStyle}>{message.message}</span>
        );
    }
);

export default TextMessage;