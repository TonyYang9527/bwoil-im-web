import {observable, when} from 'mobx';

import {sessions} from "../mock/DataStore";
import {messages} from '../mock/DataStore';
import {profiles} from "../mock/DataStore";

import ContactStore from "./ContactStore";
import MessageStore from "./MessageStore";

const data = observable({
    contact_list: [],
    session_list: [],
    contact: null
});

when(() => !data.contact,
    () => {
        console.log('初始化一次');
        data.contact_list = sessions.map(function (elem, index) {
            let temp = new ContactStore();
            temp.id = elem.id;
            temp.image = elem.image;
            temp.name = elem.name;
            temp.unread = elem.unread;
            temp.time = elem.time;
            if (index % 2 === 0) {
                temp.messages = messages.map(elem => {
                    let temp = new MessageStore();
                    temp.avatar = elem.avatar;
                    temp.type = elem.type;
                    temp.message = elem.message;
                    temp.status = elem.status;
                    temp.time = elem.time;
                    temp.fromUser = elem.fromUser;
                    return temp;
                });
            } else {
                temp.messages = [];
            }
            temp.profiles = profiles;
            return temp;
        });
        data.session_list = data.contact_list.filter(function (elem) {
            return elem.messages.length > 0;
        });
    }
);

export default {data}