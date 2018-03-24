import React from 'react';
import {observer} from "mobx-react";
import {Button} from 'antd';
import './ContactWay.less';

const ContactWay = observer(({store}) => {
        return (
            <div className='contact-way'>
                <div className='contact-way-content'>
                    <span className='contact-way-title'>Please contact MO for more services</span>
                    <div className='contact-way-detail'>
                        <span>CP Services</span>
                        <span>Email：<a target='._blank'
                                       href='cpservice@brightoilmarine.com'>cpservice@brightoilmarine.com</a></span>
                        <span>Contact：+65 88888888</span>
                    </div>
                    <div className='contact-way-detail'>
                        <span>Port Services</span>
                        <span>Email：<a target='._blank'
                                       href='cpservice@brightoilmarine.com'>cpservice@brightoilmarine.com</a></span>
                        <span>Contact：+65 88888888</span>
                    </div>
                    <Button type='primary'>OK</Button>
                </div>
            </div>
        );
    }
);

export default ContactWay;