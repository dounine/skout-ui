import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import Svg from '../../../icons/Svg';

class Settings extends React.Component {

    openProfile = () => {
        this.props.navigation.navigate('Profile')
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.openProfile}
                style={styles.icon}
            >
                <View>
                    <Svg icon="chat-settings" size="30" color="#626262"/>
                </View>
            </TouchableOpacity>
        )
    }
}
Settings.propTypes = {
    navigation:PropTypes.object.isRequired
};
const styles = StyleSheet.create({
    icon: {
        marginRight: 10,
    }
});

export default Settings;
