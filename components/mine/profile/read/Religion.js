import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {OpenMore} from '../../../commons/Commons';
import ReadStyle from './Consts';

export default class Religion extends Component{

    render(){
        return(
            <View
                style={styles.headerRow}
            >
                <View style={styles.genderLeft}>
                    <Text>宗教</Text>
                </View>
                <View style={styles.genderRight}>
                    <Text style={styles.genderText}>无</Text>
                    <OpenMore/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(ReadStyle);