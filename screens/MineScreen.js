import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import Mine from '../components/mine/Mine';
import Svg from '../icons/Svg';

export default class MineScreen extends Component{

    static navigationOptions = {
        header: null,
        tabBarLabel:'我的',
        tabBarIcon: ({tintColor}) => {
            return (
                <Svg icon="mine" size="26" color="#929292" style={styles.icon}/>
            )
        }
    };

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
        // justifyContent:'center',
        // alignItems:'center'
    },
    icon:{
        width:28,
        height:28
    }
});