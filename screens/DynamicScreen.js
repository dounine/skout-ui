import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default class DynamicScreen extends Component{

    static navigationOptions = {
        header: null,
        title:'动态',
        tabBarIcon: ({focused}) => {
            return (
                <Image
                    source={require('../icons/dynamic.png')}
                    style={styles.icon}
                />
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
        width:24,
        height:24
    }
})