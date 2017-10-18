import React, {Component} from 'react';
import {ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ProfileList from './profile/ProfileList';
import Info from './profile/Info';
import GenderEditor from './profile/edit/GenderPicker';
import SkoutIDEditor from './profile/edit/SkoutID';

const MineNaviator = StackNavigator(
    {
        ProfileList: {
            screen: ProfileList
        },
        Info: {
            screen: Info
        },
        GenderEditor: {
            screen: GenderEditor
        },
        SkoutIDEditor: {
            screen: SkoutIDEditor
        }
    },
    {
        initialRouteName:'ProfileList'
    }
);

export default MineNaviator;