import React from 'react';
import {observer} from "mobx-react";
import {Input, Icon, Button} from 'antd';
import './TextBox.less';

import {ModalUpload, state, actions} from '../upload/ModalUpload' ;

const TextArea = Input.TextArea;
const TextBox = observer(({store}) => {
        return <div className='text-box'>
            <div className='input'>
                <TextArea placeholder="Type your message here..." value={store.text}
                          onFocus={store.textBoxFocus}
                          onChange={store.textBoxChange}
                          onPressEnter={store.textBoxEnter}/>
            </div>
            <div className='send-tools'>
                <div className='uploadGroup'>
                    <ModalUpload store={state} action={actions}/>
                    <Icon type="picture" value='image/*' onClick={actions.showModal}/>
                    <Icon type='paper-clip' value='.xlsx,.xls,.doc,.pdf' onClick={actions.showModal}/>
                </div>
                <Button type='primary' onClick={store.textBoxEnter}>Send</Button>
            </div>
        </div>
    }
);

export default TextBox;