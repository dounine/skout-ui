import React, {Component} from 'react';
import {ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ProfileList from './profile/ProfileList';
import Info from './profile/Info';
import {AboutMe,BodyType,Header,Education,Ethnicity,HasChildren,Interests,LookingFor,RelationshipStatus,Religion,SkoutID,Smoking,Username} from './profile/edit/Editors';

const MineNaviator = StackNavigator(
    {
        ProfileList: {
            screen: ProfileList
        },
        Info: {
            screen: Info
        },
        HeaderEditor:{
            screen:Header
        },
        UsernameEditor:{
            screen:Username
        },
        SkoutIDEditor: {
            screen: SkoutID
        },
        LookingForEditor: {
            screen: LookingFor
        },
        RelationshipStatusEditor: {
            screen: RelationshipStatus
        },
        InterestsEditor: {
            screen: Interests
        },
        EthnicityEditor: {
            screen: Ethnicity
        },
        BodyTypeEditor: {
            screen: BodyType
        },
        ReligionEditor: {
            screen: Religion
        },
        HasChildrenEditor: {
            screen: HasChildren
        },
        EducationEditor: {
            screen: Education
        },
        SmokingEditor: {
            screen: Smoking
        },
        AboutMeEditor: {
            screen: AboutMe
        },
    },
    {
        initialRouteName:'ProfileList'
    }
);

export default MineNaviator;