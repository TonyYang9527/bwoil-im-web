import React from 'react';
import {observer} from "mobx-react";
import {Button} from 'antd';
import './OfferConfirm.less';

const OfferConfirm = observer(({store}) => {
        return (
            <div className='offer-confirm'>
                <div className='offer-confirm-content'>
                    <span className='offer-confirm-title'>The offer has been confirmed!</span>
                    <span className='offer-confirm-detail'>To view offer summary,you can always select the information icon at the top right
                        of the conversation screen.</span>
                    <Button type='primary'>OK</Button>
                </div>
            </div>
        );
    }
);

export default OfferConfirm;