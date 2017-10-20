import React, {Component} from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import Svg from '../icons/Svg';

import MessageContainer from '../components/chat/MessageNav';
import {StackNavigator} from 'react-navigation';

export default class ChatScreen extends Component {

    static navigationOptions = {
        header: null,
        // title: '聊天',
        tabBarIcon: ({tintColor}) => {
            return (
                <Svg icon="chat" size="26" color="#929292" style={styles.icon}/>
            )
        }
    };

    render() {
        return (
            <MessageContainer />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 30,
        height: 30,
    }
})