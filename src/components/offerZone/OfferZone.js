import React from 'react';
import {observer} from "mobx-react";
import {Icon, Button} from 'antd';
import './OfferZone.less';

const OfferZone = observer(({store}) => {
        return <div className='sub-tool'>
             <div>
                <Button type='primary'>Make Offer</Button>
                <Button disabled={true}>On Sub</Button>
                <Button>Lift Sub</Button>
                <Button>Fail Sub</Button>
                <Button>Clean Fix</Button>
            </div>
            <Icon type='info-circle'/>
        </div>
    }
);

export default OfferZone;