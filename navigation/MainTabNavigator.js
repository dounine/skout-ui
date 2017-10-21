import React from 'react';
import {Text, Platform, Image, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import {ChatScreen, MeetScreen, InterestScreen, DynamicScreen, MineScreen} from '../screens/Screens';


export default TabNavigator(
    {
        Chat: {
            screen: ChatScreen
        },
        Meet: {
            screen: MeetScreen
        },
        Interest: {
            screen: InterestScreen
        },
        Dynamic: {
            screen: DynamicScreen
        },
        Mine: {
            screen: MineScreen
        },
    },
    {
        initialRouteName: 'Chat',
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        headerMode: 'none',
        swipeEnabled: false,
        navigationOptions:{
            headerStyle:{height: 64},
        }
    }
);