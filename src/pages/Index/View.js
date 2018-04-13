import React from 'react';
import {observer} from 'mobx-react';
import {Laytout} from '../../components/layout/Laytout';
import msgStore from '../../stores/sub/MessageStore';
import SessionListView from '../../components/conversation/SessionListView';

const HomePage = observer(() => {
    return (
         <Laytout>
          <SessionListView store={msgStore}/>
         </Laytout>
    );
});

export default HomePage;