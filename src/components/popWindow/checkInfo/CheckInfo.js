import React from 'react';
import {observer} from 'mobx-react';
import {Modal, Steps} from 'antd';
import './CheckInfo.less';

import offerStore from '../../../stores/OfferStore';

const CheckInfo = observer(({store}) => {

        const temp1 = {
            'Onsub Period：': '2 days(48 hrs)',
            'Onsub End Time：': '03/10/2017 15:20:56'
        };

        const temp2 = {
            'Laycan Date：': '24/08/2017',
            'Load Port：': 'Singapore',
            'Discharge Port：': 'Hong Kong',
            'Load Rate：': '15 min',
            'Discharge Rate：': '15 min',
            'Freight：': 'SGD: 15/MTS'
        };

        const Step = Steps.Step;
        return (
            <Modal
                title='Info'
                visible={true}
                className='check-info'
                onCancel={offerStore.close}
            >
                <Steps direction="vertical" current={2} status='error'>
                    <Step title={<div><span>Liftsub</span><span>30/09/2017 15:20:56</span></div>}/>
                    <Step title={<div><span>Extend</span><span>30/09/2017 15:20:56</span></div>}/>
                    <Step title={<div><span>Onsub</span><span>30/09/2017 15:20:56</span></div>}
                          description={Object.keys(temp1).map((elem, index) => <div key={index}>
                              <span>{elem}</span><span>{temp1[elem]}</span>
                          </div>)}/>
                    <Step title={<div><span>Offer</span><span>30/09/2017</span></div>}
                          description={Object.keys(temp2).map((elem, index) => <div key={index}>
                              <span>{elem}</span><span>{temp2[elem]}</span>
                          </div>)}/>
                </Steps>
            </Modal>
        );
    }
);

export default CheckInfo;