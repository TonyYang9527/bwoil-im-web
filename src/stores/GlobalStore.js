import React from 'react';
import {observable, action} from 'mobx';

import sessionStore from './SessionStore';
import contactStore from './ContactStore';

const data = observable({
    filter: '',
    tabKey: '1',
    get filterSessions() {
        let that = this;
        return that.filter && that.tabKey === '1' ?
            sessionStore.state.sessions.values()
                .filter((elem) => elem.name.toLowerCase().indexOf(that.filter.toLowerCase()) !== -1)
            : sessionStore.state.sessions.values();
    },
    get filterContacts() {
        let that = this;
        return that.filter && that.tabKey === '2' ?
            contactStore.data.contacts.values()
                .filter((elem) => elem.name.toLowerCase().indexOf(that.filter.toLowerCase()) !== -1)
            : contactStore.data.contacts.values();
    }
});

const actions = {
    clearFilter: action(() => {
        data.filter = '';
    }),
    changeFilter: action(e => {
        data.filter = e.target.value;
    }),
    changeTab: action(key => {
        data.tabKey = key;
        data.filter = '';
    }),
    restoreTab: action(() => {
        data.tabKey = '1';
    })
};

const verticalBarStyle = function ({style, ...props}) {
    const thumbStyle = {backgroundColor: '#5F5F5F', width: 4, right: -4};
    return <div style={{...style, ...thumbStyle}} {...props} />;
};

const horizontalBarStyle = function ({style, ...props}) {
    const thumbStyle = {visibility: 'hidden'};
    return (<div style={{...style, ...thumbStyle}} {...props} />);
};

export default {data, actions, verticalBarStyle, horizontalBarStyle}