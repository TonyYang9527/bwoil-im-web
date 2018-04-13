import React from 'react';
import {observer} from 'mobx-react';
import {Scrollbars} from 'react-custom-scrollbars';
import {Icon, Input, Button} from 'antd';
import './AddContact.less';

import AddContactItem from '../../addContactItem/AddContactItem';

const AddContact = observer(({store}) => {
        const prefix = <Icon type="search" style={{color: 'rgba(0,0,0,.25)', fontSize: 16}}/>;
        const suffix = store.filter ?
            <Icon type="close-circle" style={{color: 'rgba(0,0,0,.25)', fontSize: 16}}
                  onClick={store.clearFilter}/> : null;
        return (
            <div className='add-contact'>
                <div>
                    <div className='add-contact-title'>
                        <span>Contact List</span>
                        <Icon type='close' style={{color: '#212121', fontSize: 16}} onClick={store.closePopWindow}/>
                    </div>
                    <div className='add-contact-search'>
                        <Input prefix={prefix} suffix={suffix} value={store.filter} onChange={store.onSearchChange}
                               placeholder="Search contact…"/>
                    </div>
                    <Scrollbars style={{width: 250, height: 512}}
                                renderThumbVertical={store.verticalBarStyle}
                                renderThumbHorizontal={store.horizontalBarStyle}
                                autoHide
                                autoHideTimeout={1000}
                                autoHideDuration={200}>
                        {store.restContacts.map((elem, index) => <AddContactItem store={elem} key={index}/>)}
                    </Scrollbars>
                    <div className='add-contact-foot'>
                        <Button type='primary' onClick={store.addContact}>Add to chat</Button>
                    </div>
                </div>
            </div>
        )
    }
);

export default AddContact;