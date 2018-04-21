import React from 'react';
import {observer} from "mobx-react";
import {Input, Icon, Button} from 'antd';
import './TextBox.less';

import {ModalUpload, state, actions} from '../upload/ModalUpload' ;

import conversationStore from '../../stores/ConversationStore';

const TextArea = Input.TextArea;
const TextBox = observer(() => {
        return (
            <div className='text-box'>
                <div className='input'>
                <TextArea placeholder="Type your message here..."
                          ref={input => conversationStore.actions.setTextArea(input)}
                          value={conversationStore.data.text}
                          onFocus={conversationStore.actions.onFocus}
                          onChange={conversationStore.actions.onChange}
                          onPressEnter={conversationStore.actions.sendMessage}/>
                </div>
                <div className='send-tools'>
                    <div className='uploadGroup'>
                        <ModalUpload store={state} action={actions}/>
                        <Icon type="picture" value='image/*' onClick={actions.showModal}/>
                        <Icon type='paper-clip' value='.xlsx,.xls,.doc,.pdf' onClick={actions.showModal}/>
                    </div>
                    <Button type='primary' onClick={conversationStore.actions.sendMessage}>Send</Button>
                </div>
            </div>
        )
    }
);

export default TextBox;