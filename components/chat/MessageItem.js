import React from 'react';
import {TouchableHighlight, StyleSheet, ImageBackground, View, Text, Image} from 'react-native';
import Swipeout from 'react-native-swipeout';
import Svg from '~/icons/Svg';
import Layout from '~/constants/Layout';

const swipeoutBtns = [
    {
        text: '删除',
        type: 'delete',
        onPress: function () {

        }
    }
];

export default class MessageItem extends React.Component {

    onOpen = () => {
        this.props.navigation.navigate('MessageChat')
    };

    componentDidMount = () =>{
        // alert(this.props.screenProps==null)
    }

    render() {

        return (
            <View

            >
                <Swipeout
                    style={{backgroundColor: '#FFFFFF',
                    }}
                    right={swipeoutBtns}
                >
                    <TouchableHighlight
                        underlayColor={'#000000'}
                        onPress={this.onOpen}
                    >
                        <View style={styles.messageListBox}>
                            <View style={styles.messageListDivide}></View>
                            <View style={styles.messageList}>
                                <View>
                                    <View>
                                        <ImageBackground
                                            source={require('../../test-img/WechatIMG.jpeg')}
                                            style={styles.messageHeader}
                                        >
                                        </ImageBackground>

                                        <Svg icon="point" size="18" style={styles.online}></Svg>
                                    </View>
                                </View>
                                <View style={styles.usernameAndMessage}>
                                    <View>
                                        <Text style={styles.usernameText}>Alexandre</Text>
                                    </View>
                                    <View>
                                        <Text
                                            numberOfLines={1}
                                            style={styles.messageText}>how's ur morning
                                            cocoasdfadsfasfasdfasdfasdfasdfasdfasdfasdfsf</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.messageTimeBox}>
                                        <Text style={styles.messageTime}>1m</Text>
                                    </View>
                                    <View style={styles.messageCountBox}>
                                        <Text style={styles.messageCountText}>20</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </TouchableHighlight>
                </Swipeout>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    messageListBox: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    },
    messageListDivide: {
        width: 14
    },
    messageList: {
        backgroundColor: '#FFFFFF',
        height: 70,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    messageHeader: {
        // marginLeft: 14,
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden'
    },
    online: {
        width: 18,
        height: 18,
        position: 'absolute',
        right: -2,
        top: -2,
    },
    usernameAndMessage: {
        flex: 1,
        marginLeft: 10,
        flexDirection: 'column'
    },
    usernameText: {
        height: 26,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    messageText: {
        color: '#A8A8A8',
        marginRight:6
    },
    messageTime: {
        marginRight: 10,
        color: '#B5B5B5'
    },
    messageTimeBox: {
        marginBottom: 12
    },
    messageCountBox: {},
    messageCountText: {
        marginLeft: 2,
        color: '#9cf',
        fontSize: 12,
        justifyContent: 'center',
        // alignItems:'center'
    }
});