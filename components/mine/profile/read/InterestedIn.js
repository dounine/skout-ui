import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {OpenMore} from '../../../commons/Commons';

export default class InterestedIn extends Component{

    render(){
        return(
            <View
                style={styles.headerRow}
            >
                <View style={styles.genderLeft}>
                    <Text>感兴趣的人</Text>
                </View>
                <View style={styles.genderRight}>
                    <Text style={styles.genderText}>女人</Text>
                    {/*<OpenMore/>*/}
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
        marginRight:24,
        color:'#989898',
    }
})