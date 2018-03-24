
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routers/router';  
import registerServiceWorker from './registerServiceWorker';
import "babel-polyfill";
import 'antd/dist/antd.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
