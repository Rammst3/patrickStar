import React, {Component} from "react";
import {Table,Row,Col} from "antd";

class MeterShiftingTable extends Component { 
	
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
								<span className="expandTitle">原服务点号：</span><span className="expandValue1">{record.oldServicePos}</span>
								<span className="expandTitle">原表号：</span><span className="expandValue1">{record.oldNumber}</span>
								<span className="expandTitle">原户名：</span><span className="expandValue2">{record.oldName}</span>
								<span className="expandTitle">原用水地址：</span><span className="expandValue2">{record.address}</span>
								<span className="expandTitle">原表位：</span><span className="expandValue4">{record.oldPosition}</span>
								<span className="expandTitle">所：</span><span className="expandValue1">{record.place}</span>
							</Row>
							<Row>	
								<span className="expandTitle">站：</span><span className="expandValue1">{record.station}</span>
								<span className="expandTitle">通讯设备商：</span><span className="expandValue1" style={{width:'124px'}}>{record.contact}</span>
								<span className="expandTitle">口径(mm)：</span><span className="expandValue4" style={{width:'235px'}}>{record.caliber}</span>
								<span className="expandTitle">上线时间：</span><span className="expandValue4" style={{width:'235px'}}>{record.onlineTime}</span>
								<span className="expandTitle">下线时间：</span><span className="expandValue3">{record.outTime}</span>
							</Row>
						</div>
					)
				}}
			/>
		)
	}
}

export default MeterShiftingTable;
