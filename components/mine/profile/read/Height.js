import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {OpenMore} from '../../../commons/Commons';
import ReadStyle from './Consts';

export default class Height extends Component{

    render(){
        return(
            <View
                style={styles.headerRow}
            >
                <View style={styles.genderLeft}>
                    <Text>身高</Text>
                </View>
                <View style={styles.genderRight}>
                    <Text style={styles.genderText}>170cm</Text>
                    {/*<OpenMore/>*/}
                </View>
            </View>
        )
    }
}
const readStyle = ReadStyle.clone();
readStyle.genderRight.marginRight = 24
const styles = StyleSheet.create(readStyle)