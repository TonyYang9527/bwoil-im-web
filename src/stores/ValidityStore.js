import {action, observable} from "mobx";

const state = observable({
    modalShow: false,
    status: false,
    id: 0,
    data: {load_rate: '', discharge_rate: '', begin_time: null, end_time: null},
});

const actions = {
    openModal: action((id, status) => {
        state.modalShow = true;
        state.status = status;
        state.id = id;
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