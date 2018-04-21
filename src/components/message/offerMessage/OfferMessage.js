import React from 'react';
import {observer} from "mobx-react";
import './OfferMessage.less';

const OfferMessage = observer(({store, message}) => {
        const offerStyle = message.fromUser ? 'offerMessage-fromUser' : 'offerMessage-fromGuest';
        return (
            <div className={offerStyle}>
                <img className='sub-badge' src={require('../../../assets/clock.svg')} alt=''/>
                <img className='sub-icon' src={require('../../../assets/docs.svg')} alt=''/>
                <span className='subMessage-name'>{message.message}</span>
            </div>
        );
    }
);

export default OfferMessage;