# bwoil-im-web












ReactJS  reources :

keywords:
react stateless components function event

https://www.google.com.sg/search?q=react+stateless+components+function+event&oq=react+stateless+components++function++event&aqs=chrome..69i57j0l5.22739j0j8&sourceid=chrome&ie=UTF-8

https://stackoverflow.com/questions/39260595/event-handlers-in-react-stateless-components

https://javascriptplayground.com/functional-stateless-components-react/






 Message  List
	
param: 	userId,covsId
	
result	[{
	    covsId: xxxx
        msgId:   xxxx,
        msgType: 'xxxx',
        msgContent: xxxx,
        msgStatus: xxxx,
        senderTime: xxxx,
		
	    sender:{
          senderId: 12223,
          senderName: 'John',
          senderIcon: process.env.PUBLIC_URL.concat("/assets/icon/user/flash.png")
		}
      }]
	
----------------------------	
 
	ADD  Message  [
	      {
            'id': msgId,
            'uri': 'im/message/add',
            'body': {
                "msgItems":[{
                        "covsId": convsId,
						"msgType" : 1
                        "msgContent": msg,
                        "senderId": userId
                    }]
            }
        }
		];
	 
	----------------------------	 

 conversation  List
	params : userId
	
	 conversation  :
	  [{
	  covsId :
	  covsName :
	  covsIcon :
	  covsStatus :
	  createTime :
	  createBy :
	  unreadMsg :[]
	  newMsg :{}
	  memberIds :[] 	  
	  }]
---------------------	  
	Add	conversation  
	  Add 
	  {
	   userIds: userIds ,
	   createBy: userId,
	  };
	 
	 
	 
