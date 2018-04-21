import {observable, action, autorun} from 'mobx';

import sessionStore from './SessionStore';
import {contacts} from '../mock/Data';

const data = observable({
    contacts: observable.map()
});

const actions = {
    init: action((contacts) => {
        contacts.forEach((elem) => {
            data.contacts.set(elem.id, elem);
        });
    }),
    add: action((contact) => {
        if (!data.contacts.has(contact.id)) {
            data.contacts.set(contact.id, contact);
        }
    }),
    rename: action((id, name) => {
        if (data.contacts.has(id)) {
            data.contacts.get(id).name = name;
        }
    }),
    delete: action((id) => {
        if (data.contacts.has(id)) {
            data.contacts.delete(id);
        }
    }),
    select: action((id) => {
        if (data.contacts.has(id)) {
            if (!sessionStore.state.sessions.has(id)) {
                let temp = data.contacts.get(id);
                let session = {
                    id: temp.id,
                    name: temp.name,
                    status: temp.status,
                    image: temp.image,
                    message: '',
                    unread: 0,
                    time: '',
                    partners: [id]
                };
                sessionStore.actions.add(session);
                sessionStore.actions.select(session.id);
            } else {
                sessionStore.actions.select(id);
            }
        }
    })
};

autorun(() => {
    if (!data.contacts.size) {
        actions.init(contacts);
    }
});

export default {data, actions};