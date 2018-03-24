import React from 'react';
import {extendObservable} from 'mobx';
import {Icon} from 'antd';

import TextMessage from '../components/message/textMessage/TextMessage';
import ImageMessage from '../components/message/imageMessage/ImageMessage';
import OfferMessage from '../components/message/offerMessage/OfferMessage';

function MessageStore() {
    extendObservable(this, {
        fromUser: false,
        type: 'text',
        status: '',
        avatar: '',
        message: '',
        time: '',
        get messageStyle() {
            return this.fromUser ? 'message-fromUser' : 'message-fromGuest';
        },
        get textStyle() {
            return this.fromUser ? 'textMessage-fromUser' : 'textMessage-fromGuest';
        },
        get imageStyle() {
            return this.fromUser ? 'imageMessage-fromUser' : 'imageMessage-fromGuest';
        },
        get offerStyle() {
            return this.fromUser ? 'offerMessage-fromUser' : 'offerMessage-fromGuest';
        },
        get messageByType() {
            switch (this.type) {
                case 'text':
                    return <TextMessage store={this}/>;
                case 'image':
                    return <ImageMessage store={this}/>;
                case 'sub':
                    return <OfferMessage store={this}/>;
                default:
                    return <TextMessage store={this}/>;
            }
        },
        get marker() {
            if (this.fromUser) {
                switch (this.status) {
                    case 'sent':
                        return <Icon type='check' style={{fontSize: 9, color: '#B0B0B0'}}/>;
                    case 'received':
                        return ['', ''].map((elem, index) => <Icon type='check'
                                                                   style={{fontSize: 9, color: '#B0B0B0'}}
                                                                   key={index}/>);
                    case 'read':
                        return ['', ''].map((elem, index) => <Icon type='check'
                                                                   style={{fontSize: 9, color: '#5CB0FF'}}
                                                                   key={index}/>);
                    default:
                        return null;
                }
            }
            return null;
        }
    })
}

export default MessageStore;