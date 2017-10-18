import React,{Component} from 'react';
import {Button,View,Text} from 'react-native';

export default class LogOut extends Component{

    onPress = () =>{

    }

    render(){
        return(
            <View>
                <Button
                    onPress={this.onPress}
                    title={"退出"}/>
            </View>
        )
    }
}