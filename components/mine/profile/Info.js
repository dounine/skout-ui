import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import HeaderImage from './header/HeaderImage';
import {OpenMore} from '../../commons/Commons';
import {AboutMe,BodyType,Education,Ethnicity,Gender,HasChildren,Height,InterestedIn,Interests,LookingFor,RelationshipStatus,Religion,SkoutID,Smoking,Username} from './read/Readers';


export default class Info extends Component {

    static navigationOptions = {
        // header:null
    };

    genderPress = (name) => {
        this.props.navigation.navigate(name)
    };


    render() {
        return (
            <ScrollView
                style={styles.scrollView}
            >
                <View style={styles.baseHeaderBox}>
                    <View
                        style={styles.baseHeaderInfo}
                    >
                        <HeaderImage/>
                        <View style={styles.baseHeaderInfoBase}>
                            <Text style={styles.username}>Lake isme</Text>
                        </View>
                    </View>
                    <View>
                        <OpenMore/>
                    </View>
                </View>

                <View style={[styles.baseInfoGroup,{borderBottomWidth:0}]}>
                    <TouchableHighlight
                        onPress={() => this.genderPress('AboutMeEditor')}
                    >
                        <View>
                            <AboutMe/>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={styles.baseInfoGroup}>
                    <TouchableHighlight
                        onPress={() => this.genderPress('UsernameEditor')}
                    >
                        <View>
                            <Username/>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => this.genderPress('SkoutIDEditor')}
                    >
                        <View>
                            <SkoutID/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.genderPress('GenderEditor')}
                    >
                        <View>
                            <Gender/>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={[styles.baseInfoGroup,{marginBottom:30}]}>
                    <TouchableHighlight
                        onPress={() => this.genderPress('InterestedInEditor')}
                    >
                        <View>
                            <InterestedIn/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.genderPress('LookingForEditor')}
                    >
                        <View>
                            <LookingFor/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.genderPress('RelationshipStatusEditor')}
                    >
                        <View>
                            <RelationshipStatus/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.genderPress('InterestsEditor')}
                    >
                        <View>
                            <Interests/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.genderPress('EthnicityEditor')}
                    >
                        <View>
                            <Ethnicity/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.genderPress('HasChildrenEditor')}
                    >
                        <View>
                            <HasChildren/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.genderPress('SmokingEditor')}
                    >
                        <View>
                            <Smoking/>
                        </View>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#F4F4F4',
    },
    baseHeaderBox: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        height: 90,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        alignItems: 'center'
    },
    baseHeaderInfo: {
        flex: 1,
        marginLeft: 14,
        flexDirection: 'row'
    },
    baseHeaderInfoBase: {
        marginLeft: 14,
        justifyContent: 'center'
    },
    baseInfoGroup: {
        marginTop: 30,
        paddingLeft: 14,
        backgroundColor: '#FFFFFF',
        borderTopColor: '#E0E0E0',
        borderTopWidth: 1,
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1
    },
    baseNameIdInfo: {},
    username: {
        fontWeight: "700",
        fontSize: 14,
    },
    openMoreBox: {
        marginRight: 10
    },
    openMore: {
        width: 20,
        height: 20,
    }
})