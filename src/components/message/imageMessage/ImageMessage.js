import React from 'react';
import {observer} from "mobx-react";
import './ImageMessage.less';

const ImageMessage = observer(({message}) => {
        const imageStyle = message.fromUser ? 'imageMessage-fromUser' : 'imageMessage-fromGuest';
        return (
            <a href={message.message} target='_blank' className='imageMessage-link'>
                <img src={message.message} className={imageStyle} alt=''/>
            </a>
        );
    }
);

export default ImageMessage;