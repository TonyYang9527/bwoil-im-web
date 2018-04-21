import React from 'react';
import {observer} from 'mobx-react';
import {Icon} from 'antd';
import Profile from '../profile/Profile';
import './ProfileContainer.less';

const ProfileContainer = observer(() => {
        return (
            <div className='profile-container'>
                <div className='profile-container-control'>
                    <Icon type='minus'/>
                    <Icon type='close'/>
                </div>
                <Profile/>
            </div>
        );
    }
);

export {ProfileContainer} ;
