import React from 'react';
import {observer} from 'mobx-react';
import {Avatar, Checkbox} from 'antd';

import './AddContactItem.less';

const AddContactItem = observer(({store}) => {

        return (
            <div className='add-contact-item'>
                <div>
                    <span className='add-contact-icon'>
                        <Avatar src={store.image}/>
                        <span className='add-contact-point'/>
                    </span>
                    <span className='add-contact-name'>{store.name}</span>
                </div>
                <Checkbox onChange={store.addContactToSession}/>
            </div>
        )
    }
);

export default AddContactItem;