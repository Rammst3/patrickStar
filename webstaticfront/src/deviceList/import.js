import React, {Component} from 'react';
import { Input, Button, Select, Modal, Row ,Icon,Upload  } from 'antd';
import moment from 'moment';
import "antd/dist/antd.css"; 
const {Option} = Select;

class Import extends Component {
    constructor (props) {
        super (props)
        this.state = {
        }
    }
    render() {
        let {importFileList,banchImport,importProps} = this.props.data 
        // console.log(importFileList,banchImport,importProps,"import")
        let banchExportOnOk = this.props.banchExportOnOk
        let banchExportOnCancel = this.props.banchExportOnCancel
        let upLoadImport = this.props.upLoadImport
        let beforeUpload = this.props.beforeUpload
        return(
            <Modal 
                title="上传"
                visible={banchImport}
                onCancel={ banchExportOnCancel }
                onOk= { banchExportOnOk }
                maskClosable={false}
                destroyOnClose = {true}
                centered 
                width={500}
            >
                <div>
                    <Upload {...importProps} fileList={importFileList} beforeUpload = {beforeUpload} onChange = {upLoadImport}>
                        <span className="importTitle">文件:</span>
                        <Button >
                            <Icon type="upload" /> 上传
                        </Button>
                    </Upload>
                </div>
            </Modal>
        )
    }
}
export default Import;