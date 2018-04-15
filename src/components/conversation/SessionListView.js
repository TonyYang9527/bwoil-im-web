import React from 'react';
import {observer} from 'mobx-react';
import SessionView from './SessionView' ;
import './Session.less';

const SessionListView = observer(({store}) =>{
    let sessionViews = [];
    store.msgStore.messages.forEach((value, key, map) => {
        if (value) {
            sessionViews.push(
              <SessionView key={key} id={key} store={store} />
            ); 
        }
    });
     return (<div> {sessionViews}</div>) ;
    }
 );
export default SessionListView;