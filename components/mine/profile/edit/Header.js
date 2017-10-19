import React, {Component} from 'react';
import {
    TouchableHighlight,
    ScrollView,
    StyleSheet,
    Picker,
    View,
    ImageBackground,
    Image,
    Button,
    Text,
    TextInput
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import Svg from '../../../../icons/Svg';
import ImagePicker from 'react-native-image-picker';

class Save extends Component {

    save = () => {
        alert()
    }

    render() {
        return (
            <Button
                onPress={this.save}
                title={"保存"}>

            </Button>
        )
    }
}

var swipeoutBtns = [
    {
        text: '顶置',
        type: 'primary'
    },
    {
        text: '删除',
        type: 'delete',
        onPress: function () {

        }
    }
]
class RowComponent extends React.Component {


    render() {
        return (
            <TouchableHighlight
                underlayColor={'#eee'}
                style={{
                    backgroundColor: '#F8F8F8',
                    borderBottomWidth: 1,
                    borderColor: '#eee',
                }}
            >
                <View>
                    <Swipeout
                        right={swipeoutBtns}
                    >
                        <View style={styles.headerList}>
                            <View style={{flex: 1}}>
                                <ImageBackground
                                    style={styles.headerSize}
                                    source={
                                        require('../../../../test-img/WechatIMG.jpeg')
                                    }

                                >
                                    <Svg icon="show" size="30" color="#FFFFFF" style={styles.mainImg}/>
                                </ImageBackground>
                            </View>
                            <View style={styles.read}>
                                <Svg icon="read" size="20" color="#777777"/>
                                <Text>1w</Text>
                            </View>
                        </View>
                    </Swipeout>
                </View>
            </TouchableHighlight>
        )
    }
}

export default class Header extends Component {

    static navigationOptions = {
        headerRight: (<Save/>),
        title: '设置头像'
    };

    launchImageLibrary = () => {
        var options = {
            title: 'Select Avatar',
            customButtons: [
                {name: 'fb', title: 'Choose Photo from Facebook'},
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.launchImageLibrary(options, (response)  => {
            // Same code as in above section!
        });
    }

    launchCamera = () => {
        var options = {
            title: 'Select Avatar',
        };
        ImagePicker.launchCamera(options, (response)  => {
            // Same code as in above section!
        });
    }

    constructor() {
        super()
        this.state = {
            text: '我是人'
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.uploadBox}>
                    <View style={styles.photoCount}>
                        <Text style={{color:'#515151'}}>您总共有<Text style={styles.countNumber}>{'20'}</Text>张照片</Text>
                    </View>
                    <View style={styles.upload}>
                        <TouchableHighlight
                            underlayColor="#E0E0E0"
                            onPress={this.launchImageLibrary}
                            style={{marginRight: 20}}
                        >
                            <View>
                                <Svg icon="add" size="30" color="#9cf" style={styles.uploadIcon}/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="#E0E0E0"
                            style={{marginRight: 20}}
                            onPress={this.launchCamera}
                        >
                            <View>
                                <Svg icon="camera" size="30" color="#9cf" style={styles.uploadIcon}/>
                            </View>
                        </TouchableHighlight>
                    </View>

                </View>
                <ScrollView
                >
                    <RowComponent/>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerList: {
        height: 100,
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerSize: {
        marginLeft: 14,
        height: 80,
        width: 80
    },
    uploadBox: {
        height: 40,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        flexDirection: 'row'
    },
    photoCount: {
        flex: 1,
        justifyContent: 'center',
        marginLeft:10
    },
    countNumber: {
        color: '#9cf',
        fontWeight: '700'
    },
    upload: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    uploadIcon: {
        width: 30,
        height: 30,
    },
    read: {
        marginRight: 20,
    },
    mainImg: {
        width: 30,
        height: 30,
        marginLeft: 50,
        marginTop: 54
    }
})

