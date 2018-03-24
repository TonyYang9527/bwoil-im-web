import React from 'react';
import {observer} from 'mobx-react';
import {Icon} from 'antd';
import Steps from '../steps/Steps';
import MessagesBox from '../messagesBox/MessagesBox';
import OfferZone from '../offerZone/OfferZone';
import TextBox from '../textBox/TextBox';

import contentStore from '../../stores/ContentStore';
import './ContentContainer.less';

const ContentContainer = observer(() => {
    return (
        <div className='content'>
            <div className='head'>
                <span>{contentStore.data.name}</span>
                <Icon type='user-add'/>
            </div>
            <Steps store={contentStore}/>
            <MessagesBox store={contentStore}/>
            <OfferZone store={contentStore}/>
            <TextBox store={contentStore}/>
        </div>
    );
});

export {ContentContainer} ;
