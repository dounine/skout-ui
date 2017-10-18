import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import HeaderImage from './header/HeaderImage';
import {OpenMore} from '../../commons/Commons';
import Gender from './Gender';
import SkoutID from './SkoutID';

export default class Info extends Component {

    static navigationOptions = {
        // header:null
    };


    render() {
        return (
            <ScrollView
                style={styles.scrollView}
            >
                <View style={styles.baseInfoBox}>
                    <View
                        style={styles.baseInfo}
                    >
                        <HeaderImage/>
                        <View style={styles.baseInfoBase}>
                            <Text style={styles.username}>Lake isme</Text>
                        </View>
                    </View>
                    <View>
                        <OpenMore/>
                    </View>
                </View>
                <View style={{marginLeft:14}}>
                    <View>
                        <Gender/>
                    </View>
                    <View>
                        <SkoutID/>
                    </View>
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#FFFFFF',
    },
    baseInfoBox: {
        flexDirection: 'row',
        height: 90,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        alignItems: 'center'
    },
    baseInfo: {
        flex: 1,
        marginLeft: 14,
        flexDirection: 'row'
    },
    baseInfoBase: {
        marginLeft: 14,
        justifyContent: 'center'
    },
    username: {
        fontWeight: "700",
        fontSize: 14,
    },
    openMoreBox: {
        marginRight: 10
    },
    openMore: {
        width: 20,
        height: 20,
    }
})