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
                >2017-10-06 20:41</Text>
            </View>
        )
    }
}

// ChatTimeDivide.propTypes = {
//     value:React.PropTypes.string.isRequired
// }

export default ChatTimeDivide;

const styles = StyleSheet.create({
    chatTimeDivide: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
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