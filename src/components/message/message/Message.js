import React from 'react';
import {observer} from "mobx-react";
import './Message.less';

const Message = observer(({store}) => {
        return <div className={store.messageStyle + ' message'}>
            {store.fromUser ? null : <img className='message-avatar' src={store.avatar} alt=''/>}
            <div className='message-content'>
                {store.messageByType}
                <span className='message-prompt'>
                    <span className='message-time'>{store.time}</span>
                    {store.marker}
                    </span>
            </div>
        </div>
    }
);

export default Message;