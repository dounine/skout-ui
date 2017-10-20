import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

class ChatTimeDivide extends React.Component{

    render(){
        return (
            <View style={
                styles.chatTimeDivide
            }>
                <Text
                    style={styles.chatTimeText}
                >{this.props.value}</Text>
            </View>
        )
    }
}

ChatTimeDivide.propTypes = {
    value:PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    chatTimeDivide: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:10,
        marginBottom:10
    },
    chatTimeText: {
        backgroundColor: '#ACACAF',
        color: '#FDFDFD',
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 12,
        borderRadius: 9,
        overflow: 'hidden'
    },
});

export default ChatTimeDivide;
