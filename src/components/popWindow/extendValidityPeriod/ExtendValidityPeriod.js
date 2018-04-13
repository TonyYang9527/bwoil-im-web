import React from 'react';
import {observer} from 'mobx-react';
import {Modal, Select} from 'antd';
import './ExtendValidityPeriod.less';

import offerStore from '../../../stores/OfferStore';

const Option = Select.Option;

const ExtendValidityPeriod = observer(({store}) => {
        const changeAgree = function (e) {
            if (e.target.tagName === 'BUTTON') {
                store.goToModify();
            } else {
                offerStore.close();
            }
        };
        return (
            <Modal className={store.getCounter ? 'extend-validity-period-counter' : 'extend-validity-period'}
                   title='Extend On Sub Validity Period'
                   visible={true}
                   onOk={offerStore.close}
                   onCancel={changeAgree}
                   okText={store.getCounter ? 'Agree' : 'Send Onsub'}
                   cancelText='Counter'
            >
                <p>Validity Period</p>
                <Select placeholder='Select Validity Period' style={{width: 272}} disabled={store.getCounter}>
                    <Option value='jack'>Jack</Option>
                    <Option value='lucy'>Lucy</Option>
                    <Option value='Yiminghe'>yiminghe</Option>
                </Select>
            </Modal>
        );
    }
);

export default ExtendValidityPeriod;