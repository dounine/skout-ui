import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {OpenMore} from '../../../commons/Commons';
import ReadStyle from './Consts';

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

const styles = StyleSheet.create(ReadStyle);