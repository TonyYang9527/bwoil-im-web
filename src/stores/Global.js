import React from "react";
import {observable, when, action} from 'mobx';

import {sessions} from "../mock/Data";
import {contacts} from '../mock/Data';

import SessionStore from './SessionStore';
import ContactStore from "./ContactStore";
import MessageStore from "./MessageStore";

const data = observable({
    session_list: [],
    contact_list: [],
    input: null,
    session: null,
    activated: '1',
    filter: '',
    get sessions() {
        let that = this;
        return that.activated === '1' && that.filter ?
            that.session_list.filter((elem) =>
                elem.partner.find((el) => {
                        return el.name.toLowerCase().indexOf(that.filter.toLowerCase()) !== -1
                    }
                )
            ) :
            that.session_list;
    },
    get contacts() {
        let that = this;
        return that.activated === '2' && that.filter ?
            that.contact_list.filter((elem) => {
                    return elem.name.toLowerCase().indexOf(that.filter.toLowerCase()) !== -1
                }
            ) : that.contact_list;
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
    })
};

when(() => !data.session,
    () => {
        data.contact_list = contacts.map((elem) => {
            let temp = new ContactStore();
            temp.id = elem.id;
            temp.name = elem.name;
            temp.image = elem.image;
            return temp;
        });

        data.session_list = sessions.map((elem) => {

            let temp = new SessionStore();

            temp.partner = data.contact_list.filter((el) => {
                return elem.partner.find((e) => e.id === el.id);
            });


            temp.read = elem.read.map((el) => {
                let temp = new MessageStore();
                temp.avatar = el.avatar;
                temp.type = el.type;
                temp.message = el.message;
                temp.status = el.status;
                temp.time = el.time;
                temp.fromUser = el.fromUser;
                return temp;
            });

            temp.unread = elem.unread.map((el) => {
                let temp = new MessageStore();
                temp.avatar = el.avatar;
                temp.type = el.type;
                temp.message = el.message;
                temp.status = el.status;
                temp.time = el.time;
                temp.fromUser = el.fromUser;
                return temp;
            });

            temp.profiles = elem.profiles;

            return temp;
        });

        data.session = data.session_list.length > 0 ? data.session_list[0] : null;
    }
);

const verticalBarStyle = function ({style, ...props}) {
    const thumbStyle = {backgroundColor: '#5F5F5F', width: 4, right: -4};
    return <div style={{...style, ...thumbStyle}} {...props} />;
};

const horizontalBarStyle = function ({style, ...props}) {
    const thumbStyle = {visibility: 'hidden'};
    return (<div style={{...style, ...thumbStyle}} {...props} />);
};

export default {data, actions, verticalBarStyle, horizontalBarStyle}