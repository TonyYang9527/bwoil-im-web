import React from 'react';
import {observer} from 'mobx-react';
import {Icon, Input} from 'antd';
import './Search.less';

const Search = observer(({store}) => {
        const prefix = <Icon type="search"/>;
        const suffix = store.data.filter ?
            <Icon type="close-circle" onClick={store.actions.clearFilter}/> : null;
        return (
            <div className='search'>
                <Input size="large" style={{fontSize: 14, background: '#EFEFEF', borderRadius: 4}} 
                       placeholder='Search contact…'
                       value={store.data.filter}
                       prefix={prefix}
                       suffix={suffix}
                       onChange={store.actions.onChange}/>
            </div>
        );
    }
);

export default Search;