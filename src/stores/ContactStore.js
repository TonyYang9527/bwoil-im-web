import {extendObservable, action} from 'mobx';

import SessionStore from './SessionStore';
import global from './Global';

function ContactStore() {
    extendObservable(this, {
        id: 0,
        image: '',
        name: '',
        chooseContact: action.bound(function () {
            let session = global.data.sessions.find((elem) =>
                elem.partner.length === 1 && elem.partner[0].id === this.id
            );
            console.log('chooseContact', session);

            if (session) {
                session.chooseSession();
            } else {
                session = new SessionStore();
                session.partner.push(this);
                session.chooseSession();
                global.data.sessions.push(session);
            }
            global.data.activated = '1';
        }),
        addContactToSession: action.bound(function (e) {
            let that = this;
            if (!e.target.checked) {
                global.data.session.preAdd = global.data.session.preAdd.filter((elem) => elem.id !== that.id);
            } else {
                if (!global.data.session.preAdd.find((elem) => elem.id === that.id)) {
                    global.data.session.preAdd.push(this);
                }
            }
            console.log('带增加数组的长度', global.data.session.preAdd.length);
        })
    })
}

export default ContactStore;