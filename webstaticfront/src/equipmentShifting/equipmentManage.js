import React, { Component, useReducer } from 'react';
import ReactDOM from "react-dom";
import AxiosData from '../baseData/axiosData';
import axios from "axios";
import Cookie from 'js-cookie';
import { Modal, Icon, message, ConfigProvider, Upload, Select,Input,notification } from "antd";
import zhCN from 'antd/es/locale/zh_CN';
import Equipmentlist from './equipmentList';
const Mip_url = window.localStorage['JSON_HOST'];
const deviceListUrl = Mip_url + "/terminal/queryPage";//列表分页查询
const { Option } = Select

class equipmentManager extends Component {
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
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				oldServicePos:'70152123',
				oldNumber:'55017100017081',
				oldName:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				oldPosition:'大场镇782弄',
				place:'闸北所',
				station:'银杏站',
				contact:'拓安信',
				caliber:'100',
				onlineTime:'2020/5/08',
				outTime:'2020/6/16'
			},
			{
				key:'2',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				oldServicePos:'70152123',
				oldNumber:'55017100017081',
				oldName:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				oldPosition:'大场镇782弄',
				place:'闸北所',
				station:'银杏站',
				contact:'拓安信',
				caliber:'100',
				onlineTime:'2020/5/08',
				outTime:'2020/6/16'
			},
			{
				key:'3',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				oldServicePos:'70152123',
				oldNumber:'55017100017081',
				oldName:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				oldPosition:'大场镇782弄',
				place:'闸北所',
				station:'银杏站',
				contact:'拓安信',
				caliber:'100',
				onlineTime:'2020/5/08',
				outTime:'2020/6/16'
			},
			{
				key:'4',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				oldServicePos:'70152123',
				oldNumber:'55017100017081',
				oldName:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				oldPosition:'大场镇782弄',
				place:'闸北所',
				station:'银杏站',
				contact:'拓安信',
				caliber:'100',
				onlineTime:'2020/5/08',
				outTime:'2020/6/16'
			},
			{
				key:'5',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				oldServicePos:'70152123',
				oldNumber:'55017100017081',
				oldName:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				oldPosition:'大场镇782弄',
				place:'闸北所',
				station:'银杏站',
				contact:'拓安信',
				caliber:'100',
				onlineTime:'2020/5/08',
				outTime:'2020/6/16'
			},
			{
				key:'6',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				oldServicePos:'70152123',
				oldNumber:'55017100017081',
				oldName:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				oldPosition:'大场镇782弄',
				place:'闸北所',
				station:'银杏站',
				contact:'拓安信',
				caliber:'100',
				onlineTime:'2020/5/08',
				outTime:'2020/6/16'
			},
			{
				key:'7',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				oldServicePos:'70152123',
				oldNumber:'55017100017081',
				oldName:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				oldPosition:'大场镇782弄',
				place:'闸北所',
				station:'银杏站',
				contact:'拓安信',
				caliber:'100',
				onlineTime:'2020/5/08',
				outTime:'2020/6/16'
			},
			{
				key:'8',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				oldServicePos:'70152123',
				oldNumber:'55017100017081',
				oldName:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				oldPosition:'大场镇782弄',
				place:'闸北所',
				station:'银杏站',
				contact:'拓安信',
				caliber:'100',
				onlineTime:'2020/5/08',
				outTime:'2020/6/16'
			},
			{
				key:'9',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				oldServicePos:'70152123',
				oldNumber:'55017100017081',
				oldName:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				oldPosition:'大场镇782弄',
				place:'闸北所',
				station:'银杏站',
				contact:'拓安信',
				caliber:'100',
				onlineTime:'2020/5/08',
				outTime:'2020/6/16'
			},
			{
				key:'10',
				deciveNum:'1805802572',
				IMEINum:'100017081',
				batch:'21',
				meter:'大表',
				platform:'拓安信',
				oldServicePos:'70152123',
				oldNumber:'55017100017081',
				oldName:'上海昶仰物业管理有限公司',
				address:'聚丰园路祁连二村c街坊96号',
				oldPosition:'大场镇782弄',
				place:'闸北所',
				station:'银杏站',
				contact:'拓安信',
				caliber:'100',
				onlineTime:'2020/5/08',
				outTime:'2020/6/16'
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
	//上传
	handleExport = () =>{
		notification.success({
			message: '上传成功！',
			description:''	
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
					<div>
						<Equipmentlist
							data={this.state}
							onChangeValue={this.onChangeValue}
							onChangeRecord={this.onChangeRecord}
							pageChange = {this.pageChange}
							handleFresh = {this.handleFresh}
							handleDownload = {this.handleDownload}
							handleExport = {this.handleExport}
							cancel = {this.cancel}
							save = {this.save}
							edit = {this.edit}
						/>
					</div>
				</ConfigProvider>
			</div>
		)
	}
}
export default equipmentManager;
