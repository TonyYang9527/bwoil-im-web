import {observable, action} from 'mobx';

import {step} from '../mock/Data';

const data = observable({
    id: 0,
    step: {}
});

const actions = {
    init: action((id) => {
        data.id = id;
        data.step = step;
    }),
    clear: action(() => {
        data.step = {};
    })
};

export default {data, actions};