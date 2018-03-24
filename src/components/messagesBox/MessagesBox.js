import React from 'react';
import {observer} from "mobx-react";
import {Scrollbars} from 'react-custom-scrollbars';
import Message from '../message/message/Message';
import './MessagesBox.less';

const MessagesBox = observer(({store}) => {
        return <Scrollbars style={{width: 480, height: 399}} ref={scrollbar => store.data.scrollbar = scrollbar}
                           renderThumbVertical={renderThumbVertical}
                           renderThumbHorizontal={renderThumbHorizontal}
                           autoHide
                           autoHideTimeout={1000}
                           autoHideDuration={200}>
            {store.data.messages.map((elem, index) => <Message store={elem}   key={index}/>)}                                         
        </Scrollbars>
    }
);


const renderThumbVertical = function ({style, ...props}) {
    const thumbStyle = {backgroundColor: '#5F5F5F', width: 4, height: 56, right: -4};
    return (<div style={{...style, ...thumbStyle}} {...props} />);
};

const renderThumbHorizontal = function ({style, ...props}) {
    const thumbStyle = {visibility: 'hidden'};
    return (<div style={{...style, ...thumbStyle}} {...props} />);
};

export default MessagesBox;