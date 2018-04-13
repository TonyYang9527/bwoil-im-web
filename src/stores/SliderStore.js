import React from 'react';
import {observable, action} from 'mobx';

import globalStore from './GlobalStore';

const data = observable({
    activated: '1',
    filter: '',
    input: null,
    get sessions() {
        return this.activated === '1' && this.filter ? globalStore.data.session_list
                .filter((elem) => elem.name.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1)
            : globalStore.data.session_list;
    },
    get contacts() {
        return this.activated === '2' && this.filter ? globalStore.data.contact_list
                .filter((elem) => elem.name.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1)
            : globalStore.data.contact_list;
    }
});

const actions = {
    onChange: action(e => {
        data.filter = e.target.value;
        data.input = data.input ? data.input : e.target;
    }),
    clearFilter: action(() => {
        data.filter = '';
        data.input.focus();
    }),
    onTabChange: action(key => {
        data.activated = key;
        data.filter = '';
        // if (data.input) {
        //     data.input.focus();
        // }
    })
};

const verticalBarStyle = function ({style, ...props}) {
    const thumbStyle = {backgroundColor: '#5F5F5F', width: 4, height: 56, right: -4};
    return <div style={{...style, ...thumbStyle}} {...props} />;
};

const horizontalBarStyle = function ({style, ...props}) {
    const thumbStyle = {visibility: 'hidden'};
    return (<div style={{...style, ...thumbStyle}} {...props} />);
};

export default {data, actions, verticalBarStyle, horizontalBarStyle};