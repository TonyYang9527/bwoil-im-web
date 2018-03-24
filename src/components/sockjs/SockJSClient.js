import SockJS from "sockjs-client";
import UserServices from "../../services/UserServices";

/**
 *call user center verify userinfromation
 **/
const getAuth= ()=> {
   UserServices.getAuth('test','test') ;
   return JSON.stringify({auth: localStorage.getItem('Authorization') });
};

/**
 * zenminstance sockjs client
 * */
const  sockClient = (url ,token)=> {
    var client = new SockJS("http://www.sit1.bwoilmarine.com/_gw_srv_ws");
    client.onopen    = function (event) { client.send(getAuth()); };
    client.onmessage = function (event) { console.log('sockClient onmessage' +event.data) ; };  
    client.onclose   = function (event) { console.log('sockClient onclose') ;};
    return client ;
};

export default sockClient;