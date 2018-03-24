import React from 'react';
import {observer} from 'mobx-react';
import Search from '../search/Search';
import TabsView from '../tabsView/TabsView';

import store from '../../stores/SliderStore' ;
import './SliderContainer.less' ;

const SliderContainer = observer(() => {
    return (
        <div className="slider">
            <Search store={store}/>
            <TabsView store={store}/>
        </div>
    );
});
export {SliderContainer} ;
