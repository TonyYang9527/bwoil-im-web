import React from 'react';
import {observer} from 'mobx-react';
import {Scrollbars} from 'react-custom-scrollbars';
import {Tabs} from 'antd';
import './TabsView.less';

import Session from '../session/Session';
import Contact from '../contact/Contact';

import globalStore from '../../stores/GlobalStore';

const TabPane = Tabs.TabPane;

const TabsView = observer(() => {
        return (
            <Tabs activeKey={globalStore.data.tabKey} onChange={globalStore.actions.changeTab}>
                <TabPane tab='Message' key='1'>
                    <Scrollbars style={{width: 250, height: 572}}
                                renderThumbVertical={globalStore.verticalBarStyle}
                                renderThumbHorizontal={globalStore.horizontalBarStyle}
                                thumbSize={56}>
                        {globalStore.data.filterSessions.map((elem, index) => <Session session={elem} key={index}/>)}
                    </Scrollbars>
                </TabPane>
                <TabPane tab='Contact' key='2'>
                    <Scrollbars style={{width: 250, height: 572}}
                                renderThumbVertical={globalStore.verticalBarStyle}
                                renderThumbHorizontal={globalStore.horizontalBarStyle}
                                thumbSize={56}>
                        {globalStore.data.filterContacts.map((elem, index) => <Contact contact={elem} key={index}/>)}
                    </Scrollbars>
                </TabPane>
            </Tabs>
        )
    }
);

export default TabsView;