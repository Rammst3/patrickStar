import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import '../css/style.less'

class SketchExample extends React.Component {
  state = {
    displayColorPicker: false,
    color: '#fff'
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.hex })
  };
  handleChangeComplete = (color) => {
    this.setState({ 
      color: color.hex 
    });
  }

  render() {
    const {small} = this.props
    const {color, displayColorPicker} = this.state;
    window.localStorage.setItem("lastColor",color)
    const styles = reactCSS({
      'default': {
        color: {
          width: small ? '24px' : '120px',
          height: small ? '16px' : '24px',
          borderRadius: '2px',
          background: color,
        },
        swatch: {
          padding: '1px',
          background: '#fff',
          borderRadius: '2px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
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
          <SketchPicker color={ color } onChange={ this.handleChange }  onChangeComplete={this.handleChangeComplete}/>
          </div>
        </div> : null }

      </div>
    )
  }
}

export default SketchExample