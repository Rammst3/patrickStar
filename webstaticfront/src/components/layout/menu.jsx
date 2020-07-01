import React from 'react';
import { Menu, Icon} from 'antd'
const SubMenu = Menu.SubMenu;

class Menucomponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
          mode: this.props.mode, //左侧菜单布局样式
          selectClass:"ant-menu-item ant-menu-item-selected",
          itemOne:'itemOne',
          itemOne1:"itemOne1",
          itemTwo:'itemTwo',
          itemTwo1:"itemTwo1",
          itemThree:'itemThree',
          itemThree1:"itemThree1",
            // menulist:[
            //     {
            //       "type":"home",
            //       "title":"首页",
            //       "list":[]
            //     },
            //     {
            //       "type":"notification",
            //       "title":"广告栏/通知",
            //       "list":["广告栏","商城公告"]
            //     },
            //     {
            //       "type":"appstore",
            //       "title":"商品分类",
            //       "list":["智能手机"]
            //     }
            //   ]
        }
    }

    render(){
      let {selectClass,itemOne,itemOne1,itemTwo,itemTwo1,itemThree,itemThree1} = this.state
        return(
            <Menu theme='light' mode={this.state.mode} defaultSelectedKeys={['home']}>
              <Menu.Item key="1" className={selectClass=="ant-menu-item ant-menu-item-selected"?itemOne:itemOne1}>
                    <a href="#/" className="itemOne itemOne1" >
                      <i  className="smallImg" />
                      <span>设备列表</span>
                    </a>
                  </Menu.Item>
                  <Menu.Item key="2" className={selectClass=="ant-menu-item ant-menu-item-selected"?itemTwo:itemTwo1}>
                    <a href="#/meterShifting" className="itemTwo itemTwo1">
                      <i  className="smallImg" />
                      <span>表计移装</span>
                    </a>
                  </Menu.Item>
                  <Menu.Item key="3" className={selectClass=="ant-menu-item ant-menu-item-selected"?itemThree:itemThree1}>
                    <a href="#/equipmentShifting" className = "itemThree itemThree1">
                      <i className="smallImg"  />
                      <span>设备移装</span>
                    </a>
                  </Menu.Item>
            {/* {
   
                this.state.menulist.map( (item,index) =>{
                  if(item.list.length){
                   return (
               
                     <SubMenu //style={{'background':this.props.bgColor}}
                       key={item.type}
                       title={<span><Icon type={item.type} /><span className="nav-text">{item.title}</span></span>}
                       >
                         {
                           item.list.map((itm,ind)=><Menu.Item key={itm}>{itm}</Menu.Item>
                             
                            
                           )
                         }
                             
        
                       </SubMenu>
                   )
                  }else{
                    return (
                     <Menu.Item key='home'>
                                     <span>
                                       <Icon type={item.type} />
                                       <span className="nav-text">{item.title}</span>
                                     </span>
                     </Menu.Item>
                    )
                   
                  }
   
                 })
            }   */}
          
              
           </Menu>
           
        )
    }
}

export default Menucomponent