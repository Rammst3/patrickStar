import React, {Component} from "react";

class Crumbs extends Component { 
	
	constructor(props) {
	    super(props);
		
	}
	render() {
		let {title} = this.props
		return (
			<div className="crumbs" >
				{title}
			</div>
		)
	}
}

export default Crumbs;
