import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default class ChatScreen extends Component{

    static navigationOptions = {
        header: null,
        tabBarLabel:'聊天',
        tabBarIcon: ({tintColor}) => {
            return (
                <Image
                    source={require('../icons/interest.png')}
                    style={[styles.icon,{tintColor:tintColor}]}
                />
            )
        }
    };

    render(){
        return (
            <View style={styles.container}>
                <Text>this is chat page</Text>
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
        width:26,
        height:26
    }
})