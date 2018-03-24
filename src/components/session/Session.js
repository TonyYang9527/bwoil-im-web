import React from 'react';
import {observer} from 'mobx-react';
import {Dropdown, Menu, Badge, Avatar} from 'antd';

import './Session.less';

const Session = observer(({store}) => {
        const menu = (
            <Menu>
                <Menu.Item key="1">1st menu item</Menu.Item>
                <Menu.Item key="2">2nd menu item</Menu.Item>
                <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
        );

        return <div className={'session' + store.getFocus} onClick={store.chooseContact}>
            <div className='session-details'>
                <div className='session-icon'>
                    <Avatar src={store.image} style={{width: 32, height: 32}}/>
                    <div className='session-point'/>
                </div>
                <div className='session-info'>
                    <div className='session-hint'>
                        <span className='session-name'>{store.name}</span>
                        <Badge count={store.unread} overflowCount={99}/>
                    </div>
                    <span className='session-message'>{store.message}</span>
                </div>
            </div>

            <div className='session-identify'>
                <span className='session-time'>{store.time}</span>
                <Dropdown overlay={menu}>
                    <img alt="" src={require('../../assets/more_if.svg')}
                         style={{width: 14, height: 14, marginTop: 8, marginLeft: 12}}/>
                </Dropdown>
            </div>

        </div>
    }
);

export default Session;