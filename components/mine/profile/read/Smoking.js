import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {OpenMore} from '~/components/commons/Commons';
import ReadStyle from './Consts';

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
const readStyle = ReadStyle.clone();
delete readStyle.headerRow.borderBottomColor;
delete readStyle.headerRow.borderBottomWidth;
const styles = StyleSheet.create(readStyle);