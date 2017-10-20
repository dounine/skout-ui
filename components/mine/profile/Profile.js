import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import OpenMore from '../../commons/OpenMore';

export default class Profile extends Component {

    render() {
        return (
            <View
                style={styles.headerRow}>
                <View style={styles.headerAndUserName}>
                    <Image
                        source={require('../../../icons/header.png')}
                        style={styles.header}
                    />
                    <View
                        style={styles.usernameBox}>
                        <Text style={styles.usernameText}>Lake isMe</Text>
                        <Text style={styles.usernameTip}>查看我的资料信息.</Text>
                    </View>
                </View>

                <View>
                    <OpenMore/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        height: 72,
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    header: {//user header
        marginLeft: 10,
        width: 40,
        height: 40,
    },
    headerAndUserName: {
        flex: 1,
        flexDirection: 'row',
    },
    usernameBox: {//wrap box of user
        marginLeft: 10,
    },
    usernameText: {
        color: '#0B0B0B',
        fontSize: 16,
    },
    usernameTip: {
        fontSize: 12,
        color: '#898989',
        marginTop: 4
    },
    openMoreBox: {
        marginRight: 10
    },
    openMore: {
        width: 20,
        height: 20,
    }
});