import React, {Component} from 'react';
import {View} from 'react-native';
import SvgUri from '../svg-icons/index';
import svgs from './svgs';

class Svg extends Component {
    render() {
        const {
            icon,
            color,
            style,
        } = this.props;
        const size = this.props.size || 20;
        const display = this.props.display === undefined ? true : (this.props.display);
        let svgXmlData = svgs[this.props.icon];

        if (this.props.icon === undefined) {
            throw new Error('icon属性不能为空')
        }
        if (!svgXmlData) {
            let err_msg = `没有"${this.props.icon}"这个icon`;
            throw new Error(err_msg);
        }
        return (
            display &&
            <SvgUri
                width={size}
                height={size}
                svgXmlData={svgXmlData}
                fill={color}
                style={style}
            />
        )
    }
}

export default Svg;