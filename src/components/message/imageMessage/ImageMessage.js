import React from 'react';
import {observer} from "mobx-react";
import './ImageMessage.less';

const ImageMessage = observer(({store}) => {
        return (
            <a href={store.message} target='_blank' className='imageMessage-link'>
                <img src={store.message} className={store.imageStyle} alt=''/>
            </a>

        );
    }
);

export default ImageMessage;