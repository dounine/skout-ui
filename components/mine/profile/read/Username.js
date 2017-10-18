import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {OpenMore} from '../../../commons/Commons';

export default class Username extends Component{

    render(){
        return(
            <View
                style={styles.headerRow}
            >
                <View style={styles.genderLeft}>
                    <Text>用户名</Text>
                </View>
                <View style={styles.genderRight}>
                    <Text style={styles.genderText}>Lake isme</Text>
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
        height: 50,
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    genderLeft:{
        flex:1
    },
    genderRight:{
        flexDirection:'row',
    },
    genderText:{
        color:'#989898',
    }
})