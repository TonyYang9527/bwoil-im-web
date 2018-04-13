import React from 'react';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';



/*******message components ******/
const userStates = observable({
 data:{ conversationId : 'a' ,
        name : ['JIM King','Yang Sun'] ,
        missed : 12,
        date : '20:20' ,
        content :'ddd' 
    }
});

const statesActions = {
     onclick: action((data) => {
        console.log("data:" ,data) ;
        /****Invoke MessageActions****/
        messageActions.load('222') ;

     }),
    change: action((num) => {
        userStates.data.missed =num ;
        console.log(JSON.stringify(userStates.data.missed)) ;
    }),
};

/*******message components ******/
const messageStates = observable({
      messages: [],
   });

   const messageActions = {
        load: action((conversationId) => {
            /**Step1:RestClient query Data*/
            messageStates.messages =[
                {   id:"12222",
                    type: "image",
                    message: "https://tctechcrunch2011.files.wordpress.com/2018/02/gettyimages-913011976.jpg?w=738",
                    status: "received",
                    time: "02:49",
                    fromUser: true
                }];
             console.log("load messages:", messageStates.messages) ;
             /****Invoke stepActions****/
              stepActions.init(1,'error') ;
        }),
        
       send: action((message) => {
          messageStates.messages.push(message) ;
       }),
   };

   /*******Step components ******/
   const stepStates = observable({
         current: null,
         status:'',
         steps: ['Chat', 'Offer', 'Onsub', 'Complete'],
   });

 const stepActions = {
      init: action((current,status) => {
        stepStates.current=current;
        stepStates.status=status;
        console.log("stepActions  init:", stepStates) ;
      }),
      changeStatus: action((current ,status) => {
          stepStates.current=current;
          stepStates.status=status;
        console.log("load messages:", stepStates) ;
      }),
     changeNode: action((steps) => {
        messageStates.steps=steps ;
        console.log("load messages:", stepStates) ;
     }),
 };


 export {userStates,statesActions ,messageStates,messageActions} ;

   