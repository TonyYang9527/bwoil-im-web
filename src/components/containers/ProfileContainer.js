import React from 'react';
import {observer} from 'mobx-react';
import {Icon} from 'antd';
import Profile from '../profile/Profile';

import './ProfileContainer.less';

const ProfileContainer = observer(({store}) => {
        return (
            <div className='profile-container'>
                <div className='profile-container-control'>
                    <Icon type='minus'/>
                    <Icon type='close'/>
                </div>
                {store.data.session ? store.data.session.profiles.map((elem, index) => <Profile
                    store={elem} key={index}/>) : null}
            </div>
        )
    }
);

export {ProfileContainer} ;
