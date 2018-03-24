import React from 'react';
import {observer} from "mobx-react";
import './OfferMessage.less';

const OfferMessage = observer(({store}) => {
        return (
            <div className={store.offerStyle}>
                <img className='sub-badge' src={require('../../../assets/clock.svg')} alt=''/>
                <img className='sub-icon' src={require('../../../assets/docs.svg')} alt=''/>
                <span className='subMessage-name'>{store.message}</span>
            </div>
        );
    }
);

export default OfferMessage;