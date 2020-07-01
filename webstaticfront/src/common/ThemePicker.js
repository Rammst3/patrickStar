import React, {Component} from 'react';
import ColorPicker from './colorPicker';
import theme from '../baseData/theme';
import '../css/style.less'

const PUBLIC_URL = process.env.PUBLIC_URL || '';

const P_URL = PUBLIC_URL ? PUBLIC_URL.replace('/', '') : '';

const OLD_LESS_ID = `less:${P_URL ? P_URL + '-' : ''}color:old`;
const LESS_ID = `less:${P_URL ? P_URL + '-' : ''}color`;
const LESS_URL = `${PUBLIC_URL}/less.min.js`;
export default class ThemeColorPicker extends Component {
    constructor(...props) {
        super(...props);

        //快速生效
        const themeStyleContent = window.localStorage.getItem('theme-style-content');
        console.log(themeStyleContent,"style")
        if (themeStyleContent) {
            const themeStyle = document.createElement('style');
            themeStyle.type = 'text/css';
            themeStyle.id = OLD_LESS_ID;
            themeStyle.innerHTML = themeStyleContent;
            document.body.insertBefore(themeStyle, document.body.firstChild);
        }

        const {primaryColor} = this.props;

        // .less文件加载完成之后，生成主题，localStorage中的主题有可能过时，需要覆盖
        if (primaryColor) this.handleColorChange(primaryColor);

        // this.props.addEventListener(document, 'click', () => this.handleToolTipHide(0));
    }

    render() {
        return(
            <ColorPicker
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
                />
        )
    }
}