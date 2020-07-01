import React, { Component, useReducer } from 'react';
import ReactDOM from "react-dom";
import AxiosData from '../baseData/axiosData';
import axios from "axios";
import Cookie from 'js-cookie';
import { Modal, Icon, message, ConfigProvider, Upload, Select,Input,notification } from "antd";
import zhCN from 'antd/es/locale/zh_CN';
import Devicelist from './deviceList';
const Mip_url = window.localStorage['JSON_HOST'];
const deviceListUrl = Mip_url + "/terminal/queryPage";//列表分页查询
const { Option } = Select

class deviceManager extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tableHeight: 0,
			currPage: 1,
			total: 0, // 设备条数
			pageSize: 10,
			index: 0,
			deleteId: "",//删除id
			infoId: "",//信息id
			editingKey: '',//编辑id
			form:"",
			selectDisplay:false,
			deviceList:[],//设备信息
			banchImport: false,//显示导入modal
			fourValue: undefined,
			//importUrl: importUrl,//导入地址
			importFileList: [], // 导入文件
			importProps: {
				//action: importUrl,
				onChange: this.upLoadImport,
				multiple: false,
			},//导入配置
			importRes: null,//导入返回信息
		}
	}
	//修改下拉框值
	onChange = (value, type) => {
		switch (type) {}
	}
	//修改输入框值
	onChangeValue = (value, type) => {
		switch (type) {
		}
	}
	//修改表格行值
	onChangeRecord = (e, record, index, type) => {
		const deviceList = this.state.deviceList
		let newData = deviceList.map((item, i) => {
			if (i == index) {
				if(type == "deviceNum"){
					item.deciveNum = e.target.value
				}
				if(type == "IMEINum"){
					item.IMEINum = e.target.value
				}
			}
			return item
		})
		this.setState({
			deviceList: newData
		},()=>{
			console.log(record,'1')
		})
	}
	componentDidMount() {
		this.initData()
	}
	//列表初始化
	initData = () => {
		let dataSource = [
			{
				key:'1',
				number:'70152123',
				tableNum:'55017100017081',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				place:'虹口所',
				station:'银杏站',
				name:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				position:'大场镇782弄',
				caliber:'100',
				type:'电磁表',
				contact:'拓安信',
				sign:'远传表',
				auto:'是',
				time:'2020/6/16'
			},
			{
				key:'2',
				number:'70152123',
				tableNum:'55017100017081',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				place:'虹口所',
				station:'银杏站',
				name:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				position:'大场镇782弄',
				caliber:'100',
				type:'电磁表',
				contact:'拓安信',
				sign:'远传表',
				auto:'是',
				time:'2020/6/16'
			},
			{
				key:'3',
				number:'70152123',
				tableNum:'55017100017081',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				place:'虹口所',
				station:'银杏站',
				name:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				position:'大场镇782弄',
				caliber:'100',
				type:'电磁表',
				contact:'拓安信',
				sign:'远传表',
				auto:'是',
				time:'2020/6/16'
			},
			{
				key:'4',
				number:'70152123',
				tableNum:'55017100017081',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				place:'虹口所',
				station:'银杏站',
				name:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				position:'大场镇782弄',
				caliber:'100',
				type:'电磁表',
				contact:'拓安信',
				sign:'远传表',
				auto:'是',
				time:'2020/6/16'
			},
			{
				key:'5',
				number:'70152123',
				tableNum:'55017100017081',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				place:'虹口所',
				station:'银杏站',
				name:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				position:'大场镇782弄',
				caliber:'100',
				type:'电磁表',
				contact:'拓安信',
				sign:'远传表',
				auto:'是',
				time:'2020/6/16'
			},
			{
				key:'6',
				number:'70152123',
				tableNum:'55017100017081',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				place:'虹口所',
				station:'银杏站',
				name:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				position:'大场镇782弄',
				caliber:'100',
				type:'电磁表',
				contact:'拓安信',
				sign:'远传表',
				auto:'是',
				time:'2020/6/16'
			},
			{
				key:'7',
				number:'70152123',
				tableNum:'55017100017081',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				place:'虹口所',
				station:'银杏站',
				name:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				position:'大场镇782弄',
				caliber:'100',
				type:'电磁表',
				contact:'拓安信',
				sign:'远传表',
				auto:'是',
				time:'2020/6/16'
			},
			{
				key:'8',
				number:'70152123',
				tableNum:'55017100017081',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				place:'虹口所',
				station:'银杏站',
				name:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				position:'大场镇782弄',
				caliber:'100',
				type:'电磁表',
				contact:'拓安信',
				sign:'远传表',
				auto:'是',
				time:'2020/6/16'
			},
			{
				key:'9',
				number:'70152123',
				tableNum:'55017100017081',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				place:'虹口所',
				station:'银杏站',
				name:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				position:'大场镇782弄',
				caliber:'100',
				type:'电磁表',
				contact:'拓安信',
				sign:'远传表',
				auto:'是',
				time:'2020/6/16'
			},
			{
				key:'10',
				number:'70152123',
				tableNum:'55017100017081',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				place:'虹口所',
				station:'银杏站',
				name:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				position:'大场镇782弄',
				caliber:'100',
				type:'电磁表',
				contact:'拓安信',
				sign:'远传表',
				auto:'是',
				time:'2020/6/16'
			},
			{
				key:'11',
				number:'70152123',
				tableNum:'55017100017081',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				place:'虹口所',
				station:'银杏站',
				name:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				position:'大场镇782弄',
				caliber:'100',
				type:'电磁表',
				contact:'拓安信',
				sign:'远传表',
				auto:'是',
				time:'2020/6/16'
			}
		]
		this.setState({
			deviceList:dataSource,
			total:dataSource.length
		})
	}
	//列表回调
	initHandelData = (res) => {
	}
	//刷新数据
	handleFresh = () => {
		this.setState({
			currPage: 1
		}, () => {
			this.initData()
		})
	}
	//下载模版
	handleDownload = () =>{
		notification.success({
			message: '下载成功！',
			description:''	
		})
	}
	//下载模版
	// handleDownload = () => {
	// 	AxiosData.getData(exportTemplateUrl, this.downloadCallBack)
	// }
	//下载模版回调
	// downloadCallBack = (res) => {
	// 	window.location.href = exportTemplateUrl;
	// }
	//上传
	handleExport = () =>{
		this.setState({
			banchImport: true
		})
	}
	// 上传文件前的钩子函数
	beforeUpload =() => {
		message.loading('正在导入中...');
		return true;
	}
	//改变导入文件
	upLoadImport = (info) => {
		// console.log(info,"info")
		let importFileList = [...info.fileList];
		importFileList = importFileList.slice(-1);
		importFileList = importFileList.map(file => {
			this.setState({
				importRes: file.response
			})
			return file;
		});
		this.setState({ importFileList });
	}
	//导入确定
	banchExportOnOk = () => {
		let { importFileList, importRes } = this.state
		// console.log(importRes,"importRes")
		if (importRes.error == "success") {
			message.success("导入成功！")
			this.setState({
				banchImport: false,
				importFileList: []
			})
			this.initData()
		} else {
			message.error("导入失败！")
			this.setState({
				banchImport: false
			})
		}
	}
	//导入取消
	banchExportOnCancel = () => {
		let { importFileList } = this.state
		this.setState({
			banchImport: false,
			fourValue: undefined,
			importFileList: []
		})
	}
	//表格行编辑取消
	cancel = (record,index)=>{
		let list =  [...this.state.deviceList];
		list.map((item,i) => {
			if(i == index) {
				item.selectDisplay = false
				item.onChangeRecord = false
			}
		})
		this.setState({
			deviceList:list
		})
	}
	//表格行编辑
	edit = (record,index)=>{
		let list =  [...this.state.deviceList];
		list.map((item,i) => {
			if(i == index) {
				item.selectDisplay = true
				item.onChangeRecord = true
			}
		})
		this.setState({
			deviceList:list
		})
	}
	//表格行编辑保存
	save = (record,index) =>{
		notification.success({
			message: '修改成功！',
			description:''
		});
		let list =  [...this.state.deviceList];
		list.map((item,i) => {
			if(i == index) {
				item.selectDisplay = false
				item.onChangeRecord = false
			}
		})
		this.setState({
			deviceList:list
		})
	}


	//页码change
	pageChange = (page, pageSize, type) => {
		// console.log(page)
		switch (type) {
			case 'list':
				this.setState({
					currPage: page,
					pageSize: pageSize
				}, () => {
					this.initData()
				})
				break;
		}
	}
	render() {
		let { pageName } = this.state;
		return (
			<div>
				<ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
					<Devicelist
						data={this.state}
						onChangeValue={this.onChangeValue}
						onChangeRecord={this.onChangeRecord}
						pageChange = {this.pageChange}
						handleFresh = {this.handleFresh}
						handleDownload = {this.handleDownload}
						handleExport = {this.handleExport}
						beforeUpload = {this.beforeUpload}
						banchExportOnOk = {this.banchExportOnOk}
						banchExportOnCancel = {this.banchExportOnCancel}
						upLoadImport = {this.upLoadImport}
						cancel = {this.cancel}
						save = {this.save}
						edit = {this.edit}
					/>
				</ConfigProvider>
			</div>
		)
	}
}
export default deviceManager;
