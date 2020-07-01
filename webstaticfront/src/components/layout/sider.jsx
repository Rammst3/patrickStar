import React from 'react';
import { Layout} from 'antd';
import Menucomponent from './menu'
const { Sider } = Layout;

class Sidercomponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collapsed: false, //左侧伸缩开关
            mode: 'inline', //左侧菜单布局样式
            background:this.props.bgColor,
        }
    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
          collapsed,
          mode: collapsed ? 'vertical' : 'inline',
        });
    }
    render(){
        return(
            <Sider className="leftSidebar"  id = "leftSidebar"
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                //style={{'background':this.props.bgColor}}
                >
                <Menucomponent //bgColor={this.props.bgColor} 
                mode={this.state.mode}></Menucomponent>
                    
            </Sider>
        )
    }
}

export default Sidercomponent