import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import Svg from '../icons/Svg';

export default class DynamicScreen extends Component{

    static navigationOptions = {
        header: null,
        tabBarLabel:'动态',
        tabBarIcon: ({tintColor}) => {
            return (
                <Svg icon="dynamic" size="26" color="#929292" style={styles.icon}/>
            )
        }
    };

    render(){
        return (
            <View style={styles.container}>
                <Text>this is dynamic page</Text>
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