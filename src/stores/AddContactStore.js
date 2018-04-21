import {action, observable} from "mobx";

import contactStore from './ContactStore';
import sessionStore from './SessionStore';

const state = observable({
    modalShow: false,
    id: 0,
    filter: '',
    preAdd: observable.map(),
    get contacts() {
        let that = this;
        return that.filter ? contactStore.data.contacts.values()
                .filter((elem) => elem.name.toLowerCase().indexOf(that.filter.toLowerCase()) !== -1)
            : [];
    }
});

const actions = {
    openModal: action((id) => {
        state.modalShow = true;
        state.id = id;
    }),
    closeModal: action(() => {
        state.id = 0;
        state.filter = '';
        state.preAdd.clear();
        state.modalShow = false;
    }),
    preAdding: action((checked, contact) => {
        if (checked) {
            state.preAdd.set(contact.id, contact);
        } else {
            state.preAdd.delete(contact.id);
        }
    }),
    changeFilter: action(e => {
        state.filter = e.target.value;
    }),
    clearFilter: action(() => {
        state.filter = '';
    }),
    addContact: action(() => {
        sessionStore.actions.addContact(state.id, state.preAdd);
    })
};

export default {state, actions};