import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import Svg from '../../icons/Svg';

class ReturnButton extends React.Component {

    onReturn = () => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <TouchableOpacity
                onPress={this.onReturn}
                style={styles.container}
            >
                <View>
                    <Svg icon="return" size="30" color="#177EFB"/>
                    {this.props.text && <Text style={{color: '#177EFB'}}>hello</Text>}
                </View>
            </TouchableOpacity>
        )
    }
}
ReturnButton.propTypes = {
    navigation:PropTypes.object.isRequired
};
export default ReturnButton;
const styles = StyleSheet.create({
    container: {
        height: 26,
        flexDirection: 'row',
        marginLeft: 2,
        alignItems: 'center',
    }
});
