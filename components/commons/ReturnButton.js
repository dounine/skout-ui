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
                <View
                    style={styles.returnView}
                >
                    <View>
                        <Svg icon="return" size="30" style={styles.icon} color="#177EFB"/>
                    </View>
                    <View>
                        {this.props.text && <Text style={styles.returnText}>{this.props.text}</Text>}
                    </View>
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
    },
    icon:{
        width:26,
        height:30,
    },
    returnView:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    returnText:{
        fontSize:17,
        color: '#177EFB'
    }
});
