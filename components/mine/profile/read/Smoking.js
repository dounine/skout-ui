import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {OpenMore} from '../../../commons/Commons';

export default class Smoking extends Component{

    render(){
        return(
            <View
                style={styles.headerRow}
            >
                <View style={styles.genderLeft}>
                    <Text>吸烟</Text>
                </View>
                <View style={styles.genderRight}>
                    <Text style={styles.genderText}>从来没有</Text>
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
        borderBottomWidth: 0,
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