import {action, observable} from "mobx";


const data = observable({
    isLogin: false,
});

const actions = {

login: action(() => { 
    data.isLogin=true ;
})

};
export default {data ,actions} ;


    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                  console.log('Received values of history: ', props.history);
                  console.log('Received values of props.auth.: ',props.auth);
                  props.auth.actions.login();
                  props.history.push("/chat");
            }
        });
    }
    
    
    
    
    import React from 'react';
import {observer} from 'mobx-react';
import {HashRouter, Route, Switch,Redirect} from 'react-router-dom';
import Loading from '../components/Loading' ;
import Loadable from 'react-loadable';
import Auth from '../stores/Auth';
import LoginForm from '../components/login/Login';

const AsyncHome = Loadable({
    loader: () => import("../pages/Home/View"),
    loading: Loading
});

const LoginHome = Loadable({
    loader: () => import("../pages/login/View"),
    loading: Loading
});
export default observer(() => (

    <HashRouter>
        <Switch>
              <Route exact  path='/' render={(props)=>{
                    return <LoginForm   auth={Auth} {...props}  />
                }} />
              <Route exact  path="/chat" render={(props)=>{
                    console.log(Auth.data.isLogin) ;
                    if (Auth.data.isLogin){
                        return <AsyncHome />
                    }else{
                        return <Redirect to="/" />
                    }
                }} />
        </Switch>
    </HashRouter>
));
