import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {OpenMore} from '~/components/commons/Commons';
import ReadStyle from './Consts';

export default class HasChildren extends Component{

    render(){
        return(
            <View
                style={styles.headerRow}
            >
                <View style={styles.genderLeft}>
                    <Text>是否有孩子</Text>
                </View>
                <View style={styles.genderRight}>
                    <Text style={styles.genderText}>没有</Text>
                    <OpenMore/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create(ReadStyle);