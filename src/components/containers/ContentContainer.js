import React from 'react';
import {observer} from 'mobx-react';
import {Icon} from 'antd';
import Steps from '../steps/Steps';
import MessagesBox from '../messagesBox/MessagesBox';
import OfferZone from '../offerZone/OfferZone';
import TextBox from '../textBox/TextBox';

import './ContentContainer.less';

const ContentContainer = observer(({store}) => {
    return (
        store.data.session ?
            <div className='content'>
                <div className='head'>
                    <span>{store.data.session.name}</span>
                    <Icon type='user-add' onClick={store.data.session.openAddContact}/>
                </div>
                <Steps store={store.data.session}/>
                <MessagesBox store={store.data.session}/>
                <OfferZone store={store.data.session}/>
                <TextBox store={store.data.session}/>
            </div> : <div className='content'/>
    );
});

export {ContentContainer};
