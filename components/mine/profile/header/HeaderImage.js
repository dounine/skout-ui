import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';

export default class HeaderImage extends Component {

    render() {
        return (
            <Image
                style={styles.actor}
                source={require('../../../../test-img/WechatIMG.jpeg')}
            ></Image>
        )
    }
}

const headerSize = 60;

const styles = StyleSheet.create({
    actor:{
        width:headerSize,
        height:headerSize,
        borderRadius:headerSize/2,
        borderColor:'#9cf',
        borderWidth:2,
    }
});