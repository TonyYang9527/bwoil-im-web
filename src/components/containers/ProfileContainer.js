import React from 'react';
import {observer} from 'mobx-react';
import {Icon} from 'antd';
import Profile from '../profile/Profile';

import globalStore from '../../stores/GlobalStore';
import './ProfileContainer.less';

const ProfileContainer = observer(() => {
        return <div className='profile-container'>
               <div className='profile-container-control'>
                <Icon type='minus'/>
                <Icon type='close'/>
            </div>
            {globalStore.data.contact ? globalStore.data.contact.profiles.map((elem, index) => <Profile
                store={elem} key={index}/>) : null}
        </div>
    }
);

export {ProfileContainer} ;
