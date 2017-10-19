import React, {Component} from 'react';
import {StyleSheet, Image, TouchableHighlight, View, Text} from 'react-native';
import {OpenMore} from '../../../commons/Commons';
import FunStyles from './Consts';
import Svg from '../../../../icons/Svg';

export default class Popularity extends Component {

    render() {

        return (
            <View
                style={styles.container}
            >
                <View style={styles.containerLeft}>
                    <Svg icon="popularity" color="#FFFFFF" size="26" style={styles.icon}/>
                </View>
                <View style={styles.containerRight}>
                    <View style={styles.funName}>
                        <Text>排行榜</Text>
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
funStyles.icon.backgroundColor = '#F75266';
const styles = StyleSheet.create(funStyles);
