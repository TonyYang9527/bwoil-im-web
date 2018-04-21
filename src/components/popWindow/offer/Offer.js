import React from 'react';
import {observer} from "mobx-react";
import {Modal, Form, Button, Input, Select, DatePicker} from 'antd';
import './Offer.less';

const Item = Form.Item;
const TextArea = Input.TextArea;
const Option = Select.Option;

const OfferForm = observer(({store, form}) => {
        let {getFieldDecorator} = form;
        let {state, actions} = store;
        return (
            <Modal className={state.status ? 'offer-confirmation' : 'make-offer'}
                   title={state.status ? 'Offer Confirmation' : 'Offer'}
                   visible={state.modalShow}
                   onCancel={actions.closeModal}>
                {
                    state.status ? <Form>
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
                                <DatePicker placeholder='to'/>
                                <DatePicker placeholder='from'/>
                            </Item>
                            <Item label="Remarks (optional)">
                                <TextArea placeholder="Enter remarks…"/>
                            </Item>
                            <Item>
                                <Button onClick={actions.changeModal}>Counter</Button>
                                <Button type='primary' htmlType="submit">Agree</Button>
                            </Item>
                        </Form>
                        : <Form>
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
                                })(<DatePicker placeholder='to'/>)}

                                {getFieldDecorator('begin_time', {
                                    rules: [{required: true, message: 'Begin time is required!'}]
                                })(<DatePicker placeholder='from'/>)}
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
                }
            </Modal>
        );
    }
);

const Offer = Form.create({
    onFieldsChange(props, changedFields) {
    },
    mapPropsToFields({store}) {
        return {};
    },
})(OfferForm);

export default Offer;
