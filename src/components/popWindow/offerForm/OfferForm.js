import React from 'react';
import {observer} from "mobx-react";
import {Icon, Form, Button, Input, DatePicker, Select} from 'antd';
import './OfferForm.less';

import offerStore from '../../../stores/OfferStore';

const Item = Form.Item;
const TextArea = Input.TextArea;
const Option = Select.Option;

const OfferForm = observer(({store, form}) => {
        const {getFieldDecorator} = form;
        const onChange = function (date, dateString) {
            console.log('时间选择器数据', date, dateString);
        };

        return (
            <div className='offer-form'>
                <div className='offer-form-layer'>
                    <div className='offer-form-detail'>
                        <div className='offer-form-detail-title'>
                            <span>Offer</span>
                            <Icon type='close' style={{fontSize: 20, color: '#212121'}} onClick={offerStore.close}/>
                        </div>
                        <div className='offer-form-content'>
                            <Form onSubmit={offerStore.offerConfirmation}>
                                <Item label="Freight">
                                    <Button type='primary'>Lumpsum</Button>
                                    <Button>Per MT</Button>
                                    <Button>Per W/M</Button>
                                </Item>
                                <Item label="Load Rate">
                                    {getFieldDecorator('load_rate', {
                                        rules: [{required: true, message: 'Load rate is required!'}],
                                    })(<Input placeholder="Enter Load Rate"/>)}
                                </Item>
                                <Item label="Discharge Rate">
                                    {getFieldDecorator('discharge_rate', {
                                        rules: [{required: true, message: 'Discharge rate is required!'}],
                                    })(<Input placeholder="Enter Discharge Rate"/>)}
                                </Item>
                                <Item label="Demurrage (PDPR)">
                                    <Input placeholder="Enter Demurrage(PDPR)"/>
                                </Item>
                                <Item label="Demurrage(PDPR)">
                                    <Input placeholder="Enter Demurrage(PDPR)"/>
                                </Item>
                                <Item label="Laycan">
                                    {getFieldDecorator('end_time', {
                                        rules: [{required: true, message: 'End time is required!'}]
                                    })(<DatePicker placeholder='to' onChange={onChange}/>)}

                                    {getFieldDecorator('begin_time', {
                                        rules: [{required: true, message: 'Begin time is required!'}]
                                    })(<DatePicker placeholder='from' onChange={onChange}/>)}
                                </Item>
                                <Item label="Laytime (hrs)">
                                    <Input placeholder="from"/>
                                </Item>
                                <Item label="Add Com (%)">
                                    <Input placeholder="Enter additional commission"/>
                                </Item>
                                <Item label="Load Port">
                                    <Input placeholder="Enter load port"/>
                                </Item>
                                <Item label="Discharge Port">
                                    <Input placeholder="Enter discharge port"/>
                                </Item>
                                <Item label="Remarks (optional)">
                                    <TextArea placeholder="Enter remarks…"/>
                                </Item>
                                <Item label="Offer Validity">
                                    <Select placeholder="Select">
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </Item>
                                <Item>
                                    <Button type='primary' htmlType="submit">Send Offer</Button>
                                </Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

export default Form.create({
    onFieldsChange(props, changedFields) {
    },
    mapPropsToFields({store}) {
        return {
            load_rate: Form.createFormField({
                ...store,
                value: store.load_rate
            }),
            discharge_rate: Form.createFormField({
                ...store,
                value: store.discharge_rate
            }),
            begin_time: Form.createFormField({
                ...store,
                value: store.begin_time
            }),
            end_time: Form.createFormField({
                ...store,
                value: store.end_time
            })
        };
    },
})(OfferForm);