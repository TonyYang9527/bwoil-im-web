import React from 'react';
import {inject ,observer} from 'mobx-react';
import {Dropdown, Menu, Badge, Avatar ,Icon} from 'antd';
import './Session.less';


const SessionView = observer(({message ,store}) => {
    const menu = (
            <Menu onClick={e =>store.msgActions.dropdownOnClick(e,message)}>
                <Menu.Item key="1"> <Icon type="edit" /> <span>Rename</span> </Menu.Item>
                <Menu.Item key="2"> <Icon type="delete"/> <span>Delete</span> </Menu.Item>
                <Menu.Item key="3"> <Icon type="usergroup-delete" /> <span>Exit</span> </Menu.Item>
            </Menu>
        );

        return (
            <div className={'session'}  onClick={e=>store.msgActions.click(message)} >
                <div className='session-details' >
                    <div className='session-icon'>
                        <Avatar src={message.image} style={{width: 32, height: 32}}/>
                        <div className='session-point'/>
                    </div>
                    <div className='session-info'>
                        <div className='session-hint'>
                            <span className='session-name'>{message.name}</span>
                            <Badge count={message.unread.length} overflowCount={99}/>
                        </div>
                        <span className='session-message'>{message.message}</span>
                    </div>
                </div>

                <div className='session-identify'>
                    <span className='session-time'>{message.time}</span>
                    <Dropdown overlay={menu}  trigger={['hover']} >
                        <img alt="" src={require('../../assets/more_if.svg')}
                             style={{width: 14, height: 14, marginTop: 8, marginLeft: 12}}/>
                    </Dropdown>
                </div>
            </div>
        )

    }
);

export default SessionView;