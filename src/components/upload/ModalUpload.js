import React from 'react';
import {observer} from "mobx-react";
import { Icon, Upload, Modal, message} from 'antd';
import {observable, action} from 'mobx';
import  './upload.css';

const state = observable({
    modalShow:false ,
    modalpreviewShow: false,
    disabled :false ,
    fileList: [] ,
    previewImage: '',
    maxSize :5,
});

const actions = {
    showModal: action(e => {
        state.modalShow =true ;
    }),
    handleCancel: action(e => {
        state.modalShow =false ;
    }),
    handlePreviewCancel: action(e => {
        state.modalpreviewShow = false;
    }),
    handleChange: action((info) => {

        if(info.fileList.length >=state.maxSize){
            state.disabled=true;
         }
         if(info.fileList.length >state.maxSize){
            info.fileList.pop();
         }
        state.fileList =info.fileList;
        if (info.file.status === 'uploading') {
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }),
    handlePreview : action((file) => {
        state.previewImage=file.url || file.thumbUrl;
        state.modalpreviewShow= true;
    }),
    handleRemove: action((file) => {
        state.fileList.pop(file) ;
        if(state.fileList.length <= state.maxSize && state.disabled ){
            state.disabled=false;
        }
    }),

};

const ModalUpload = observer(({store,action}) => {
    return (
        <Modal
          title="upload"  
          visible={state.modalShow} 
          onCancel={action.handleCancel}
          footer={null}
          destroyOnClose={true}
          maskClosable={false}
          height ='auto'
          >
        <Upload 
           action="//jsonplaceholder.typicode.com/posts/"
           listType="picture-card"
           defaultFileList={state.fileList}
           onPreview={action.handlePreview}
           onChange={action.handleChange}
           onRemove={action.handleRemove}
           multiple={true}
           disabled ={state.disabled}
          >
          <div>
          <Icon type="plus" />
          <div className="ant-upload-text">Upload</div>
          </div>
        </Upload>
        <Modal visible={state.modalpreviewShow} footer={null} onCancel={action.handlePreviewCancel}>
            <img alt="example" style={{ width: '100%' }} src={state.previewImage} />
         </Modal>
      </Modal>
    );
  }
);

export {ModalUpload,state,actions} ;