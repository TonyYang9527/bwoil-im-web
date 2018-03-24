import React from 'react';
import {observer} from 'mobx-react';
import {Avatar} from 'antd';

import './Contact.less';

const Contact = observer(({store}) => {
    
        return <div className='contact' onClick={store.chooseContact}>
            <div className='contact-icon'>
             <Avatar src={store.image} />
             <div className='contact-point'/>
            </div>
            <span className='contact-name'>{store.name}</span>
        </div>
    }
);

export default Contact;