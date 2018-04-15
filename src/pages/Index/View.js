import React from 'react';
import {observer} from 'mobx-react';
import {Laytout} from '../../components/layout/Laytout';
import msgStore from '../../stores/sub/MessageStore';
import SessionListView from '../../components/conversation/SessionListView';
import {Button } from 'antd';

const HomePage = observer(() => {
    return (
         <Laytout >
            <div> <Button type="primary" onClick={msgStore.msgActions.loadConversations}>load</Button></div>
            <SessionListView store={msgStore}/>
         </Laytout>
    );
});

export default HomePage;