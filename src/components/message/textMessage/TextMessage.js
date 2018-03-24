import React from 'react';
import {observer} from "mobx-react";
import './TextMessage.less';

const TextMessage = observer(({store}) => {
        return (
            <span className={store.textStyle}>{store.message}</span>
        );
    }
);

export default TextMessage;