import React from 'react';
import {StackNavigator} from 'react-navigation';
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import Svg from '../../icons/Svg';
import TheyMsg from './msg/They';
import MineMsg from './msg/Mine';
import TimeDivide from './msg/ChatTimeDivide';


export default class MessageContainer extends React.Component {

    static navigationOptions = {
        title: 'hello'
    };

    render() {
        return (
            <ScrollView
                style={{backgroundColor:'#F7F7FB'}}
            >
                <TheyMsg/>
                <MineMsg />
                <TimeDivide value="2017-02-10 10:10"/>
            </ScrollView>
        )
    }
}