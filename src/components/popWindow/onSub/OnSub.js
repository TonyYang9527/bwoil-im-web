import React from 'react';
import {observer} from "mobx-react";
import {Select, Button, Icon} from 'antd';
import './OnSub.less';

const Option = Select.Option;

const OnSub = observer(({store}) => {
        return (
            <div className='onsub'>
                <div className='onsub-content'>
                    <span className='onsub-title'>
                        <span>On Sub</span>
                        <Icon type='close'/>
                    </span>
                    <span className='onsub-detail'>Validity Period</span>
                    <Select placeholder="Select a person">
                        <Option value='1'>1 day</Option>
                        <Option value='2'>2 days</Option>
                        <Option value='3'>3 days</Option>
                        <Option value='4'>4 days</Option>
                        <Option value='5'>5 days</Option>
                        <Option value='6'>6 days</Option>
                    </Select>
                    <Button type='primary'>Send Onsub</Button>
                </div>
            </div>
        );
    }
);

export default OnSub;