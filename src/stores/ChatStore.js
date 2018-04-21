import {observable, action, autorun} from 'mobx';

import {messages} from '../mock/Data';

const data = observable({
    scrollbar: null,
    textArea: null,
    messages: observable.map(),
    text: '',
    addContactShow: false,
    addContactFilter: '',
    preAdd: observable.map()
});

const actions = {
    init: action((id) => {
        data.messages.clear();
        messages.forEach((elem) => {
            data.messages.set(elem.id, elem);
        });
    }),
    getTextBox: action(e => {
        if (!data.textArea) {
            data.textArea = e.target;
        }
    }),
    changeText: action(e => {
        data.text = e.target.value;
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
            data.textArea.focus();
            data.messages.set(message.id, message);
        }
    }),
    showAddContact: action(() => {
        data.addContactShow = true;
    }),
    hideAddContact: action(() => {
        data.addContactShow = false;
        data.addContactFilter = '';
        data.preAdd.clear();
    }),
    preAdding: action((checked, contact) => {
        if (checked) {
            if (!data.preAdd.has(contact.id)) {
                data.preAdd.set(contact.id, contact);
            }
        } else {
            if (data.preAdd.has(contact.id)) {
                data.preAdd.delete(contact.id);
            }
        }

    }),
    changeAddContactFilter: action(e => {
        data.addContactFilter = e.target.value;
    }),
    clearAddContactFilter: action(() => {
        data.addContactFilter = '';
    }),
    addContact: action(() => {
        data.preAdd.clear();
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
    }
    if (!data.text && data.scrollbar) {
        data.scrollbar.scrollToBottom();
    }
});

export default {data, actions};