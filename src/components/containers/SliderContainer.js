import React from 'react';
import {observer} from 'mobx-react';
import Search from '../search/Search';
import TabsView from '../tabsView/TabsView';

import './SliderContainer.less' ;

const SliderContainer = observer(() => {
    return (
        <div className="slider">
            <Search/>
            <TabsView/>
        </div>
    );
});
export {SliderContainer} ;
