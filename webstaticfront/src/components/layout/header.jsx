import React from 'react';
import { Layout, Button,Modal} from 'antd';
import ThemePicker from '../widget/ThemePicker'
import $ from "jquery";
const { Header } = Layout;

export default class Headers extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isFullScreen:false,
            src:require(`../icons/fullscreen.png`),
            isResize:false,
            srcs:require(`../icons/suo.png`),
            visible:false,
            background:'#112E4F',
        }
    }
    componentDidMount = () => {
        this.watchFullScreen()
      }
      //控制全屏
      fullScreen = () => {
        console.log('fullscreen:',this.state.isFullScreen);
            if (!this.state.isFullScreen) {
              this.setState({
                src:require(`../icons/exitscreen.png`)
              })
              this.requestFullScreen();
            } else {
              this.setState({
                src:require(`../icons/fullscreen.png`)
              })
              this.exitFullscreen();
            }
        };
        //进入全屏
    requestFullScreen = () => {
      console.log('requestFullScreen')
         var de = document.documentElement;
         if (de.requestFullscreen) {
           de.requestFullscreen();
         } else if (de.mozRequestFullScreen) {
           de.mozRequestFullScreen();
         } else if (de.webkitRequestFullScreen) {
           de.webkitRequestFullScreen();
         }
     };
     
     //退出全屏
     exitFullscreen = () => {
     console.log('exitFullscreen')
       var de = document;
         if (de.exitFullscreen) {
           de.exitFullscreen();
         } else if (de.mozCancelFullScreen) {
           de.mozCancelFullScreen();
         } else if (de.webkitCancelFullScreen) {
           de.webkitCancelFullScreen();
         }else if (de.msExitFullscreen) {
           de.msExitFullscreen();
         }
     };
     
     //监听fullscreenchange事件
     watchFullScreen = () => {
      const _self = this;
      let de = document;
      document.addEventListener(
          "fullscreenchange",
          function() {
            _self.setState({
              isFullScreen: de.fullscreen
            });
         },
          false
        );
      document.addEventListener(
          "webkitfullscreenchange",
          function () {
              _self.setState({
                  isFullScreen: de.webkitIsFullScreen
              });
         },
          false
      );
      document.addEventListener(
          "mozfullscreenchange",
          function() {
            _self.setState({
              isFullScreen: de.mozFullScreen
            });
         },
          false
        );
        document.addEventListener(
          "msfullscreenchange",
          function() {
            _self.setState({
              isFullScreen: de.msFullScreen
            });
        },
          false
        );
     };
     logout = () =>{
        this.setState({
          visible:true
        })
     }
     handleOk = () =>{
        this.setState({
          visible:false
        },()=>{
          window.location.href = '/'
        })
     }
     handleCancel = () =>{
        this.setState({
          visible:false
        })
    }
     resize = () =>{
       let {isResize} = this.state
       if(!isResize){
          $("#leftSidebar").addClass("leftSidebars")
          $(".leftSidebar .smallImg").css({"margin": "70px !important","vertical-align": "middle !important"})
          this.setState({
            isResize:true,
            srcs:require(`../icons/shen.png`)
          })
       }else{
          $("#leftSidebar").removeClass("leftSidebars")
          $(".leftSidebar .smallImg").css({"margin": "37px !important","vertical-align": "middle !important"})
          this.setState({
            isResize:false,
            srcs:require(`../icons/suo.png`)
          })
       }
     }
     bgchange=(color)=>{
      this.setState({
        background:color
      });
      console.log(color);
    }
    render(){
        return(
            <Header className="header">
            <div>
              <a href="/"
              >
                <img className="bigImg" src={require(`../icons/logo.png`)} />
              </a>
              <a href="#/" onClick = {this.resize}
              >
                <img className="suoImg" src={this.state.srcs} />
              </a>
              <a
                href="#/"
                onClick={this.fullScreen}
              >
                <img className="rightImg" src={this.state.src} name="点我全屏"/>
              </a>
              <a
                href="#/"
                onClick={this.logout}
              >
                <img className="rightImg" src={require(`../icons/close.png`)} />
              </a>
              <div className="rightColor">
              <ThemePicker  
                type="sketch"
                small
                color={'#eee'}
                presetColors={[
                    '#13C2C2',
                    '#18BFFF',
                    '#2F54EB',
                    '#722ED1',
                    '#EB2F96',
                    '#F5222D',
                    '#FA541C',
                    '#FA8C16',
                    '#FAAD14',
                    '#E1C40B',
                    '#A0D911',
                    '#52C41A',
                ]}
                changecolor={(color)=>{this.bgchange(color)}}
              ></ThemePicker>
              </div>
            </div>
                
            <Modal
            title="系统提示"
						visible={this.state.visible}
						onOk={this.handleOk}
						onCancel={this.handleCancel}
						maskClosable={false}
						centered
						width={400} 
						footer={[
							<Button type="primary" key="btnOk" style={{width:'77px',height:'30px'}} onClick={this.handleOk}>
								确定
							</Button>,
							<Button key="btnCancel" style={{width:'77px',height:'30px',border:'1px solid',borderColor:'#d9d9d9'}} onClick={this.handleCancel}>
								取消
							</Button>
							]}
					>
            <img style={{display:'block',margin: '20px auto 0px'}} src={require(`../icons/deleteIcon.png`)}/>,
					  <p style={{textAlign:'center',fontSize: '16px',color:'#333333',marginBottom:40}}>您确定退出登录吗？</p>
					</Modal>
          </Header>
        )
    }
}