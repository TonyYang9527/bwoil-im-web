import React from 'react';
import {observer} from "mobx-react";
import {Input, Icon, Button} from 'antd';
import './TextBox.less';

const TextArea = Input.TextArea;

const TextBox = observer(({store}) => {
        return <div className='text-box'>

            <div className='input'>
                <TextArea placeholder="Type your message here..." value={store.data.message}
                          onFocus={store.onFocus}
                          onChange={store.onChange}
                          onPressEnter={store.onPressEnter}/>
            </div>

            <div className='send-tools'>
                            <span className='icon'>
                                <Icon type='picture' />
                                <Icon type='paper-clip'/>
                            </span>
                <Button type='primary' onClick={store.onPressEnter}>Send</Button>
            </div>
        </div>
    }
);

export default TextBox;