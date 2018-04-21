import React from 'react';
import {observer} from 'mobx-react';
import {Avatar, Checkbox} from 'antd';
import './AddContactItem.less';

const AddContactItem = observer(({contact, store}) => {
        let {state, actions} = store;
        return (
            <div
                className={state.preAdd.has(contact.id) ? 'add-contact-item add-contact-item-focused' : 'add-contact-item'}>
                <div>
                    <span className='add-contact-icon'>
                        <Avatar src={contact.image}/>
                        <span className='add-contact-point'/>
                    </span>
                    <span className='add-contact-name'>{contact.name}</span>
                </div>
                <Checkbox checked={state.preAdd.has(contact.id)}
                          onChange={e => actions.preAdding(e.target.checked, contact)}/>
            </div>
        );
    }
);

export default AddContactItem;