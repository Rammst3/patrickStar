import React, {Component} from "react";
import {Pagination} from "antd";

class Paginations extends Component { 
	
	constructor(props) {
	    super(props);
		
	}
	onChange = (page,pageSize) => {
		console.log('page111', page,pageSize)
		this.props.pageChange(page,pageSize)
	}
	render() {
		let {total,currPage,pageSize} = this.props.data
		return (
			<div className="pagination">
				<Pagination current={currPage} pageSize={Number(pageSize) } showQuickJumper total={total} showTotal={(total) => `共有 ${total} 条记录`} showSizeChanger onShowSizeChange={this.onChange} onChange={this.onChange} />
				 {/* <div className="paginationBtn" onClick={e => this.onChange(currPage,pageSize)}>GO</div> */}
			</div>

		)
	}
}

export default Paginations;
