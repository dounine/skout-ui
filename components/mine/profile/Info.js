import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import HeaderImage from './header/HeaderImage';
import {OpenMore} from '../../commons/Commons';
import {AboutMe,BodyType,Education,Ethnicity,Gender,HasChildren,Height,InterestedIn,Interests,LookingFor,RelationshipStatus,Religion,SkoutID,Smoking,Username} from './read/Readers';
import Picker from 'react-native-picker';


export default class Info extends Component {

    static navigationOptions = {
        // header:null
        title:"信息"
    };

    _showTimePicker = () =>{
        let data = [],data1=[];
        for(var i=3;i<=8;i++){
            data.push(i);
        }
        for(var i=0;i<=11;i++){
            data1.push(i);
        }
        let pickerData = []
        pickerData.push(data)
        pickerData.push(data1)
        Picker.init({
            pickerData,
            pickerConfirmBtnText:'确认',
            pickerCancelBtnText:'取消',
            pickerTitleText:'选择身高',
            selectedValue: [[3],[0]],
            onPickerConfirm: data => {
                console.log(data);
            },
            onPickerCancel: data => {
                console.log(data);
            },
            onPickerSelect: data => {
                console.log(data);
            }
        });
        Picker.show();
    };

    _showInterestedPicker = () =>{
        let data = ["女人","男人","女人跟男人"];
        Picker.init({
            pickerData:data,
            pickerConfirmBtnText:'确认',
            pickerCancelBtnText:'取消',
            pickerTitleText:'选择对象',
            selectedValue: ['女人'],
            onPickerConfirm: data => {
                console.log(data);
            },
            onPickerCancel: data => {
                console.log(data);
            },
            onPickerSelect: data => {
                console.log(data);
            }
        });
        Picker.show();
    };

    _showGenderPicker = () =>{
        let data = ["女","男"];
        Picker.init({
            pickerData:data,
            pickerConfirmBtnText:'确认',
            pickerCancelBtnText:'取消',
            pickerTitleText:'选择性别',
            selectedValue: ['女'],
            onPickerConfirm: data => {
                console.log(data);
            },
            onPickerCancel: data => {
                console.log(data);
            },
            onPickerSelect: data => {
                console.log(data);
            }
        });
        Picker.show();
    }

    genderPress = (name) => {
        if(name==='HeightEditor'){
            this._showTimePicker()
        }else if(name==='InterestedInEditor'){
            this._showInterestedPicker()
        }else if(name==='GenderEditor'){
            this._showGenderPicker()
        }else{
            this.props.navigation.navigate(name)
        }
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

                <View style={[styles.baseInfoGroup,{borderBottomWidth:0,paddingLeft:0}]}>
                    <TouchableHighlight
                        underlayColor="#E0E0E0"
                        onPress={() => this.genderPress('AboutMeEditor')}
                    >
                        <View>
                            <AboutMe/>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={styles.baseInfoGroup}>
                    <TouchableHighlight
                        underlayColor="#E0E0E0"
                        onPress={() => this.genderPress('UsernameEditor')}
                    >
                        <View>
                            <Username/>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor="#E0E0E0"
                        onPress={() => this.genderPress('SkoutIDEditor')}
                    >
                        <View>
                            <SkoutID/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#E0E0E0"
                        onPress={() => this.genderPress('GenderEditor')}
                    >
                        <View>
                            <Gender/>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={[styles.baseInfoGroup,{marginBottom:30}]}>
                    <TouchableHighlight
                        underlayColor="#E0E0E0"
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
                        underlayColor="#E0E0E0"
                        onPress={() => this.genderPress('RelationshipStatusEditor')}
                    >
                        <View>
                            <RelationshipStatus/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#E0E0E0"
                        onPress={() => this.genderPress('BodyTypeEditor')}
                    >
                        <View>
                            <BodyType/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.genderPress('HeightEditor')}
                    >
                        <View>
                            <Height/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#E0E0E0"
                        onPress={() => this.genderPress('InterestsEditor')}
                    >
                        <View>
                            <Interests/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#E0E0E0"
                        onPress={() => this.genderPress('EthnicityEditor')}
                    >
                        <View>
                            <Ethnicity/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#E0E0E0"
                        onPress={() => this.genderPress('ReligionEditor')}
                    >
                        <View>
                            <Religion/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#E0E0E0"
                        onPress={() => this.genderPress('EducationEditor')}
                    >
                        <View>
                            <Education/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#E0E0E0"
                        onPress={() => this.genderPress('HasChildrenEditor')}
                    >
                        <View>
                            <HasChildren/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor="#E0E0E0"
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