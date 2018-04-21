import React from 'react';
import {observer} from "mobx-react";
import {Icon, Upload, Modal} from 'antd';
import {observable, action} from 'mobx';

const state = observable({
    modalShow: false,
    modalpreviewShow: false,
    disabled: false,
    fileList: [],
    previewImage: '',
    maxSize: 5,
    accept: '',
});

const actions = {
    showModal: action(e => {
        state.modalShow = true;
        state.accept = e.target.getAttribute("value");
    }),
    handleCancel: action(e => {
        //1. close modal 
        state.modalShow = false;
        //2.clean up filelist 
        state.fileList = [];
    }),
    handlePreviewCancel: action(e => {
        // 1. close preview modal .
        state.modalpreviewShow = false;
    }),
    handleChange: action((info) => {

        if (info.fileList.length >= state.maxSize) {
            state.disabled = true;
        }
        let fileList = info.fileList;
        // 1.Limit the number of uploaded maxSize = 5 files
        fileList = fileList.slice(0, state.maxSize);
        // 2.read from response and show file link
        fileList = fileList.map((file) => {
            if (file.response) {
                //Component will show file.url as link
                file.url = file.response.url || file.thumbUrl;
            }
            return file;
        });
        // 3. filter successfully uploaded files according to response from server
        fileList = fileList.filter((file) => {
            if (file.response) {
                // return file.response.status === 'done';
                return file.status === 'done';
            }
            return true;
        });
        //4. update  state.fileList 
        state.fileList = fileList;
    }),
    handlePreview: action((file) => {
        state.previewImage = file.url || file.thumbUrl;
        state.modalpreviewShow = true;
    }),
    handleRemove: action((file) => {
        //1. find remove file index
        const index = state.fileList.indexOf(file);
        //2. clone  fileList & remove file.
        const list = state.fileList.slice();
        list.splice(index, 1);
        //3. renew  fileList
        state.fileList = list;
        //4. enable upload button.
        if (state.fileList.length <= state.maxSize && state.disabled) {
            state.disabled = false;
        }
    })
};

const ModalUpload = observer(({store, action}) => {
        return (
            <Modal
                title="upload"
                visible={state.modalShow}
                onCancel={action.handleCancel}
                footer={null}
                destroyOnClose={true}
                maskClosable={false}
                height='auto'>

                <Upload
                    name="file"
                    action="http://192.168.48.111/api/gateway_simplewebapp/api/simple/file/upload"
                    listType="picture-card"
                    fileList={state.fileList}
                    onPreview={action.handlePreview}
                    onChange={action.handleChange}
                    onRemove={action.handleRemove}
                    showUploadList={true}
                    multiple={true}
                    disabled={state.disabled}
                    accept={state.accept}>
                    <div>
                        <Icon type="plus"/>
                        <div className="ant-upload-text">Upload</div>
                    </div>
                </Upload>
                <Modal visible={state.modalpreviewShow} footer={null} onCancel={action.handlePreviewCancel}>
                    <img alt="example" style={{width: '100%'}} src={state.previewImage}/>
                </Modal>
            </Modal>
        );
    }
);

export {ModalUpload, state, actions} ;