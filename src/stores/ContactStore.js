import {extendObservable, action} from 'mobx';

import globalStore from './GlobalStore';
import sliderStore from './SliderStore';


function ContactStore() {
    extendObservable(this, {
        id: 0,
        image: '',
        name: '',
        unread: 0,
        time: '',
        messages: [],
        profiles: [],
        getFocus: '',
        chooseContact: action.bound(function () {
            let that = this;

            if (!globalStore.data.contact || globalStore.data.contact.id !== that.id) {
                that.getFocus = ' focused';
                if (globalStore.data.contact) {
                    globalStore.data.contact.getFocus = '';
                }
                globalStore.data.contact = that;
                let index = globalStore.data.session_list.findIndex(function (elem) {
                    return that.id === elem.id;
                });
                if (index === -1) {
                    globalStore.data.session_list.push(that);
                }
            }

            if (sliderStore.data.activated !== '1') {
                sliderStore.data.activated = '1';
            }
        })
    })
}

export default ContactStore;