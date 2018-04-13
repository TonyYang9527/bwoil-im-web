import React from 'react';
import {observable, action} from 'mobx';

import OfferForm from '../components/popWindow/offerForm/OfferForm';
import OfferConfirmation from '../components/popWindow/offerConfirmation/OfferConfirmation';
import OfferConfirm from '../components/popWindow/offerConfirm/OfferConfirm';
import ContactWay from '../components/popWindow/contactWay/ContactWay';
import ValidityPeriod from '../components/popWindow/validityPeriod/ValidityPeriod';
import ExtendValidityPeriod from '../components/popWindow/extendValidityPeriod/ExtendValidityPeriod';
import CheckInfo from '../components/popWindow/checkInfo/CheckInfo';
import AddContact from '../components/popWindow/addContact/AddContact';

import StatusStore from '../stores/StatusStore';

const make_offer = 1;
const offer_confirmation = 2;
const offer_Confirmed = 3;
const on_sub = 4;
const on_sub_confirmation = 5;
const extend_period = 6;
const extend_period_confirmation = 7;
const contact_MO = 8;

const data = observable({
    status: 0,
    get popWindow() {
        switch (this.status) {
            case make_offer:
                return <OfferForm store={{load_rate: '', discharge_rate: '', begin_time: null, end_time: null}}/>;
            case offer_confirmation:
                return <OfferConfirmation
                    store={{load_rate: '', discharge_rate: '', begin_time: null, end_time: null}}/>;
            case offer_Confirmed:
                return <OfferConfirm/>;
            case on_sub:
                let temp1 = new StatusStore();
                return <ValidityPeriod store={temp1}/>;
            case on_sub_confirmation:
                return <AddContact/>;
            case extend_period:
                let temp2 = new StatusStore();
                return <ExtendValidityPeriod store={temp2}/>;
            case extend_period_confirmation:
                return <CheckInfo/>;
            case contact_MO:
                return <ContactWay/>;
            default:
                return null;
        }
    }
});

const makeOffer = action(() => data.status = make_offer);
const offerConfirmation = action(() => data.status = offer_confirmation);
const offerConfirm = action(() => data.status = offer_Confirmed);
const onSub = action(() => data.status = on_sub);
const onSubConfirmation = action(() => data.status = on_sub_confirmation);
const extendPeriod = action(() => data.status = extend_period);
const extendPeriodConfirmation = action(() => data.status = extend_period_confirmation);
const contactMo = action(() => data.status = contact_MO);
const close = action(() => data.status = 0);

export default {
    data, makeOffer, offerConfirmation, offerConfirm, onSub,
    onSubConfirmation, extendPeriod, extendPeriodConfirmation, contactMo, close
}