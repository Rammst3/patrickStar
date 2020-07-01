import React, {Component} from 'react';
import { Input, Button, Select, DatePicker, Tooltip ,TreeSelect,Icon  } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import Import from './import'
import "../css/common.css";
import "antd/dist/antd.css";
class Header extends Component {
    constructor (props) {
        super (props)
        this.state = {
        }
    }
    render () {
        return (
            <div className="pageHeader">
                <div className="fl searchDiv">
                    <span className="value">
                        <Input size="default" placeholder="请输入关键字进行搜索" onChange={(e)=>{this.props.onChangeValue(e.target.value,"searchname")}}/>
                    </span>
                </div>
                <div className="fl searchDiv">
                    <Button id='fresh' type="primary" style={{ padding:'0 5px' }} onClick={this.props.handleFresh}>
                        <img className="imgIcon" src={require(`../components/icons/sx.png`)} />刷新数据
                    </Button>
                </div>
                <div className="fr">
                    <Button id='download' type="primary" style={{ padding:'0 5px' }} onClick={this.props.handleDownload}>
                        <img className="imgIcon" src={require(`../components/icons/import.png`)} />下载模版
                    </Button>
                    <Button id='import' type="primary" style={{ padding:'0 5px' }} onClick={this.props.handleExport}>
                        <img className="imgIcon" src={require(`../components/icons/export.png`)} />上传
                    </Button>
                </div>
                <Import data={this.props.data}
                        handleExport = {this.props.handleExport}
                        beforeUpload = {this.props.beforeUpload}
                        banchExportOnOk = {this.props.banchExportOnOk}
                        banchExportOnCancel = {this.props.banchExportOnCancel}
                        upLoadImport = {this.props.upLoadImport}
                ></Import>
            </div>
        )
    }
        
};
export default Header;