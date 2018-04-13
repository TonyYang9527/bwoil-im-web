import React from 'react';
import {observer} from "mobx-react";
import {Modal} from 'antd';
import './ContactWay.less';

import offerStore from "../../../stores/OfferStore";

const ContactWay = observer(({store}) => {
        return (
            <Modal className='contact-way'
                title="Please contact MO for more services"
                visible={true}
                closable={false}
                onOk={offerStore.close}
                onCancel={offerStore.close}
                okText="OK"
            >
                <div>
                    <span>CP services</span>
                    <span>
                        <span>Email：</span>
                        <a>cpservice@brightoilmarine.com</a>
                    </span>
                    <span>Contact：+65 88888888</span>
                </div>
                <div>
                    <span>Port services</span>
                    <span>
                        <span>Email：</span>
                        <a>cpservice@brightoilmarine.com</a>
                    </span>
                    <span>Contact：+65 88888888</span>
                </div>
            </Modal>
        );
    }
);

export default ContactWay;