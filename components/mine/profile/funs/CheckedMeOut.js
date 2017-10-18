import React, {Component} from 'react';
import {StyleSheet, Image, TouchableHighlight, View, Text} from 'react-native';
import {OpenMore} from '../../../commons/Commons';


export default class CheckedMeOut extends Component {

    render() {

        return (
            <View
                style={styles.container}
            >
                <View style={styles.containerLeft}>
                    <Image
                        style={styles.icon}
                        source={require('../../../../icons/checked.png')}
                    />
                </View>
                <View style={styles.containerRight}>
                    <View style={styles.funName}>
                        <Text>看我</Text>
                    </View>
                    <View>
                        <OpenMore/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
    },
    containerLeft:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerRight: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        alignItems: 'center',
        marginLeft:10,
    },
    funName: {
        flex: 1
    },
    icon: {
        width: 30,
        height: 30,
        backgroundColor: '#4884F4',
        borderRadius: 6
    }
})