import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import Mine from '../components/mine/Mine';

export default class MineScreen extends Component{

    static navigationOptions = {
        header: null,
        tabBarLabel:'我的',
        tabBarIcon: ({tintColor}) => {
            return (
                <Image
                    source={require('../icons/mine.png')}
                    style={[styles.icon,{tintColor:tintColor}]}
                />
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
        width:24,
        height:24
    }
})