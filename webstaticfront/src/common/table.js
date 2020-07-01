import React, {Component} from "react";
import {Table,Row,Col} from "antd";

class Tables extends Component { 
	
	constructor(props) {
	    super(props);
		
	}
	render() {
		let {dataSource,columns,tableHeight,rowSelection,rowKey} = this.props
		return (
			<Table
				dataSource={dataSource} 
				columns={columns}
				scroll={{y:tableHeight}}
				rowSelection = {rowSelection}
				rowKey={rowKey}
				pagination={false}
				expandedRowRender = {(record, index, indent, expanded)=>{
					console.log(record,index,indent,expanded)
					return(
						<div>
							<Row style={{marginBottom:'15px'}}>
								<span className="expandTitle">所：</span><span className="expandValue1">{record.place}</span>
								<span className="expandTitle">站：</span><span className="expandValue1">{record.station}</span>
								<span className="expandTitle">户名：</span><span className="expandValue2">{record.name}</span>
								<span className="expandTitle">用水地址：</span><span className="expandValue2">{record.address}</span>
								<span className="expandTitle">表位：</span><span className="expandValue3">{record.position}</span>
								<span className="expandTitle">口径(mm)：</span><span className="expandValue1">{record.caliber}</span>
							</Row>
							<Row>	
								<span className="expandTitle">水表类型：</span><span className="expandValue1">{record.type}</span>
								<span className="expandTitle">通讯设备商：</span><span className="expandValue1">{record.contact}</span>
								<span className="expandTitle">远传标志：</span><span className="expandValue2">{record.sign}</span>
								<span className="expandTitle">自动采集：</span><span className="expandValue2">{record.auto}</span>
								<span className="expandTitle">上线时间：</span><span className="expandValue3">{record.time}</span>
							</Row>
						</div>
					)
				}}
			/>
		)
	}
}

export default Tables;
