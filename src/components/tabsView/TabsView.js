import React from 'react';
import {observer} from 'mobx-react';
import {Scrollbars} from 'react-custom-scrollbars';
import {Tabs} from 'antd';
import './TabsView.less';

import Session from '../session/Session';
import Contact from '../contact/Contact';

const TabPane = Tabs.TabPane;

const TabsView = observer(({store}) => {
        return <Tabs activeKey={store.data.activated} onChange={store.actions.onTabChange}>
            <TabPane tab='Message' key='1'>
                <Scrollbars style={{width: 250, height: 572}}
                            renderThumbVertical={store.verticalBarStyle}
                            renderThumbHorizontal={store.horizontalBarStyle}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}>
                    {store.data.sessions.map((elem, index) => <Session store={elem} key={index}/>)}
                </Scrollbars>
            </TabPane>
            <TabPane tab='Contact' key='2'>
                <Scrollbars style={{width: 250, height: 572}}
                            renderThumbVertical={store.verticalBarStyle}
                            renderThumbHorizontal={store.horizontalBarStyle}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}>
                    {store.data.contacts.map((elem, index) => <Contact store={elem} key={index}/>)}
                </Scrollbars>
            </TabPane>
        </Tabs>
    }
);

export default TabsView;