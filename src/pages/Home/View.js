import React from 'react';
import {observer} from 'mobx-react';

import {Laytout} from '../../components/layout/Laytout';
import {ProfileContainer} from '../../components/containers/ProfileContainer';
import {ContentContainer} from '../../components/containers/ContentContainer';
import {SliderContainer} from '../../components/containers/SliderContainer';
import AddContact from '../../components/addContact/AddContact';

const HomePage = observer(() => {
    return (
        <Laytout>
            <SliderContainer/>
            <ContentContainer/>
            <ProfileContainer/>
            <AddContact/>
        </Laytout>
    );
});

export default HomePage;