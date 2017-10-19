import React, {Component} from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import Svg from '../icons/Svg';
import Notification from '../components/chat/Notification';
import Messages from '../components/chat/Messages';


export default class ChatScreen extends Component {

    static navigationOptions = {
        // header: null,
        tabBarLabel: '聊天',
        headerRight: (<Notification/>),
        tabBarIcon: ({tintColor}) => {
            return (
                <Svg icon="chat" size="26" color="#929292" style={styles.icon}/>
            )
        }
    };

    render() {
        return (
            <Messages />
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