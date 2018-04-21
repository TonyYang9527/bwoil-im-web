import React from 'react';
import {observer} from 'mobx-react';
import {Steps} from 'antd';
import './Steps.less';

import stepStore from '../../stores/StepStore';

const Step = Steps.Step;

const Procedure = observer(() => {
        let {data} = stepStore;
        return (
            <div className='steps'>
                <Steps current={data.step.current} status={data.step.status}>
                    {['Chat', 'Offer', 'Onsub', 'Complete'].map((elem, index) => <Step title={elem} key={index}/>)}
                </Steps>
            </div>
        );
    }
);

export default Procedure;