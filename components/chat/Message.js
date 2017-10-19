import React from 'react';
import {TouchableHighlight,StyleSheet, ImageBackground, View, Text, Image} from 'react-native';
import Swipeout from 'react-native-swipeout';
import Svg from '../../icons/Svg';
import Layout from '../../constants/Layout';

const swipeoutBtns = [
    {
        text: '删除',
        type: 'delete',
        onPress: function () {

        }
    }
]

export default class Message extends React.Component {

    onOpen = () =>{

    }

    render() {

        return (
            <View

            >
                <Swipeout
                    style={{backgroundColor:'#FFFFFF'}}
                    right={swipeoutBtns}
                >
                    <TouchableHighlight
                        underlayColor={'#E0E0E0'}
                        onPress={this.onOpen}
                        >
                        <View style={styles.messageList}>
                            <View>
                                <ImageBackground
                                    source={require('../../test-img/WechatIMG.jpeg')}
                                    style={styles.messageHeader}
                                >
                                </ImageBackground>

                                <Svg icon="point" size="18" style={styles.online}></Svg>
                            </View>
                            <View
                                style={styles.divide}
                            ></View>
                        </View>
                    </TouchableHighlight>
                </Swipeout>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    messageList: {
        backgroundColor: '#FFFFFF',
        height: 70,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth:1,
        marginLeft:14,
        borderBottomColor:'#E0E0E0'
    },
    messageHeader: {
        // marginLeft: 14,
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden'
    },
    online:{
        width:18,
        height:18,
        position:'absolute',
        right:-2,
        top:-2,
    }
})