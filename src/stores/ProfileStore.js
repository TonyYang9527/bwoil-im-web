import {observable, action} from 'mobx';

import {profiles} from "../mock/Data";

const data = observable({
    profiles: {}
});

const actions = {
    init: action((id) => {
        data.profiles = profiles;
    }),
    clear: action(() => {
        data.profiles = {};
    })
};

export default {data, actions};