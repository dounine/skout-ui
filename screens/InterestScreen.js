import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default class InterestScreen extends Component{

    static navigationOptions = {
        header: null,
        tabBarLabel:'摇一摇',
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
        width:24,
        height:24
    }
})