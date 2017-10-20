import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import Svg from '../../../icons/Svg';


export default class They extends React.Component{

    render(){
        return (
            <View
                style={styles.theyAreBoxView}>
                <View
                    style={styles.theyAreHandView}>
                    <Image
                        source={require('../../../test-img/Wechat1.jpeg')}
                        style={styles.theyAreHandImage}
                    ></Image>
                </View>
                <View style={styles.theyAreMsgView}>
                    <View style={styles.theyAreMsgContentView}>
                        <View
                            style={{flex: 1, flexDirection: 'row'}}
                        >
                            <Text
                                style={styles.theyAreMsgContent}
                            >
                                Hi,Guysaasdfasdfasdfasfasfsdfasdfasfdasdfasdfasdfasdfasdfasdfasfd
                                Hi,Guysasdfasdf
                                Hi,Guysasdfasdf
                            </Text>
                        </View>
                        <View>
                            <View
                                style={styles.translateViewDivide}
                            >
                            </View>
                            <View style={styles.translateView}>
                                <Text style={styles.translateViewText}>
                                    这是翻译后的结果
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={styles.theyAreMsgIconView}
                    >
                        <Svg icon="back" size="20" style={styles.coverIcon}/>
                    </View>
                </View>
            </View>
        )
    }
}

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
    theyAreBoxView: {
        flex: 1,
        backgroundColor: '#F7F7FB',
        flexDirection: 'row'
    },
    theyAreHandView: {
        marginLeft: 10
    },
    theyAreHandImage: {
        width: 30,
        height: 30,
        borderRadius: 4
    },
    theyAreMsgView: {
        flex: 1,
        flexDirection: 'row',
    },
    theyAreMsgContentView: {
        maxWidth: 290,
        padding: 8,
        backgroundColor: '#FFFFFF',
        borderColor: '#EFEFF1',
        borderRadius: 4,
        marginLeft: 10,
        borderWidth: 1,
        flexDirection: 'column'
    },
    theyAreMsgContent: {},
    theyAreMsgIconView: {
        flex: 1,
        marginLeft: 2,
        marginRight: 2,
        justifyContent: 'center',

    },
    coverIcon: {
        width: 26,
        height: 26,
        backgroundColor: '#C6C6C9',
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 4
    },
    translateViewDivide: {
        height: 1,
        backgroundColor: '#F0F0F0',
        marginTop: 10,
        marginBottom: 10
    },
    translateView: {
        flex: 1,
    },
    translateViewText: {
        fontSize: 14
    }
})