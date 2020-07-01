import React from 'react';
import { Layout, Button,Input} from 'antd';
import { HashRouter,Route,Switch } from 'react-router-dom';
import deviceManager from './deviceList/deviceManage';
import equipmentManager from './equipmentShifting/equipmentManage';
import meterManager from './meterShifting/meterManage'
import "./style/layout/layout.css"
import Headers from './components/layout/header'
import Sidercomponent from './components/layout/sider'
const { Content, Footer } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    fetch("./config.json")
    .then(res => res.json())
    .then(json => window.localStorage['JSON_HOST'] = json.apiServerUrl)
  }
    
  render(props) {
    return (
      <Layout className='layoutBd' >
        <Headers/>
        <Layout>
          {/*左侧菜单栏*/}
          <Sidercomponent //bgColor={this.state.background}
          ></Sidercomponent>
          <Content className="animate-route">
              <HashRouter>
                <Switch>
                  <Route exact path="/" component={deviceManager}></Route>
                  <Route  path="/meterShifting" component={meterManager}></Route>
                  <Route  path="/equipmentShifting" component={equipmentManager}></Route>
                </Switch>
              </HashRouter>
          </Content>
        </Layout>
          <Footer className="footer">   版本号:V1.0 &nbsp;&nbsp;&nbsp;&nbsp;Copyright &copy; {new Date().getFullYear()} Inesa All Rights Reserved. 云瀚科技 版权所有</Footer>
      </Layout>
      
    );
  }
}

export default App;
