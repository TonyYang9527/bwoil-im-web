import React from 'react';
import {observer} from "mobx-react";

import './Profile.less'

const Profile = observer(({store}) => {
        return <div className='profile'>
            <span className='profile-title'>{store.title}</span>
            {store.kvs.map((elem, index) => <div key={index}>
                <span className='profile-name'>{elem.key}</span>
                <span className='profile-value'>{elem.value}</span>
            </div>)}
        </div>
    }
);

export default Profile;