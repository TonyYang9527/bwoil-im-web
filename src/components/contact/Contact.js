import React from 'react';
import {observer} from 'mobx-react';
import {Avatar} from 'antd';
import './Contact.less';

import contactStore from '../../stores/ContactStore';

const Contact = observer(({contact}) => {
        return (
            <div className='contact' onClick={() => contactStore.actions.select(contact.id)}>
                <div className='contact-icon'>
                    <Avatar src={contact.image}/>
                    <div className='contact-point'/>
                </div>
                <span className='contact-name'>{contact.name}</span>
            </div>
        );
    }
);

export default Contact;