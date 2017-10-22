import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import Svg from '../icons/Svg';

export default class InterestScreen extends Component{

    render(){
        return (
            <View style={styles.container}>
                <Text>this is interest page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        width:28,
        height:28
    }
});