import React from 'react';
import {action, observable} from 'mobx';
import {observer} from 'mobx-react';
import {Modal} from 'antd';
import './OfferConfirm.less';

const offerConfirmState = observable({
    modalShow: false,
    data: null
});

const offerConfirmActions = {
    openModal: action(data => {
        offerConfirmState.modalShow = true;
        offerConfirmState.data = data;
    }),
    closeModal: action(() => {
        offerConfirmState.modalShow = false;
    })
};

const OfferConfirm = observer(({state, actions}) => {
        return (
            <Modal className='offer-confirm'
                   title="The offer has been confirmed!"
                   visible={state.modalShow}
                   closable={false}
                   onOk={actions.closeModal}
                   onCancel={actions.closeModal}
                   okText="OK">
                <p>To view offer summary, you can always select the information icon at the top right of the conversation
                    screen.</p>
            </Modal>
        );
    }
);

export {OfferConfirm, offerConfirmState, offerConfirmActions};