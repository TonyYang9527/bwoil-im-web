import {action, observable} from "mobx";

const state = observable({
    modalShow: false,
    status: true,
    data: null
});

const actions = {
    openModal: action((id, status) => {
        state.modalShow = true;
        state.id = id;
        state.status = status;
    }),
    changeModal: action(() => {
        state.status = false;
    }),
    closeModal: action((e) => {
        if (e.target.nodeName === 'SPAN') {
            state.modalShow = false;
            state.data = null;
        }
    })
};

export default {state, actions}