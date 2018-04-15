import {observable, action} from 'mobx';


const  msgStore = observable({
    messages: observable.map()
});

const msgActions = {

    loadConversations: action(()=>{
        console.log("msgStore.messages loadConversations : ", msgStore.messages) ;
       let msg = {
            id: 100,
            name: "Mike Gordon",
            status: "online",
            image: '',
            message: "I miss you dear,call me please. i leave message to you.",
            unread: 98,
            time: "02:49"
        };
        msgStore.messages.set(100, msg );
    }),

    addOrUpdate: action((e,conversation) =>{
        if (conversation.id){
          let msg = msgStore.messages.has(conversation.id) ;
           msg.name = conversation.name ;
           msgStore.messages.set(conversation.id ,)
        }else {
         msgStore.messages.set(conversation.id, conversation);
        }
        e.domEvent.stopPropagation();
    }),

     delete: action((id) =>{
        if(msgStore.messages.has(id)){
            msgStore.messages.delete(id);
         }
    }),

     dropdownOnClick: action((e,id) =>{
          if(e.key==='2'){
              if (msgStore.messages.has(id)){
                  msgStore.messages.delete(id);
             }
          }
         if (e.key ==='3') {
             if (msgStore.messages.has(id)) {
               let msg=  msgStore.messages.get(id);
                 msg.name ="Tony" ;
                 msgStore.messages.set(id, msg) ;
             }
         }
        console.log("DropdownOnClick msgStore.messages", msgStore.messages);
        e.domEvent.stopPropagation();
    }),

    click: action((message) =>{ 
        console.log("MessageActions.click :",JSON.stringify(message)) ;
        // invoke some actions
    }),
    init: action((message) =>{ 

    }),
    change: action((conversation) =>{

    }),
    rename: action((name) =>{

    }),
};
export default{msgStore ,msgActions}  ;

   