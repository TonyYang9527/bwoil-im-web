import React from 'react';
import {observer} from "mobx-react";
import {Icon} from 'antd';
import './Message.less';

import TextMessage from '../textMessage/TextMessage';
import ImageMessage from '../imageMessage/ImageMessage';
import OfferMessage from '../offerMessage/OfferMessage';

const Message = observer(({message}) => {
        const messageStyle = message.fromUser ? 'message-fromUser' : 'message-fromGuest';

        let mes = null;
        switch (message.type) {
            case 'text':
                mes = <TextMessage message={message}/>;
                break;
            case 'image':
                mes = <ImageMessage message={message}/>;
                break;
            case 'sub':
                mes = <OfferMessage message={message}/>;
                break;
            default:
                mes = <TextMessage message={message}/>;
                break;
        }

        let marker = null;
        if (message.fromUser) {
            switch (message.status) {
                case 'sent':
                    marker = <Icon type='check' style={{fontSize: 9, color: '#B0B0B0'}}/>;
                    break;
                case 'received':
                    marker = ['', ''].map((elem, index) => <Icon type='check'
                                                                 style={{fontSize: 9, color: '#B0B0B0'}}
                                                                 key={index}/>);
                    break;
                case 'read':
                    marker = ['', ''].map((elem, index) => <Icon type='check'
                                                                 style={{fontSize: 9, color: '#5CB0FF'}}
                                                                 key={index}/>);
                    break;
                default:
                    marker = null;
                    break;
            }
        }

        return (
            <div className={messageStyle + ' message'}>
                {message.fromUser ? null : <img className='message-avatar' src={message.avatar} alt=''/>}
                <div className='message-content'>
                    {mes}
                    <span className='message-prompt'>
                    <span className='message-time'>{message.time}</span>
                        {marker}
                    </span>
                </div>
            </div>
        );
    }
);

export default Message;