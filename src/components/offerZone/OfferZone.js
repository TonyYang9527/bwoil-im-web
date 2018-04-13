import React from 'react';
import {observer} from "mobx-react";
import {Icon, Button} from 'antd';
import './OfferZone.less';

const OfferZone = observer(({store}) => {
        return (
            <div className='sub-tool'>
                <div>
                    <Button type='primary' onClick={store.makeOffer}>Make Offer</Button>
                    <Button onClick={store.makeOfferConfirmation}>On Sub</Button>
                    <Button>Lift Sub</Button>
                    <Button>Fail Sub</Button>
                    <Button>Clean Fix</Button>
                </div>
                <Icon type='info-circle' style={{color: '#B0B0B0', fontSize: 16}}/>
            </div>
        )
    }
);

export default OfferZone;