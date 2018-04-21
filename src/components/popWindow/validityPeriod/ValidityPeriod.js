import React from 'react';
import {observer} from 'mobx-react';
import {Modal, Select, Button} from 'antd';
import './ValidityPeriod.less';

const Option = Select.Option;

const ValidityPeriod = observer(({store}) => {
        let {state, actions} = store;
        return (
            <Modal className={state.status ? 'extend-validity-period' : 'validity-period'}
                   title={state.status ? 'Validity Period' : 'Extend On Sub Validity Period'}
                   visible={state.modalShow}
                   onCancel={actions.closeModal}>
                <p>Number of day to extend</p>
                <Select placeholder='Select Validity Period' style={{width: 272}}>
                    <Option value='jack'>Jack</Option>
                    <Option value='lucy'>Lucy</Option>
                    <Option value='yiminghe'>Yiminghe</Option>
                </Select>
                <div className='validity-period-buttons'>
                    {state.status ? <Button onClick={actions.changeModal}>Counter</Button> : null}
                    <Button type='primary'>{state.status ? 'Agree' : 'Extend'}</Button>
                </div>
            </Modal>
        );
    }
);

export default ValidityPeriod;