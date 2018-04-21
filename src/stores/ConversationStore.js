import {observable, action, autorun} from 'mobx';

import messageStore from './MessageStore';

const data = observable({
    id: 0,
    textArea: null,
    text: '',
});

const actions = {
    init: action((id) => {
        if (data.id !== id) {
            data.id = id;
            data.text = '';
        }
    }),
    onChange: action((e) => {
        data.text = e.target.value;
    }),
    setTextArea: action(input => {
        data.textArea = input;
    }),
    sendMessage: action((e) => {
        e.preventDefault();
        if (data.text) {
            let message = {
                id: 101,
                avatar: require("../assets/master.jpg"),
                type: "text",
                message: data.text,
                status: "sent",
                time: "02:49",
                fromUser: true
            };
            data.text = '';
            messageStore.actions.addMessage(message);
        }
    })
};

autorun(() => {
    if (data.text) {
        if (data.textArea.scrollHeight > data.textArea.clientHeight) {
            if (!data.textArea.classList.contains('with-scrollbar')) {
                data.textArea.classList.add('with-scrollbar');
            }
        } else {
            if (data.textArea.classList.contains('with-scrollbar')) {
                data.textArea.classList.remove('with-scrollbar');
            }
        }
    } else {
        if (data.textArea) {
            data.textArea.focus();
        }
        messageStore.actions.scrollToBottom();
    }
});

export default {data, actions};