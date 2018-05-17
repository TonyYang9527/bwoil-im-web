# bwoil-im-web












ReactJS  reources :

keywords:
react stateless components function event

https://www.google.com.sg/search?q=react+stateless+components+function+event&oq=react+stateless+components++function++event&aqs=chrome..69i57j0l5.22739j0j8&sourceid=chrome&ie=UTF-8

https://stackoverflow.com/questions/39260595/event-handlers-in-react-stateless-components

https://javascriptplayground.com/functional-stateless-components-react/



const Member = observer(() => { 
     return ( 
          <div class="member">
             <img class="avatar" src=" https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png "/>
             <p class="nickname ng-binding" title="魏定海13772174144"  >魏定海13772174144</p>
          </div>);
});

/****************/
.member {
    float: left;
    position: relative;
    height: 85px;
    margin-right: 7px;
    margin-left: 7px;
    padding-top: 10px;
        text-align: center;
        line-height: 30px;
}


.member .avatar {
    display: block;
    cursor: pointer;
    width: 55px;
    height: 55px;
    background-color: #ccc;
}

.member .nickname {
    color: #888;
    width: 72px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    font-size: 12px;
    margin-left: -8px;
    vertical-align: middle;
}





http://bbs.bugcode.cn/t/6572
