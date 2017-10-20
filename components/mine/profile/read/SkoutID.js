import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {OpenMore} from '../../../commons/Commons';
import ReadStyle from './Consts';

export default class SkoutID extends Component{

    render(){
        return(
            <View
                style={styles.headerRow}
            >
                <View style={styles.genderLeft}>
                    <Text>SkoutID</Text>
                </View>
                <View style={styles.genderRight}>
                    <Text style={styles.genderText}>lake201314</Text>
                    <OpenMore/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(ReadStyle);