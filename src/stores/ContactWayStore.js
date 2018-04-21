import {action, observable} from "mobx";

const state = observable({
    modalShow: false,
    id: 0,
    data: null,
});

const actions = {
    openModal: action((id) => {
        state.modalShow = true;
        state.id = id;
    }),
    closeModal: action(() => {
        state.modalShow = false;
        state.id = 0;
        state.data = null;
    })
};

export default {state, actions};