import React, {Component} from 'react';
import {TouchableHighlight,Picker, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {OpenMore} from '../../../commons/Commons';
import ReadStyle from './Consts';

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

const readStyle = ReadStyle.clone()
delete readStyle.headerRow.borderBottomColor
delete readStyle.headerRow.borderBottomWidth
readStyle.genderRight.marginRight = 24
const styles = StyleSheet.create(readStyle)