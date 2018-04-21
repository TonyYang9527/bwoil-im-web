import React from 'react';
import {observer} from "mobx-react";
import {Modal, Select, Button} from 'antd';
import './OnSub.less';

const Option = Select.Option;

const OnSub = observer(({store}) => {
        let {state, actions} = store;
        let counter = state.status ? <Button onClick={actions.changeModal}>Counter</Button> : null;
        let text = state.status ? 'Agree' : 'Send Onsub';
        return (
            <Modal className={state.status ? 'on-sub-confirmation' : 'on-sub'}
                   title={state.status ? 'On Sub Confirmation' : 'On Sub'}
                   visible={state.modalShow}
                   onCancel={actions.closeModal}>
                <div className='on-sub-name'>Validity Period</div>
                <Select placeholder="Select a person">
                    <Option value='1'>1 day</Option>
                    <Option value='2'>2 days</Option>
                    <Option value='3'>3 days</Option>
                    <Option value='4'>4 days</Option>
                    <Option value='5'>5 days</Option>
                    <Option value='6'>6 days</Option>
                </Select>
                <div className='on-sub-buttons'>
                    {counter}
                    <Button type='primary'>{text}</Button>
                </div>
            </Modal>
        );
    }
);

export default OnSub;