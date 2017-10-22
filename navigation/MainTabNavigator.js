import React from 'react';
import {Text, Platform, Image, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import Svg from '../icons/Svg';
import * as Screens from '../screens/Screens'
const {
    ChatScreen,
    MeetScreen,
    InterestScreen,
    DynamicScreen,
    MineScreen
} = Screens;

const tabs = {
    Chat: {
        _tabBarLabel: '聊天',
        screen: ChatScreen
    },
    Meet: {
        _tabBarLabel: '遇见',
        getScreen: ()=>require('../screens/MeetScreen').default
    },
    Interest: {
        _tabBarLabel: '感兴趣',
        getScreen: ()=>require('../screens/InterestScreen').default
    },
    Dynamic: {
        _tabBarLabel: '动态',
        getScreen: ()=>require('../screens/DynamicScreen').default
    },
    Mine: {
        _tabBarLabel: '我的',
        getScreen: ()=>require('../screens/MineScreen').default
    },
}

export default TabNavigator(
    {
        ...tabs
    },
    {
        initialRouteName: 'Chat',
        tabBarPosition: 'bottom',
        animationEnabled: false,
        headerMode: 'none',
        swipeEnabled: false,
        navigationOptions: ({navigation, screenProps})=>({
            headerStyle: {height: 64},
            header:null,
            tabBarLabel: ()=> {
                const {routeName} = navigation.state;
                let labelName = '没有找到';
                for (let name in tabs) {
                    if (name === routeName) {
                        labelName = tabs[name]._tabBarLabel
                        break;
                    }
                }
                return labelName
            },
            tabBarIcon: ({focused}) => {
                const {routeName} = navigation.state;
                let iconName;
                for (let name in tabs) {
                    if (name === routeName) {
                        iconName = name.toLowerCase()
                        break;
                    }
                }
                return (
                    <Svg
                        icon={iconName}
                        size={28}
                        style={styles.icon}
                        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                    />
                );
            },
        }),
        tabBarComponent: ({jumpToIndex, ...props}) => (
            <TabBarBottom
                {...props}
                getOnPress={() => {
                    return (scene) => {
                        const {route, index, focused} = scene;
                        jumpToIndex(index);
                    };
                }}
            />
        ),
    }
);

const styles = StyleSheet.create({
    icon: {
        width: 28,
        height: 28
    }
})