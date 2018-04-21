import React from 'react';
import {observer} from 'mobx-react';
import {Icon} from 'antd';
import './ContentContainer.less';
import Steps from '../steps/Steps';
import MessagesBox from '../messagesBox/MessagesBox';
import OfferZone from '../offerZone/OfferZone';
import TextBox from '../textBox/TextBox';

import sessionStore from '../../stores/SessionStore';
import addContactStore from '../../stores/AddContactStore';

const ContentContainer = observer(() => {
    return (
        sessionStore.state.selected ?
            <div className='content'>
                <div className='head'>
                    <span>{sessionStore.state.selected.name}</span>
                    <Icon type='user-add' onClick={() => addContactStore.actions.openModal(1)}/>
                </div>
                <Steps/>
                <MessagesBox/>
                <OfferZone/>
                <TextBox/>
            </div> : <div className='content'/>
    );
});

export {ContentContainer};
