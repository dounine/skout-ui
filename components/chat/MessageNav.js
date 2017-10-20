import React from 'react';
import {StackNavigator} from 'react-navigation';
import Messages from './Messages';
import MessageChat from './MessageChat';
import Profile from './profile/Profile';

const navigation = StackNavigator({
    Messages: {
        screen: Messages
    },
    MessageChat: {
        screen: MessageChat
    },
    Profile: {
        screen: Profile
    }
}, {
    initialRouteName: 'Messages'
});

export default navigation;