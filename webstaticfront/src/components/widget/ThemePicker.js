import React from 'react';
import reactCSS from 'reactcss'
import {SketchPicker} from 'react-color'
class ThemePicker extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayColorPicker: false,
            background: localStorage.getItem('@primary-color') || '#313653',
        }
      
    }
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
      };
      handleClose = () => {
        this.setState({ displayColorPicker: false })
      };
      handleChange = (color) => {
        this.setState({ background: color.hex })
      };
    handleChangeComplete = (color) => {
       this.props.changecolor(color.hex);
       this.setState({
        background:color.hex
       })
       localStorage.setItem('@primary-color', color.hex);
       window.less.modifyVars({
        '@primary-color': color.hex,
    })
    .then(() => { })
    .catch(error => {
        console.log(`更新主题失败`);
    });

      };
    render() {
        const {small} = this.props
        const {background, displayColorPicker} = this.state;
        const styles = reactCSS({
      'default': {
        color: {
          width: small ? '24px' : '120px',
          height: small ? '16px' : '24px',
          borderRadius: '2px',
          background: background,
        },
        swatch: {
          padding: '1px',
          background: '#fff',
          borderRadius: '2px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
          marginTop:'23px'
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
        wrapper: {
            position: 'inherit',
            zIndex: '100',
            transform: 'translateX(-50%)',
            color: '#000',
        }
      }
    });
        return (
            <div>
                <div style={ styles.swatch } onClick={ this.handleClick }>
                <div style={ styles.color } />
                </div>
                { displayColorPicker ? <div style={ styles.popover }>
                <div style={ styles.cover } onClick={ this.handleClose }/>
                <div style={styles.wrapper}>
                <SketchPicker color={ background } onChange={ this.handleChange }  onChangeComplete={this.handleChangeComplete}/>
                </div>
                </div> : null }

            </div>
        )
      }
}
export default ThemePicker;