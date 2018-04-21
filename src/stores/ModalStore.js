import {action, observable, autorun} from "mobx";
import sessionStore from './SessionStore';

const state = observable({
    id: 0,
    type: "",
    name: "",
    visible: false,
    title: "",
    okText: ""
});

const actions = {

    open: action((id, type) => {
        state.visible = true;
        state.id = id;
        state.type = type;

        if (type === "1") {
            state.okText = "delete";
            state.title = 'Delete chat';
        } else if (type === "2") {
            state.okText = "Rename";
            state.title = "Rename group";
        } else if (type === "3") {
            state.okText = "Exit";
            state.title = "Exit group";
        }
    }),

    onCancel: action((e) => {
        if (e.target.nodeName === 'BUTTON') {
            state.visible = false;
            e.stopPropagation();
        }
    }),

    changeText: action(e => {
        state.name = e.target.value;
    }),

    onOk: action((e) => {
        if (state.type === "1") {
            sessionStore.actions.delete(state.id);
        } else if (state.type === "2") {
            sessionStore.actions.rename(state.id, state.name);
        } else if (state.type === "3") {
            sessionStore.actions.delete(state.id);
        }
        state.visible = false;
        e.stopPropagation();
    })
};

autorun(() => {
    if (!state.visible) {
        setTimeout(() => {
            state.name = '';
            state.id = 0;
            state.type = "";
            state.title = "";
            state.okText = "";
        }, 500);
    }
});

export default {state, actions};