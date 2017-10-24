import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {OpenMore} from '~/components/commons/Commons';
import ReadStyle from './Consts';

export default class RelationshipStatus extends Component{

    render(){
        return(
            <View
                style={styles.headerRow}
            >
                <View style={styles.genderLeft}>
                    <Text>感情状态</Text>
                </View>
                <View style={styles.genderRight}>
                    <Text style={styles.genderText}>单身</Text>
                    <OpenMore/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create(ReadStyle);