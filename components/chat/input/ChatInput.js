import React from 'react';
import {
    ScrollView,
    KeyboardAvoidingView,
    findNodeHandle,
    UIManager,
    TouchableOpacity,
    dismissKeyboard,
    Keyboard,
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import Layout from '~/constants/Layout';
import Svg from '~/icons/Svg';
import OtherFuns from './OtherFuns';
import Emoji from './Emoji';
import Emitters from '~/constants/Emitters';

function layout(ref) {
    const handle = findNodeHandle(ref);

    return new Promise((resolve) => {
        UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
            resolve({
                x,
                y,
                width,
                height,
                pageX,
                pageY
            });
        });
    });
}

const textInputHeight = 32;

export default class ChatInput extends React.Component {

    translateClick = () => {
        this.setState({
            translateClick: true
        });

        Emitters.DEM.emit(Emitters.SWITCH_TRANSLATE, 'hello guys. how are you')

        setTimeout(function () {
            this.setState({
                translateClick: false
            });
        }.bind(this), 1000);
    };

    state = {
        keyboardHeight: 0,
        inputBoxShow: false,
        openMoreFunctions: true,
        switchFun: "others",
        openEmojiFunction: false,
        inputBoxTop: Layout.window.nbarHeight - 200
    };


    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    componentWillMount() {

        this.keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardDidHide.bind(this));
    }

    _keyboardDidShow(e) {
        this.setState({
            keyboardHeight: e.endCoordinates.height,
        })
    }

    _keyboardDidHide(e) {
        this.setState({
            keyboardHeight: 0,
        })
    }


    onChangeText = (text) => {
        let value = undefined;
        if (text.trim().length !== 0) {
            value = text.trim();
        }
        this.setState({
            inputText: value
        });

    };

    openMore = () => {
        this.setState({
            switchFun:this.state.switchFun==="others"?null:"others"
        });
    };

    openEmoji = () => {
        this.setState({
            openEmojiFunction: !this.state.openEmojiFunction
        })
    };

    switchFun = () => {
        switch (this.state.switchFun) {
            case "others":
                return <OtherFuns/>
            case "picture":
                return null;
            case "camera":
                return null;
            case "emoji":
                return null;
            case "recent":
                return null;
            case "voice":
                return null;
        }
        return <View/>
    };

    render() {
        const $self = this;
        return (
            <View
                style={{
                    bottom: this.state.keyboardHeight
                }}
            >
                <KeyboardAvoidingView
                    style={styles.container}
                >
                    <View
                        style={styles.inputView}
                    >
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View
                                style={styles.inputTextView}
                            >
                                <TextInput
                                    ref="inputTextRef"
                                    onChangeText={this.onChangeText}
                                    multiline={true}
                                    numberOfLines={4}
                                    style={styles.inputText}
                                    defaultValue={""}
                                    placeholder="请输入..."
                                />
                            </View>
                        </View>
                        <View style={styles.translateView}>
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={this.translateClick}
                            >
                                <Svg icon="translate" size="24"
                                     color={this.state.translateClick ? '#425FD0' : "#646464"}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={styles.chatBottomBarView}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row'
                            }}
                        >
                            <View
                                style={{marginLeft: 8}}
                            >
                                <View
                                    style={styles.chatBottomBarViewItem}
                                >
                                    <TouchableOpacity
                                        onPress={this.openMore}
                                    >
                                        <Svg icon="addcircle" size="24"
                                             color={this.state.switchFun==='others' ? '#425FD0' : '#656565'}/>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginLeft: 6,
                                    marginRight: 6
                                }}
                            >
                                <View
                                    style={styles.chatBottomBarViewItem}
                                >
                                    <TouchableOpacity
                                        onPress={this.openEmoji}
                                    >
                                        <Svg icon="emotion" size="24" color="#656565"/>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={styles.chatBottomBarViewItem}
                                >
                                    <TouchableOpacity
                                    >
                                        <Svg icon="picture" size="24" color="#656565"/>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={styles.chatBottomBarViewItem}
                                >
                                    <TouchableOpacity
                                    >
                                        <Svg icon="recent-picture" size="24" color="#656565"/>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={styles.chatBottomBarViewItem}
                                >
                                    <TouchableOpacity
                                    >
                                        <Svg icon="camera-bar" size="24" color="#656565"/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.voiceView}>
                            <View
                                style={styles.chatBottomBarViewItem}
                            >
                                {
                                    $self.state.inputText && <Svg icon="send" size="24" color="#425FD0"/>
                                }
                                {
                                    $self.state.inputText === undefined && <Svg icon="voice" size="24" color="#656565"/>
                                }

                            </View>
                        </View>
                    </View>
                    {
                        this.switchFun()
                    }
                </KeyboardAvoidingView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F6',
        shadowOffset: {width: 0, height: -2},
        shadowColor: '#CCC',
        shadowOpacity: 0.7,
        shadowRadius: 4,
    },
    inputView: {
        marginTop: 4,
        borderTopColor: 'yellow',
        flexDirection: 'row'
    },
    translateView: {
        justifyContent: 'center',
        paddingHorizontal: 8
    },
    inputText: {
        fontSize: 14,
        paddingLeft: 8,
        backgroundColor: '#FFFFFF',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        borderRadius: 4,
        overflow: 'hidden',
        minHeight: textInputHeight,
        maxHeight: 100,
    },
    chatBottomBarView: {
        height: textInputHeight,
        flexDirection: 'row'
    },
    chatBottomBarViewItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    moreIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2
    },
    inputTextView: {
        flex: 1,
        marginLeft: 4
    },
    voiceView: {
        marginRight: 8
    }
});