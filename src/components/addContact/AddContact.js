import React from 'react';
import {observer} from 'mobx-react';
import {Scrollbars} from 'react-custom-scrollbars';
import {Icon, Input, Button} from 'antd';
import './AddContact.less';

import AddContactItem from './addContactItem/AddContactItem';

import globalStore from '../../stores/GlobalStore';

import addContactStore from '../../stores/AddContactStore';

const AddContact = observer(() => {
        let {state, actions} = addContactStore;
        const prefix = <Icon type="search" style={{color: 'rgba(0,0,0,.25)', fontSize: 16}}/>;
        const suffix = state.filter ?
            <Icon type="close-circle" style={{color: 'rgba(0,0,0,.25)', fontSize: 16}}
                  onClick={actions.clearFilter}/> : null;
        return state.modalShow ? <div className='add-contact'>
            <div>
                <div className='add-contact-title'>
                    <span>Contact List</span>
                    <Icon type='close' style={{color: '#212121', fontSize: 16}} onClick={actions.closeModal}/>
                </div>
                <div className='add-contact-search'>
                    <Input prefix={prefix} suffix={suffix} value={state.filter}
                           onChange={actions.changeFilter}
                           placeholder="Search contact…"/>
                </div>
                <Scrollbars style={{width: 250, height: 512}}
                            renderThumbVertical={globalStore.verticalBarStyle}
                            renderThumbHorizontal={globalStore.horizontalBarStyle}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}>
                    {addContactStore.state.contacts.map((elem, index) => <AddContactItem contact={elem}
                                                                                        store={addContactStore}
                                                                                        key={index}/>)}
                </Scrollbars>
                <div className='add-contact-foot'>
                    <Button type='primary' onClick={actions.addContact}>Add to chat</Button>
                </div>
            </div>
        </div> : null;
    }
);

export default AddContact;