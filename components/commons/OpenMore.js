import React,{Component} from 'react';
import {Image,StyleSheet} from 'react-native';
import Svg from '../../icons/Svg';
export default class OpenMore extends Component{

    render(){
        return(
            <Svg icon="right" size="16" color="#C0BFC5" style={styles.icon} />
        )
    }
}
const styles = StyleSheet.create({
    icon:{
        marginRight: 10,
    }
});