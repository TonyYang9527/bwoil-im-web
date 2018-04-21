import React from 'react';
import {observer} from 'mobx-react';
import {Icon, Input} from 'antd';
import './Search.less';

import globalStore from '../../stores/GlobalStore';

const Search = observer(() => {
        const prefix = <Icon type="search"/>;
        const suffix = globalStore.data.filter ?
            <Icon type="close-circle" onClick={globalStore.actions.clearFilter}/>
            : null;
        return (
            <div className='search'>
                <Input size="large" style={{fontSize: 14, background: '#EFEFEF', borderRadius: 4}}
                       placeholder='Search contact…'
                       value={globalStore.data.filter}
                       prefix={prefix}
                       suffix={suffix}
                       onChange={globalStore.actions.changeFilter}/>
            </div>
        );
    }
);

export default Search;