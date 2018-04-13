import React from 'react';
import {extendObservable, action, autorun} from 'mobx';

import OfferForm from '../components/popWindow/offerForm/OfferForm';
import OfferConfirmation from '../components/popWindow/offerConfirmation/OfferConfirmation';
import ConfirmOfferData from '../components/popWindow/confirmOfferData/ConfirmOfferData';
import OfferConfirm from '../components/popWindow/offerConfirm/OfferConfirm';
import ContactWay from '../components/popWindow/contactWay/ContactWay';
import ValidityPeriod from '../components/popWindow/validityPeriod/ValidityPeriod';
import ExtendValidityPeriod from '../components/popWindow/extendValidityPeriod/ExtendValidityPeriod';
import CheckInfo from '../components/popWindow/checkInfo/CheckInfo';
import AddContact from '../components/popWindow/addContact/AddContact';
import StatusStore from '../stores/StatusStore';

import MessageStore from "./MessageStore";
import global from './Global';

const Default_Status = 0;
const Make_Offer = 1;
const Offer_Confirmation = 2;
const Offer_Confirmed = 3;
const On_Sub = 4;
const On_Sub_Confirmation = 5;
const Extend_Period = 6;
const Extend_Period_Confirmation = 7;
const Contact_MO = 8;

function SessionStore() {
    const that = this;
    extendObservable(this, {
        partner: [],
        read: [],
        unread: [],
        profiles: [],
        focusStyle: '',
        steps: ['Chat', 'Offer', 'Onsub', 'Complete'],
        current: 1,
        text: '',
        textBox: null,
        scrollbar: null,
        popStatus: 0,
        filter: '',
        preAdd: [],
        get name() {
            let name = '';
            this.partner.forEach((elem, index) => {
                if (index) {
                    name += '，' + elem.name;
                } else {
                    name += elem.name;
                }
            });
            return name;
        },
        get image() {
            return this.partner.length > 0 ? this.partner[0].image : '';
        },
        get message() {
            if (this.unread.length > 0) {
                return this.unread[this.unread.length - 1].message;
            } else {
                if (this.read.length > 0) {
                    return this.read[this.read.length - 1].message;
                } else {
                    return '';
                }
            }
        },
        get time() {
            return '01:23';
        },
        get messages() {
            return this.read.concat(this.unread);
        },
        get restContacts() {
            const that = this;
            return that.filter ?
                global.data.contact_list.filter((elem) => !that.partner.find((ele) => ele.id === elem.id))
                    .filter((elem) => elem.name.toLowerCase().indexOf(that.filter.toLowerCase()) !== -1)
                : [];
        },
        get popWindow() {
            switch (this.popStatus) {
                case Make_Offer:
                    return <OfferForm store={{load_rate: '', discharge_rate: '', begin_time: null, end_time: null}}/>;
                case Offer_Confirmation:
                    let temp1 = new StatusStore();
                    return <ConfirmOfferData store={temp1}/>;
                case Offer_Confirmed:
                    return <OfferConfirm/>;
                case On_Sub:
                    let temp2 = new StatusStore();
                    return <ValidityPeriod store={temp1}/>;
                case On_Sub_Confirmation:
                    return <AddContact store={this}/>;
                case Extend_Period:
                    let temp3 = new StatusStore();
                    return <ExtendValidityPeriod store={temp2}/>;
                case Extend_Period_Confirmation:
                    return <CheckInfo/>;
                case Contact_MO:
                    return <ContactWay/>;
                default:
                    return null;
            }
        },
        chooseSession: action.bound(function () {
            if (global.data.session !== this) {
                if (global.data.session) {
                    global.data.session.blur();
                }
                this.focus();
                global.data.session = this;
                this.read = this.read.concat(this.unread);
                this.unread.splice(0, this.unread.length);
            }
        }),
        focus: action.bound(function () {
            this.focusStyle = ' focused';
        }),
        blur: action.bound(function () {
            this.focusStyle = '';
        }),
        openAddContact: action.bound(function () {
            this.popStatus = On_Sub_Confirmation;
        }),
        onSearchChange: action.bound(function (e) {
            this.filter = e.target.value;
        }),
        clearFilter: action.bound(function () {
            this.filter = '';
        }),
        addContact: action.bound(function () {
            this.partner = this.partner.concat(this.preAdd);
            this.closePopWindow();
        }),
        makeOffer: action.bound(function () {
            this.popStatus = Make_Offer;
        }),
        makeOfferConfirmation: action.bound(function () {
            this.popStatus = Offer_Confirmation;
        }),
        closePopWindow: action.bound(function () {
            this.preAdd.splice(0, this.preAdd.length);
            this.popStatus = Default_Status;
        }),
        textBoxFocus: action.bound(function (e) {
            if (!this.textBox) {
                this.textBox = e.target;
            }
        }),
        textBoxChange: action.bound(function (e) {
            this.text = e.target.value;
        }),
        textBoxEnter: action((e) => {
            e.preventDefault();
            if (this.text) {
                let temp = new MessageStore();
                temp.avatar = require("../assets/master.jpg");
                temp.type = "text";
                temp.message = this.text;
                temp.status = "sent";
                temp.time = "18:36";
                temp.fromUser = true;

                this.read.push(temp);
                this.text = '';
                this.textBox.focus();
            }
        })
    });

    autorun(function () {
        if (that.text) {
            if (that.textBox.scrollHeight > that.textBox.clientHeight) {
                if (!that.textBox.classList.contains('with-scrollbar')) {
                    that.textBox.classList.add('with-scrollbar');
                }
            } else {
                if (that.textBox.classList.contains('with-scrollbar')) {
                    that.textBox.classList.remove('with-scrollbar');
                }
            }
        }
        if (that.textBox && !that.text && that.scrollbar) {
            that.scrollbar.scrollToBottom();
        }
    })

}

export default SessionStore;