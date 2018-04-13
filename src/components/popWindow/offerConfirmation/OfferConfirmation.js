import React from 'react';
import {observer} from "mobx-react";
import {Icon, Form, Button, Input, DatePicker} from 'antd';
import './OfferConfirmation.less';

import offerStore from '../../../stores/OfferStore';

const Item = Form.Item;
const TextArea = Input.TextArea;

const OfferForm = observer(({store, ownStore, form}) => {
        const onChange = function (date, dateString) {
            console.log('时间选择器数据', date, dateString);
        };
        console.log('OfferConfirmation', ownStore);
        return (
            <div className='offer-confirmation'>
                <div className='offer-confirmation-layer'>
                    <div className='offer-form-detail'>
                        <div className='offer-form-detail-title'>
                            <span>
                                <span>Offer Confirmation</span>
                                <span>(Final confirmation for the offer)</span>
                            </span>
                            <Icon type='close' style={{fontSize: 20, color: '#212121'}} onClick={offerStore.close}/>
                        </div>
                        <div className='offer-form-content'>
                            <Form onSubmit={offerStore.offerConfirm}>
                                <Item label="Freight">
                                    <Button type='primary'>Lumpsum</Button>
                                    <Button>Per MT</Button>
                                    <Button>Per W/M</Button>
                                </Item>
                                <Item label="Load Rate/Discharge Rate">
                                    <Input placeholder="Enter Load Rate"/>
                                </Item>
                                <Item label="Demurrage (PDPR)">
                                    <Input placeholder="Enter Demurrage(PDPR)"/>
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
                                <Item label="Laycan">
                                    <DatePicker placeholder='to' onChange={onChange}/>
                                    <DatePicker placeholder='from' onChange={onChange}/>
                                </Item>
                                <Item label="Remarks (optional)">
                                    <TextArea placeholder="Enter remarks…"/>
                                </Item>
                                <Item>
                                    <Button onClick={ownStore.goToModify}>Counter</Button>
                                    <Button type='primary' htmlType="submit">Agree</Button>
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