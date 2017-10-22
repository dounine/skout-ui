import React from 'react';
import {
    ScrollView,
    KeyboardAvoidingView,
    findNodeHandle,
    UIManager,
    TouchableOpacity,
    DeviceEventEmitter,
    dismissKeyboard,
    Keyboard,
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import Layout from '../../../constants/Layout';
import Svg from '../../../icons/Svg';

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

const navBarHeight = 68;
const textInputViewHeight = 64;
const textInputHeight = 32;
let textInputLayoutHeightPrev = 0;
const isDevModule = false;

export default class ChatInput extends React.Component {

    translateClick = () => {

    };

    state = {
        keyboardHeight: 0,
        inputBoxShow: false,
        openMoreFunctions: true,
        inputBoxTop: Layout.window.nbarHeight-200
    };


    changeInputBoxTop($self, topDistanceInputHeight, showMoreFuns) {

    }


    componentDidMount() {
        let $self = this;
        setTimeout(function () {
            layout($self.refs.inputBox).then(function (result) {
                let inputBoxViewHeight = result.height;
                $self.setState({
                    inputBoxViewHeight,
                    inputBoxTop: Layout.window.nbarHeight - inputBoxViewHeight
                });
                setTimeout(function () {
                    $self.setState({
                        inputBoxShow: true,//first show
                    })
                })
            });
            layout($self.refs.openMoreView).then(function (result) {
                let openMoreViewHeight = result.height;
                $self.setState({
                    openMoreViewHeight
                });
            });
        });
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
        this.textInputLayoutChange.remove();
    }

    componentWillMount() {

        this.keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardDidHide.bind(this));
    }

    _keyboardDidShow(e) {
        this.setState({
            keyboardHeight: e.endCoordinates.height,
            inputBoxTop: Layout.window.nbarHeight - this.state.inputBoxViewHeight - e.endCoordinates.height + (this.state.openMoreFunctions===false?this.state.openMoreViewHeight:0)
        })
    }

    _keyboardDidHide(e) {
        this.setState({
            keyboardHeight: 0,
            inputBoxTop: Layout.window.nbarHeight - this.state.inputBoxViewHeight + (this.state.openMoreFunctions===false?this.state.openMoreViewHeight:0)
        })
    }

    checkTextInputDithering(viewHeight) {
        if (textInputLayoutHeightPrev === 0) {
            textInputLayoutHeightPrev = viewHeight;
            return false
        }
        if (viewHeight === textInputLayoutHeightPrev) {
            return false
        } else {
            textInputLayoutHeightPrev = viewHeight;
        }
        if (viewHeight > textInputLayoutHeightPrev) {
            if (viewHeight - textInputLayoutHeightPrev < 9) {
                return false
            }
        } else if (viewHeight < textInputLayoutHeightPrev) {
            if (viewHeight - textInputLayoutHeightPrev > 9) {
                return false
            }
        }
        return true;
    };

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
        let $self = this;

        if ($self.state.openMoreFunctions === false) {//open funs
            layout($self.refs.inputBox).then(function (result) {
                let inputBoxViewHeight = result.height;
                $self.setState({
                    inputBoxViewHeight,
                    openMoreFunctions: true,
                    inputBoxTop: Layout.window.nbarHeight - inputBoxViewHeight
                })
            });
        } else {//close funs
            $self.setState({
                openMoreFunctions: false,
                inputBoxTop: Layout.window.nbarHeight -  this.state.inputBoxViewHeight + (this.state.openMoreFunctions?this.state.openMoreViewHeight:0)
            })
        }
    };

    inputBoxOnLayout = (event) => {
        //keyboard type text have change view height
        let inputBoxViewHeight = event.nativeEvent.layout.height;
        if (this.checkTextInputDithering(inputBoxViewHeight)) {
            this.setState({
                inputBoxViewHeight,
                inputBoxTop: Layout.window.nbarHeight - inputBoxViewHeight - this.state.keyboardHeight  + (this.state.openMoreFunctions===false?this.state.openMoreViewHeight:0)
            })
        }
    };

    testBlur(){
        this.refs.inputTextRef.blur();
    }

    render() {
        const $self = this;
        return (
            <KeyboardAvoidingView
                behavior="padding"
                ref="inputBox"
                fixDoubleTapIssue={true}
                onLayout={this.inputBoxOnLayout}
                style={[styles.container, {
                    opacity: this.state.inputBoxShow ? 1 : 0,
                    top: isDevModule ? 100 : this.state.inputBoxTop
                }]}
            >
                <View
                    style={styles.inputView}
                >
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <ScrollView
                            keyboardShouldPersistTaps="handled"
                            style={styles.inputTextView}
                        >
                            <TextInput
                                ref="inputTextRef"
                                onChangeText={this.onChangeText}
                                multiline={true}
                                numberOfLines={4}
                                style={styles.inputText}
                                placeholder="请输入..."
                            />
                        </ScrollView>
                    </View>
                    <View style={styles.translateView}>
                        <TouchableOpacity
                            onPress={this.translateClick}
                        >
                            <Svg icon="translate" size="24" color="#646464"/>
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
                                    <Svg icon="addcircle" size="24" color="#656565"/>
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
                <View ref="openMoreView" style={[styles.moreView, {opacity: this.state.openMoreFunctions ? 1 : 0}]}>
                    <View
                        style={styles.moreViewRow}
                    >
                        <View style={styles.moreViewRowItem}>
                            <View style={styles.moreViewRowItemIcon}>
                                <Svg icon="chat" size="34" color="#626262"/>
                            </View>
                            <View style={styles.moreViewRowItemTextView}>
                                <Text style={styles.moreViewRowItemText}>通话</Text>
                            </View>
                        </View>
                        <View style={styles.moreViewRowItem}>
                            <View style={styles.moreViewRowItemIcon}>
                                <Svg icon="chat" size="34" color="#626262"/>
                            </View>
                            <View style={styles.moreViewRowItemTextView}>
                                <Text style={styles.moreViewRowItemText}>通话功能</Text>
                            </View>
                        </View>
                        <View style={styles.moreViewRowItem}>
                            <View style={styles.moreViewRowItemIcon}>
                                <Svg icon="chat" size="34" color="#626262"/>
                            </View>
                            <View style={styles.moreViewRowItemTextView}>
                                <Text style={styles.moreViewRowItemText}>通话功能</Text>
                            </View>
                        </View>
                        <View style={styles.moreViewRowItem}>
                            <View style={styles.moreViewRowItemIcon}>
                                <Svg icon="chat" size="34" color="#626262"/>
                            </View>
                            <View style={styles.moreViewRowItemTextView}>
                                <Text style={styles.moreViewRowItemText}>通话功能</Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={styles.moreViewRow}
                    >
                        <View style={styles.moreViewRowItem}>
                            <View style={styles.moreViewRowItemIcon}>
                                <Svg icon="chat" size="34" color="#626262"/>
                            </View>
                            <View style={styles.moreViewRowItemTextView}>
                                <Text style={styles.moreViewRowItemText}>通话</Text>
                            </View>
                        </View>
                        <View style={styles.moreViewRowItem}>
                            <View style={styles.moreViewRowItemIcon}>
                                <Svg icon="chat" size="34" color="#626262"/>
                            </View>
                            <View style={styles.moreViewRowItemTextView}>
                                <Text style={styles.moreViewRowItemText}>通话功能</Text>
                            </View>
                        </View>
                        <View style={styles.moreViewRowItem}>
                            <View style={styles.moreViewRowItemIcon}>
                                <Svg icon="chat" size="34" color="#626262"/>
                            </View>
                            <View style={styles.moreViewRowItemTextView}>
                                <Text style={styles.moreViewRowItemText}>通话功能</Text>
                            </View>
                        </View>
                        <View style={styles.moreViewRowItem}></View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 70,
        position: 'absolute',
        backgroundColor: '#F5F5F6',
        width: Layout.window.width,
        // top:Layout.window.height-130,
        // top: Layout.window.height - 64,
        left: 0,
        shadowOffset: {width: 0, height: -2},
        shadowColor: '#CCC',
        shadowOpacity: 0.7,
        shadowRadius: 4,
    },
    inputView: {
        flex: 1,
        marginTop: 4,
        borderTopColor: 'yellow',
        flexDirection: 'row'
    },
    translateView: {
        justifyContent: 'center',
        paddingLeft: 8,
        paddingRight: 8,
    },
    inputText: {
        flex: 1,
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
        flex: 1,
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
        marginLeft: 2,
        marginRight: 2
    },
    inputTextView: {
        flex: 1,
        marginLeft: 4
    },
    voiceView: {
        marginRight: 8
    },
    moreView: {
        flex: 1,
        borderTopColor: '#CCC',
        borderTopWidth: 1,
        flexDirection: 'column',
        paddingBottom: 10
    },
    moreViewRow: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
    },
    moreViewRowItem: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    moreViewRowItemIcon: {
        // marginTop:10,
    },
    moreViewRowItemTextView: {
        marginTop: 2,
    },
    moreViewRowItemText: {
        fontSize: 12,
        color: '#787878'
    }
});