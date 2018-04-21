import React from 'react';
import {observer} from 'mobx-react';
import {Modal, Input} from 'antd';
import './ModalView.less';

const ModalView = observer(({store}) => {
        const children = store.state.type === "2" ?
            <Input value={store.state.name} onChange={store.actions.changeText}/> : null;
        return (
            <Modal className='modify-tool'
                   title={store.state.title}
                   visible={store.state.visible}
                   closable={false}
                   cancelText='Cancel'
                   okText={store.state.okText}
                   onCancel={store.actions.onCancel}
                   onOk={store.actions.onOk}>
                {children}
            </Modal>
        );
    }
);
export default ModalView;