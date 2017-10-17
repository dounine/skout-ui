import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default class MeetScreen extends Component{

    static navigationOptions = {
        header: null,
        title:'遇见',
        tabBarIcon: ({focused}) => {
            return (
                <Image
                    source={require('../icons/meet.png')}
                    style={styles.icon}
                />
            )
        }
    };

    render(){
        return (
            <View style={styles.container}>
                <Text>this is meet page</Text>
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