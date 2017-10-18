import React,{Component} from 'react';
import {Image,StyleSheet} from 'react-native';
export default class OpenMore extends Component{

    render(){
        return(
            <Image
                style={styles.icon}
                source={require('../../icons/right.png')}
            />
        )
    }
}
const styles = StyleSheet.create({
    icon:{
        marginRight: 10,
        width: 16,
        height: 16,
    }
})