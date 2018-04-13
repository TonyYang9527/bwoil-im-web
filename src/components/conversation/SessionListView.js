import React from 'react';
import {inject ,observer} from 'mobx-react';
import SessionView from './SessionView' ;
import './Session.less';



const SessionListView = observer(({store}) =>{
     store.msgActions.loadConversations();
     const SessionViews =store.msgActions.getAllData().map(message=> 
         <SessionView  key={message.id} message ={message}  store={store} />
    ) ;
     return (<div> {SessionViews}</div>) ;
    }
 );
export default SessionListView;