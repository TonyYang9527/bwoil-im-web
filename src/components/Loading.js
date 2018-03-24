import React from "react";
import { Spin } from 'antd';
import style from './Loading.css';

const Loading = ({isLoading, error}) => {
    // Handle the loading state
    if (isLoading) {
        return <div className={style.loading}>
                <Spin size="large"/>
                </div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};

export default Loading