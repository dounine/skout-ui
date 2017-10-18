import React, {Component} from 'react';
import {TouchableHighlight,Picker, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {OpenMore} from '../../../commons/Commons';

export default class Gender extends Component{

    constructor(){
        super();
        this.state = {
            language:'Java'
        }
    }

    render(){
        return(
            <View
                style={styles.headerRow}
            >
                <View style={styles.genderLeft}>
                    <Text>性别</Text>
                </View>
                <View style={styles.genderRight}>
                    <Text style={styles.genderText}>男</Text>
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
        marginRight:24,
        color:'#989898',
    }
})