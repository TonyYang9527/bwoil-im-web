import React from 'react';
import {observer} from 'mobx-react';

import {ProfileContainer} from '../../components/containers/ProfileContainer';
import {ContentContainer} from '../../components/containers/ContentContainer';
import {SliderContainer} from '../../components/containers/SliderContainer';
import {Laytout} from '../../components/layout/Laytout';


const HomePage = observer(() => {
    return (
        <Laytout>
            <SliderContainer/>
            <ContentContainer/>
            <ProfileContainer/>
        </Laytout>
    );
});

export default HomePage;