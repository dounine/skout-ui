import React from 'react';
import {View, Text, StyleSheet,TextInput} from 'react-native';

export default class ChatInput extends React.Component {
    render() {

        return (
            <View
                style={styles.container}
            >
                <View
                style={styles.inputView}
                >

                </View>
                <View
                    style={styles.chatBottomBarView}
                >

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {},
    inputView:{
        backgroundColor:'#9cf'
    },
    chatBottomBarView:{
        backgroundColor:'#CCC'
    }
});