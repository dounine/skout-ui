import React, {Component} from 'react';
import {StyleSheet, Image, TouchableHighlight, View, Text} from 'react-native';
import {OpenMore} from '../../../../commons/Commons';
import FunStyles from '../Consts';
import Svg from '../../../../../icons/Svg';


export default class Bugs extends Component {

    render() {

        return (
            <View
                style={styles.container}
            >
                <View style={styles.containerLeft}>
                    <Svg icon="bug" color="#FFFFFF" size="26" style={styles.icon}/>
                </View>
                <View style={styles.containerRight}>
                    <View style={styles.funName}>
                        <Text>Bugs</Text>
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
funStyles.icon.backgroundColor = '#4B5357';
const styles = StyleSheet.create(funStyles);