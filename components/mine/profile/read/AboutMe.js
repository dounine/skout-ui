import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {OpenMore} from '../../../commons/Commons';

export default class AboutMe extends Component {

    render() {
        return (
            <View
                style={styles.headerRow}
            >
                <View style={styles.genderLeft}>
                    {/*<View>*/}
                        {/*<Text style={styles.aboutMeText}>关于我:</Text>*/}
                    {/*</View>*/}
                    <View>
                        <Text
                            numberOfLines={2}
                            style={styles.aboutMeContentText}>你是一个好人，哈哈,你是一个好人，哈哈,你是一个好人，哈哈,你是一个好人，哈哈,你是一个好人，哈哈,你是一个好人，哈哈。</Text>
                    </View>
                </View>
                <View style={styles.genderRight}>
                    <OpenMore/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        height: 54,
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
    },
    genderLeft: {
        flex: 1
    },
    genderRight: {
        flexDirection: 'row',
        alignItems:'center'
    },
    genderText: {
        color: '#989898',
    },
    aboutMeText: {
        marginTop: 10,
        marginLeft: 10,
        color:'#EE1289',
        fontSize: 14
    },
    aboutMeContentText: {
        fontSize:16,
        marginTop:6,
        marginLeft:10,
        marginRight:10,
        color:'#585858'
        // margin: 10
    }
})