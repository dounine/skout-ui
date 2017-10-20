import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {OpenMore} from '../../../commons/Commons';
import HeaderImage from './HeaderImage';

export default class Header extends Component {

    render() {
        return (
            <View
                style={styles.headerRow}
            >
                <View
                    style={styles.baseHeaderInfo}
                >
                    <HeaderImage/>
                </View>
                <OpenMore/>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    baseHeaderInfoBase: {
        // marginLeft: 14,
        justifyContent: 'center'
    },
    headerRow: {
        height:80,
        backgroundColor:'#FFFFFF',
        flexDirection: 'row',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        alignItems:'center'
    },
    baseHeaderInfo: {
        flex: 1,
        marginLeft:14
    },
});