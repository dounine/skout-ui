import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Svg from '~/icons/Svg';

export default class Notifications extends React.Component {

    show = () => {

    };

    render() {
        return (
            <TouchableOpacity
                onPress={this.show}
                style={{marginRight:14}}
                underlayColor={'#F4F4F4'}
            >
                <View>
                    <Svg icon="notification" size="30"/>
                    <View style={styles.notificationCount}>
                        <Text style={{color: '#FFF', fontSize: 8}}>99+</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    notificationCount: {
        width: 20,
        height: 20,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        bottom:8,
        borderRadius: 10,
        position: 'absolute'
    },
    notificationCountText: {
        color: '#FFFFFF',
        fontSize: 8
    }
});