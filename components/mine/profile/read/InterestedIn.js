import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {OpenMore} from '../../../commons/Commons';
import ReadStyle from './Consts';

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
const readStyle = ReadStyle.clone();
readStyle.genderRight.marginRight = 24;
const styles = StyleSheet.create(readStyle);