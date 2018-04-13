import {observable, action} from 'mobx';


const  msgStore = observable({
      messages : observable.map() 
});

const msgActions = {
    
    getAllData: action(() =>{
        return msgStore.messages.values();
    }),
    
    loadConversations: action(()=>{
        msgStore.messages.set(100 ,{
             id: 100,
            name: "Mike Gordon",
            status: "online",
            image: '',
            message: "I miss you dear,call me please. i leave message to you.",
            unread: 98,
            time: "02:49"
          }); 
          msgStore.messages.set(101 ,{
            id: 101,
            name: "Jim",
            status: "online",
            image: '',
            message: "I miss you dear,call me please. i leave message to you.",
            unread: 98,
            time: "02:49"
          }); 
     }),

     addOrUpdate: action((e,conversation) =>{
        msgStore.messages.set(conversation.id,conversation) ;
        e.domEvent.stopPropagation();
    }),

     delete: action((id) =>{
        if(msgStore.messages.has(id)){
            msgStore.messages.delete(id);
         }
    }),

     dropdownOnClick: action( (e,message) =>{
        // console.log("Dropdown OnClick e",e) ;
          console.log("Dropdown OnClick message",message) ;
          if(e.key==='2'){
             if(msgStore.messages.has(message.id)){
                console.log("delete1...") ;
                msgStore.messages.delete(message.id);
                console.log("Dropdown OnClick message",JSON.stringify(msgStore.messages)) ;
             }
          }
        e.domEvent.stopPropagation();
    }),



    /**********************/
    click: action((message) =>{ 
        console.log("MessageActions.click :",JSON.stringify(message)) ;
    }),

    init: action((message) =>{ 

    }),

    change: action((conversation) =>{

    }),

    rename: action((name) =>{
     
    }),


};
export default{msgStore ,msgActions}  ;

   