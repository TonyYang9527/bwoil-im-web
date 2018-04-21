import React from 'react';
import {observer} from "mobx-react";
import {Scrollbars} from 'react-custom-scrollbars';
import Message from '../message/message/Message';
import './MessagesBox.less';

import messageStore from '../../stores/MessageStore';

const MessagesBox = observer(() => {
        return (
            <Scrollbars style={{width: 480, height: 399}}
                        ref={scrollbar => messageStore.actions.setScrollbar(scrollbar)}
                        renderThumbVertical={renderThumbVertical}
                        renderThumbHorizontal={renderThumbHorizontal}
                        thumbSize={56}>
                {messageStore.data.messages.values().map((elem, index) => <Message message={elem} key={index}/>)}
            </Scrollbars>
        );
    }
);

const renderThumbVertical = function ({style, ...props}) {
    const thumbStyle = {backgroundColor: '#5F5F5F', width: 4, right: -4};
    return (<div style={{...style, ...thumbStyle}} {...props} />);
};

const renderThumbHorizontal = function ({style, ...props}) {
    const thumbStyle = {visibility: 'hidden'};
    return (<div style={{...style, ...thumbStyle}} {...props} />);
};

export default MessagesBox;