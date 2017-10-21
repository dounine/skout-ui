import React from 'react';
import {
    findNodeHandle,
    UIManager,
    TouchableOpacity,
    DeviceEventEmitter,
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

export default class ChatInput extends React.Component {

    translateClick = () => {

    };

    state = {
        keyboardHeight: 0,
        inputBoxTop: Layout.window.height - textInputViewHeight - navBarHeight
    };

    componentDidMount() {
        let $self = this;
        layout($self.refs.inputTextRef).then(function (result) {
            $self.setState({
                inputTextViewLayoutHeight: result.height
            })
        });

        this.textInputLayoutChange = DeviceEventEmitter.addListener('textInputLayoutChange', function (result) {
            console.log(result)
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
            inputBoxTop: Layout.window.height - textInputViewHeight - navBarHeight - e.endCoordinates.height
        })
    }

    _keyboardDidHide(e) {
        this.setState({
            keyboardHeight: 0,
            inputBoxTop: Layout.window.height - textInputViewHeight - navBarHeight
        })
    }

    checkTextInputDithering(viewHeight) {
        if (textInputLayoutHeightPrev === 0) {
            textInputLayoutHeightPrev = viewHeight;
            return false
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
        if(text.trim().length!==0){
            value = text.trim();
        }
        this.setState({
            inputText: value
        });

    };

    inputOnLayout = (event) => {
        //keyboard type text have change view height
        // var viewWidth = event.nativeEvent.layout.width;
        var viewHeight = event.nativeEvent.layout.height;

        if (this.checkTextInputDithering(viewHeight)) {
            this.setState({
                inputBoxTop: Layout.window.height - textInputHeight - navBarHeight - this.state.keyboardHeight - viewHeight
            })
        }
    };

    render() {
        const $self = this;
        return (
            <View
                ref="inputBox"
                style={[styles.container, {top: this.state.inputBoxTop}]}
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
                                onLayout={this.inputOnLayout}
                                onChangeText={this.onChangeText}
                                multiline={true}
                                numberOfLines={4}
                                style={[styles.inputText]}
                                placeholder="请输入..."
                            />
                        </View>
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
                                $self.state.inputText===undefined && <Svg icon="voice" size="24" color="#656565"/>
                            }

                        </View>
                    </View>

                </View>
            </View>
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
    }
});