import React from 'react';
import {observer} from 'mobx-react';
import {Modal} from 'antd';
import './OfferConfirm.less';

import offerStore from '../../../stores/OfferStore';

const OfferConfirm = observer(({store}) => {
        return (
            <Modal className='offer-confirm'
                   title="The offer has been confirmed!"
                   visible={true}
                   closable={false}
                   onOk={offerStore.close}
                   onCancel={offerStore.close}
                   okText="OK"
            >
                <p>To view offer summary, you can always select the information icon at the top right of the conversation
                    screen.</p>
            </Modal>
        );
    }
);

export default OfferConfirm;