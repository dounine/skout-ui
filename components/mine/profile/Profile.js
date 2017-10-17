import React, {Component} from 'react';
import {ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';

export default class Profile extends Component {

    static navigationOptions = {
        // header:null
    }

    render() {
        return (
            <View style={styles.headerRow}>
                <View>
                    <Image
                        source={require('../../../icons/header.png')}
                        style={styles.header}
                    />
                </View>
                <View
                    style={styles.usernameBox}
                >
                    <Text style={styles.usernameText}>Lake isMe</Text>
                    <Text style={styles.usernameTip}>查看你的资料信息.</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        backgroundColor:'#FFFFFF',
        padding: 8,
        borderBottomColor:'#E0E0E0',
        borderBottomWidth:1
    },
    header: {//user header
        width: 40,
        height: 40,
    },
    usernameBox: {//wrap box of user
        marginLeft: 10,
    },
    usernameText:{
        color:'#0B0B0B',
        fontSize:16,
        // fontWeight:'bold',
    },
    usernameTip:{
        fontSize:12,
        color:'#898989',
        marginTop:4
    }
})