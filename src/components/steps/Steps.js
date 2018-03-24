import React from 'react';
import {observer} from 'mobx-react';
import {Steps} from 'antd';
import './Steps.less';

const Step = Steps.Step;

const Procedure = observer(({store}) => {
        return (
            <div className='steps'>
                <Steps current={store.data.current}>
                    {store.data.steps.map((elem, index) => <Step title={elem} key={index}/>)}
                </Steps>
            </div>
        );
    }
);

export default Procedure;