import React from 'react';
import {observer} from "mobx-react";
import {Modal} from 'antd';
import './ContactWay.less';

const ContactWay = observer(({store}) => {
        let {state, actions} = store;
        return (
            <Modal className='contact-way'
                   title="Please contact MO for more services"
                   visible={state.modalShow}
                   closable={false}
                   onOk={actions.closeModal}
                   okText="OK">
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