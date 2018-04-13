import React from 'react';
import {observer} from 'mobx-react';

import OfferConfirmation from '../offerConfirmation/OfferConfirmation';
import OfferForm from '../offerForm/OfferForm';

const ConfirmOfferData = observer(({store}) => {
    return (
        store.getCounter ?
            <OfferConfirmation store={{load_rate: '', discharge_rate: '', begin_time: null, end_time: null}}
                               ownStore={store}/>
            : <OfferForm store={{load_rate: '', discharge_rate: '', begin_time: null, end_time: null}}/>
    );
});

export default ConfirmOfferData;