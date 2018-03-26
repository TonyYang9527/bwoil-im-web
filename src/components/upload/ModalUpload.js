import React from 'react';
import {observer} from "mobx-react";
import {Icon,Upload,Modal} from 'antd';
import {observable, action} from 'mobx';

const state = observable({
    modalShow:false ,
    modalpreviewShow: false,
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
        state.modalShow =true ;
    }),
    handleCancel: action(e => {
        state.modalShow =false ;
    }),
    handlePreviewCancel: action(e => {
        state.modalpreviewShow = false;
    }),
    handleChange: action((info) => {
        console.log(JSON.stringify(info.fileList)) ;
       // state.fileList =flist ;
       // state.length = state.fileList.length ;
    }),
    handlePreview : action((file) => {
        state.previewImage=file.url || file.thumbUrl;
        state.modalpreviewShow= true;
    }),
    handleRemove: action((file) => {
        const index = state.fileList.indexOf(file);
        const newFileList = state.fileList.slice();
        newFileList.splice(index, 1);
        state.fileList= newFileList;
    }),

};

const ModalUpload = observer(({store,action}) => {
    const uploadButton = (
        <div>
          <Icon type="plus" />
          <div className="ant-upload-text">Upload</div>
        </div>
      );

    return (
        <Modal
          title="Image"  
          visible={state.modalShow} 
          onCancel={action.handleCancel}
          footer={<div className="ant-upload-text">Upload Completed!!</div>}
          destroyOnClose={true}
          maskClosable={false}
          >
        <Upload 
           action="//jsonplaceholder.typicode.com/posts/"
           listType="picture-card"
           fileList={state.fileList}
           onPreview={action.handlePreview}
           onChange={action.handleChange}
           onRemove={action.handleRemove}
           multiple={true}
          >
          { state.fileList.length >= 6? null : uploadButton}
        </Upload>
            <Modal visible={state.modalpreviewShow} footer={null} onCancel={action.handlePreviewCancel}>
                <img alt="example" style={{ width: '100%' }} src={state.previewImage} />
         </Modal>
      </Modal>
    );
  }
);

export {ModalUpload,state,actions} ;