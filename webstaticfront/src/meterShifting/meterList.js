import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Input, Button, Form, Modal,Row, Table, Popconfirm,Pagination, Select, Tooltip,notification  } from 'antd';
import "antd/dist/antd.css";
import '../css/common.css';
import Crumbs from "../common/crumbs.js"; //面包屑组件
import Paginations from "../common/pagination.js"; //分页组件
import MeterShiftingTable from "../common/meterShiftingTable"; //table组件
import Header from './header';
const {Option} = Select;

class Meterlist extends Component {
	constructor(props) {
		super(props)
		this.state = {
			Height: 0,
			tableHeight: 0
		}
		this.columns = [
			{
				title: "表号",
				dataIndex: "tableNum"
			},
			{
				title: "设备号",
				dataIndex: "deciveNum",
				render: (text,record,index) => {
					if(record.onChangeRecord){
						return(
							<Input type="text" style={{width:120}} placeholder="请输入" value={text}
							onChange = {(e)=> {this.props.onChangeRecord(e,record,index,"deviceNum")
							}}
							/>
						)
					}
					return (
						text
					)
				}
			},
			{
				title: "IMEI号",
				dataIndex: "IMEINum",
				render: (text,record,index) => {
					if(record.onChangeRecord){
						return(
							<Input type="text" style={{width:120}} placeholder="请输入" value={text}
							onChange = {(e)=> {this.props.onChangeRecord(e,record,index,"IMEINum")
							}}
							/>
						)
					}
					return (
						text
					)
				}
			},
			{
				title: "批次",
				dataIndex: "batch"
			},
			{
				title: "大/小表",
				dataIndex: "meter"
			},
			{
				title: "集收平台",
				dataIndex: "platform"
			},
			{
				title: "操作",
				dataIndex: "handle",
				render: (text,record,index) => {
					return(
						<div>
							<span style={{display:record.selectDisplay?"none":"inline-block"}}>
								<Tooltip placement = "top" title = "编辑">
									<a  className="editText" onClick = {(e)=>this.props.edit(record,index)}>
										<img src={require(`../components/icons/edit.png`)} />
									</a>
								</Tooltip>
							</span>
							<span style={{display:record.selectDisplay?"inline-block":"none"}}>
								<Tooltip placement = "top" title = "保存">
									<a  className="editText" style={{marginRight:'10px'}} onClick = {(e)=>this.props.save(record,index)}>
										<img src={require(`../components/icons/save.png`)} />
									</a>
								</Tooltip>
								<Tooltip placement = "top" title = "撤销">
									<a  className="editText" onClick = {(e)=>this.props.cancel(record,index)}>
										<img src={require(`../components/icons/cx.png`)} />
									</a>
								</Tooltip>
							</span>
						</div>
					)
				}
			}
		];
	}
	// 分页跳转
	pageChange = (page,pageSize,type) => {
		// console.log(page.pageSize);
		this.props.pageChange(page,pageSize,'list')
	}
	componentDidMount() {
		window.addEventListener("resize", () => {
			var allHeight = document.body.clientHeight;
			this.setState({Height: allHeight - 150,tableHeight: allHeight - 370});
		});
		var allHeight = document.body.clientHeight;
		this.setState({Height: allHeight - 150,tableHeight: allHeight - 370 });
	}
	render() {
		return(
			<div>
				<Crumbs title={"表计移装"}/>
				<div className="pageContentWrap" style={{height:this.state.Height}}>
					<div className="pageContent">
						<Header onChangeValue = {this.props.onChangeValue}
								handleFresh = {this.props.handleFresh}
								handleDownload = {this.props.handleDownload}
								handleExport = {this.props.handleExport}
						>
						</Header>
						<div className="tableDiv" >
							<MeterShiftingTable
								rowKey="key"
								rowClassName={(record, index) => {
									let className = 'light-row';
									if (index % 2 === 0) className = 'dark-row';
									return className;
								}}
								tableHeight={this.state.tableHeight}
								columns={this.columns}
								dataSource = {this.props.data.deviceList}
							/>
						</div>
						<Paginations 
							data = {this.props.data}
							pageChange={(page,pageSize)=>this.pageChange(page,pageSize,"list")}
						/>
					</div>
				</div>
			</div>  	
		)
	}
};
export default Meterlist;