import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import Mine from '../components/mine/Mine';
import Svg from '../icons/Svg';

export default class MineScreen extends Component{

    render(){
        return (
            <View style={styles.container}>
                <Mine/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
});