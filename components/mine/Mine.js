import React, {Component} from 'react';
import {ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ProfileList from './profile/ProfileList';
import Info from './profile/Info';

const MineNaviator = StackNavigator(
    {
        ProfileList: {
            screen: ProfileList
        },
        Info: {
            screen: Info
        }
    },
    {
        initialRouteName:'ProfileList'
    }
);

export default MineNaviator;