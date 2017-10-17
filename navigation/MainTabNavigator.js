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
        initialRouteName:'Mine',
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
)

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    }
})
