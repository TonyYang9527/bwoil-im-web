import React from 'react';
import {observer} from 'mobx-react';

import {Laytout} from '../../components/layout/Laytout';
import {ProfileContainer} from '../../components/containers/ProfileContainer';
import {ContentContainer} from '../../components/containers/ContentContainer';
import {SliderContainer} from '../../components/containers/SliderContainer';
import globalStore from '../../stores/Global';


const HomePage = observer(() => {
    return (
        <Laytout>
            <SliderContainer store={globalStore}/>
            <ContentContainer store={globalStore}/>
            <ProfileContainer store={globalStore}/>
            {globalStore.data.session.popWindow}
        </Laytout>
    );
});

export default HomePage;