import React from 'react';
import {observer} from "mobx-react";
import './Profile.less'

import profileStore from '../../stores/ProfileStore';

const Profile = observer(() => {

        if (!Object.keys(profileStore.data.profiles).length) {
            return null;
        }

        let {
            vessel = '',
            sector = '',
            openDate = '',
            openPorts = '',
            cargoVessel = '',
            laycanDate = '',
            voyage = '',
            loadRate = '',
            addressComission = '',
            freight = ''
        } = profileStore.data.profiles;

        return (
            <div className='profile'>
                <div>
                    <span className='profile-title'>Vessel Info</span>
                    <div>
                        <span className='profile-name'>Vessel</span>
                        <span className='profile-value'>{vessel}</span>
                    </div>
                    <div>
                        <span className='profile-name'>Sector</span>
                        <span className='profile-value'>{sector}</span>
                    </div>
                    <div>
                        <span className='profile-name'>Open Date</span>
                        <span className='profile-value'>{openDate}</span>
                    </div>
                    <div>
                        <span className='profile-name'>Open Ports</span>
                        <span className='profile-value'>{openPorts}</span>
                    </div>
                </div>
                <div>
                    <span className='profile-title'>Cargo Info</span>
                    <div>
                        <span className='profile-name'>Cargo</span>
                        <span className='profile-value'>{cargoVessel}</span>
                    </div>
                    <div>
                        <span className='profile-name'>Laycan date</span>
                        <span className='profile-value'>{laycanDate}</span>
                    </div>
                    <div>
                        <span className='profile-name'>Voyage</span>
                        <span className='profile-value'>{voyage}</span>
                    </div>
                    <div>
                        <span className='profile-name'>Loading/Discharging Rate</span>
                        <span className='profile-value'>{loadRate}</span>
                    </div>
                    <div>
                        <span className='profile-name'>Address Comission</span>
                        <span className='profile-value'>{addressComission}</span>
                    </div>
                    <div>
                        <span className='profile-name'>Freight</span>
                        <span className='profile-value'>{freight}</span>
                    </div>
                </div>
            </div>
        )
    }
);

export default Profile;