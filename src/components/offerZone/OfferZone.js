import React from 'react';
import {observer} from "mobx-react";
import {Icon, Button} from 'antd';
import './OfferZone.less';

import Offer from '../popWindow/offer/Offer';
import OnSub from '../popWindow/onSub/OnSub';
import ValidityPeriod from '../popWindow/validityPeriod/ValidityPeriod';
import CheckInfo from '../popWindow/checkInfo/CheckInfo';
import ContactWay from '../popWindow/contactWay/ContactWay';

import offerStore from '../../stores/OfferStore';
import onSubStore from '../../stores/OnSubStore';
import validityStore from '../../stores/ValidityStore';
import checkInfoStore from '../../stores/CheckInfoStore'
import contactWayStore from '../../stores/ContactWayStore';

const OfferZone = observer(() => {
        return (
            <div className='sub-tool'>
                <div>
                    <Button onClick={() => offerStore.actions.openModal(1, false)}>Make Offer</Button>
                    <Button onClick={() => offerStore.actions.openModal(1, true)}>On Sub</Button>
                    <Button onClick={() => onSubStore.actions.openModal(1, false)}>Lift Sub</Button>
                    <Button onClick={() => onSubStore.actions.openModal(1, true)}>Fail Sub</Button>
                    <Button onClick={() => validityStore.actions.openModal(1, true)}>Clean Fix</Button>
                </div>
                <Icon type='info-circle' style={{color: '#B0B0B0', fontSize: 16}}
                      onClick={contactWayStore.actions.openModal}/>
                <Offer store={offerStore}/>
                <OnSub store={onSubStore}/>
                <ValidityPeriod store={validityStore}/>
                <CheckInfo store={checkInfoStore}/>
                <ContactWay store={contactWayStore}/>
            </div>
        );
    }
);

export default OfferZone;