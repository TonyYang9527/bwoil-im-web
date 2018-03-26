import React from 'react';
import {observer} from "mobx-react";
import {Icon, Button,Upload,Modal} from 'antd';
import {observable, action} from 'mobx';


const state = observable({
    previewVisible: false,
    fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }] ,
    length : 0 ,
    previewImage: '',
});

const actions = {

    showModal: action(e => {
        state.previewVisible =true ;
    }),
    handleCancel: action(e => {
        state.previewVisible =false ;
    }),
    handleChange : action( ({flist}) => {

        console.log(JSON.stringify(flist)) ;
       // state.fileList =flist ;
       // state.length = state.fileList.length ;
    }),

    handlePreview : action((file) => {
        state.previewImage=file.url || file.thumbUrl;
        state.previewVisible= true;
    })
};

const ModalUpload = observer(({store,action}) => {
    const uploadButton = (
        <div>
          <Icon type="plus" />
          <div className="ant-upload-text">Upload</div>
        </div>
      );

    return (
        <Modal visible={state.previewVisible} footer={null} onCancel={action.handleCancel}>
        <Upload 
           action="https://github.com/TonyYang9527/bwoil-im-web/tree/master/src/"
           listType="picture-card"
           fileList={state.fileList}
           onPreview={action.handlePreview}
           onChange={action.handleChange} >
          { state.fileList.length >= 3? null : uploadButton}
        </Upload>
      </Modal>
    );
  }
);

export {ModalUpload,state,actions} ;