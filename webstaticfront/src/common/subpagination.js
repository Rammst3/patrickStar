import React, {Component} from "react";
import {Pagination} from "antd";

class SubPaginations extends Component { 
	
	constructor(props) {
	    super(props);
		
	}
	onChange = (page,pageSize) => {
		console.log('page222', page,pageSize)
		this.props.pageChange(page,pageSize)
	}
	render() {
		let {dtotal,dcurrPage,dpageSize} = this.props.data
		return (
			<div className="pagination">
				<Pagination current={dcurrPage} pageSize={Number(dpageSize) } showQuickJumper total={dtotal} showTotal={(total) => `共有 ${total} 条记录`} showSizeChanger onShowSizeChange={this.onChange} onChange={this.onChange} />
				 <div className="paginationBtn" onClick={e => this.onChange(dcurrPage,dpageSize)}>GO</div>
			</div>

		)
	}
}

export default SubPaginations;
