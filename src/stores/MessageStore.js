import {observable, action, autorun} from 'mobx';

import {messages} from '../mock/Data';

const data = observable({
    id: 0,
    messages: observable.map(),
    scrollbar: null
});

const actions = {
    init: action((id) => {
        if (data.id !== id) {
            data.id = id;
            data.messages.clear();
            messages.forEach((elem) => {
                data.messages.set(elem.id, elem);
            });
        }
    }),
    addMessage: action((message) => {
        data.messages.set(message.id, message);
    }),
    setScrollbar: action((scrollbar) => {
        data.scrollbar = scrollbar;
    }),
    scrollToBottom: action(() => {
        if (data.scrollbar) {
            data.scrollbar.scrollToBottom();
        }
    })
};

autorun(() => {
    if (data.scrollbar) {
        data.scrollbar.scrollToBottom();
    }
});

export default {data, actions}