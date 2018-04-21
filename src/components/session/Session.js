import React from 'react';
import {observer} from 'mobx-react';
import {Dropdown, Menu, Badge, Avatar} from 'antd';
import './Session.less';
import sessionStore from '../../stores/SessionStore';
import ModalView from '../modal/ModalView';
import modalStore from '../../stores/ModalStore';

const Session = observer(({session}) => {

        const menu = (
            <Menu className='session-tools' onClick={e => sessionStore.actions.dropdown(e, session.id)}>
                <Menu.Item key="1">Delete chat</Menu.Item>
                <Menu.Item key="2">Rename group</Menu.Item>
                <Menu.Item key="3">Exit group</Menu.Item>
            </Menu>
        );
        return (
            <div
                className={sessionStore.state.selected ? (sessionStore.state.selected.id === session.id ?
                    'session focused' : 'session') : 'session'}
                onClick={() => sessionStore.actions.select(session.id)}>
                <div className='session-details'>
                    <div className='session-icon'>
                        <Avatar src={session.image} style={{width: 32, height: 32}}/>
                        <div className='session-point'/>
                    </div>
                    <div className='session-info'>
                        <div className='session-hint'>
                            <span className='session-name'>{session.name}</span>
                            <Badge count={session.unread} overflowCount={99}/>
                        </div>
                        <span className='session-message'>{session.message}</span>
                    </div>
                </div>

                <div className='session-identify'>
                    <span className='session-time'>{session.time}</span>
                    <Dropdown overlay={menu}>
                        <img alt="" src={require('../../assets/more_if.svg')}
                             style={{width: 14, height: 14, marginTop: 8, marginLeft: 12}}/>
                    </Dropdown>
                    <ModalView store={modalStore}/>
                </div>
            </div>
        );
    }
);

export default Session;