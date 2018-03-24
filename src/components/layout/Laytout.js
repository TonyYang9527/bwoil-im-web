import React from 'react';
import {observer} from 'mobx-react';
import {theme} from '../../stores/ThemeStore' ;
import './Layout.css' ;

const Laytout = observer(({children, ...props, store}) => {
    const style = {
        width: theme.width + 'px',
        height: theme.height + 'px',
        left: theme.left + 'px',
        top: theme.top + 'px',
        background: theme.background
    };

    return (
        <div {...props} className="chartering" style={style}>
            {children}
        </div>
    );
});

export {Laytout} ;
