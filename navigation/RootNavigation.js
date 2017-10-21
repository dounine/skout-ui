import React from 'react';
import {StackNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import MessageNav from '../components/chat/MessageNav';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import {ChatScreen,Text, MeetScreen, InterestScreen, DynamicScreen, MineScreen} from '../screens/Screens';

export default StackNavigator(
    {
        Main: {
            screen: MainTabNavigator
        }
    }
);
