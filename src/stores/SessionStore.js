import {observable, action, autorun} from 'mobx';

import globalStore from './GlobalStore';
import messageStore from './MessageStore';
import conversationStore from './ConversationStore';
import stepStore from './StepStore';
import profileStore from './ProfileStore';
import addContactStore from './AddContactStore';
import modalStore from './ModalStore';

import {sessions} from '../mock/Data';

const state = observable({
    sessions: observable.map(),
    selected: {},  //selected session
      model :{
             covsid :"" ,
             key :"",
             visible:false ,
             title:"" ,
             okText:"" ,
        }
});

const actions = {
    init: action((sessions) => {
        sessions.forEach((item) => {
            state.sessions.set(item.id, { ...item, className:'session'});
        });
    }),

    select: action((id) => {
        console.log("select") ;
        if (state.sessions.has(id)) {
            state.selected = state.sessions.get(id);
            state.selected.unread = 0;

            messageStore.actions.init(id);
            conversationStore.actions.init(id);
            stepStore.actions.init(id);
            profileStore.actions.init(id);
        }
        globalStore.actions.restoreTab();
    }),

    add: action((session) => {
        state.sessions.set(session.id, session);
        globalStore.actions.restoreTab();
    }),

    /***** more function ******/
    dropdown: action((e, id) => {
        modalStore.actions.open(id, e.key);
        e.domEvent.stopPropagation();
    }),

    delete: action((id) => {
        if (state.sessions.has(id)) {
            state.sessions.delete(id);
            stepStore.actions.clear();
            profileStore.actions.clear();
        }
    }),
    rename: action((id, name) => {
        if (state.sessions.has(id)) {
            state.sessions.get(id).name = name;
        }
    }),
    exit: action((id) => {
        if (state.sessions.has(id)) {
            state.sessions.delete(id);
            stepStore.actions.clear();
            profileStore.actions.clear();
        }
    }),
    addContact: action((id, preAdd) => {
        let temp = preAdd.values()
            .map((elem) => elem.id)
            .filter((elem) => {
                return !state.selected.partners.find((el) => elem === el);
            });
        console.log(state.selected.partners, temp);
        state.selected.partners = state.selected.partners.concat(temp);
        console.log(state.selected.partners);
        addContactStore.actions.closeModal();
    })
};

autorun(() => {
    if (!state.sessions.size) {
        actions.init(sessions);
    }
});

export default {state, actions};