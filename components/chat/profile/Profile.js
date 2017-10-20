import React from 'react';
import {Switch,View,ScrollView,Text} from 'react-native';
import Svg from '../../../icons/Svg';
import ReturnButton from '../../commons/ReturnButton';

export default class Profile extends React.Component{

    static navigationOptions = ({navigation}) =>({
        headerTitle: '聊天设置',
        headerLeft: (<ReturnButton navigation={navigation}/>)
    });

    render(){

        return (
            <ScrollView>

            </ScrollView>
        )
    }
}