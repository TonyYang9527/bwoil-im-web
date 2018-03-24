import {observable, autorun, action} from 'mobx';

import globalStore from './GlobalStore';
import MessageStore from './MessageStore';

const data = observable({
    steps: ['Chat', 'Offer', 'Onsub', 'Complete'],
    current: 1,
    message: '',
    scrollbar: null,
    input: null,
    get name() {
        return globalStore.data.contact ? globalStore.data.contact.name : '';
    },
    get messages() {
        return globalStore.data.contact ? globalStore.data.contact.messages : [];
    }
});

autorun(function () {
    if (data.message) {
        if (data.input.scrollHeight > data.input.clientHeight) {
            if (!data.input.classList.contains('with-scrollbar')) {
                data.input.classList.add('with-scrollbar');
            }
        } else {
            if (data.input.classList.contains('with-scrollbar')) {
                data.input.classList.remove('with-scrollbar');
            }
        }
    }
    if (data.scrollbar && !data.message) {
        data.scrollbar.scrollToBottom();
    }
});

const onFocus = action((e) => {
    data.input = data.input ? data.input : e.target;
});

const onChange = action((e) => {
    data.message = e.target.value;
});

const onPressEnter = action((e) => {
    e.preventDefault();
    if (data.message && globalStore.data.contact) {
        let temp = new MessageStore();
        temp.avatar = require("../assets/master.jpg");
        temp.type = "text";
        temp.message = data.message;
        temp.status = "sent";
        temp.time = "18:36";
        temp.fromUser = true;

        globalStore.data.contact.messages.push(temp);
        data.message = '';
        data.input.focus();
    }
});

export default {data, onFocus, onChange, onPressEnter}