import React, {Component} from 'react';
import {StyleSheet, Image, TouchableHighlight, View, Text} from 'react-native';
import {OpenMore} from '../../../commons/Commons';
import FunStyles from './Consts';

export default class Friends extends Component {

    render() {

        return (
            <View
                style={styles.container}
            >
                <View style={styles.containerLeft}>
                    <Image
                        style={styles.icon}
                        source={require('../../../../icons/featured.png')}
                    />
                </View>
                <View style={styles.containerRight}>
                    <View style={styles.funName}>
                        <Text>显示自我</Text>
                    </View>
                    <View>
                        <OpenMore/>
                    </View>
                </View>
            </View>
        )
    }
}

const funStyles = FunStyles.clone();
funStyles.icon.backgroundColor = '#4767B6';
const styles = StyleSheet.create(funStyles);