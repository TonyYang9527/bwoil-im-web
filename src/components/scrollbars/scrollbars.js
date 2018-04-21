import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars';

var self = null;

const renderThumbHorizontal = function ({style, ...props}) {
    const thumbStyle = {visibility: 'hidden'};
    return (<div style={{...style, ...thumbStyle}} {...props} />);
};

const renderThumbVertical = function ({style, ...props}) {
    const thumbStyle = {
        ...style,
        backgroundColor: '#5F5F5F',
        width: 4,
        right: -4
    };
    return (<div style={thumbStyle} {...props} />);
};

const BwoilScrollbars = ({children}) => {
    const props = {
        renderThumbHorizontal: renderThumbHorizontal,
        renderThumbVertical: renderThumbVertical,
        thumbSize: 56
    };
    return (<Scrollbars ref={scrollbar => self = scrollbar} {...props}> {children} </Scrollbars>);
};
export {BwoilScrollbars};