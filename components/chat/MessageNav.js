import React from 'react';
import {
    StackNavigator,
    NavigationActions,
    DeviceEventEmitter,
} from 'react-navigation';
import Messages from './Messages';
import MessageChat from './MessageChat';
import Profile from './profile/Profile';
import Translate from './translate/Translate';

export default StackNavigator({
    Messages: {
        screen: Messages
    },
    MessageChat: {
        screen: MessageChat
    },
    Profile: {
        screen: Profile
    },
    Translate: {
        screen: Translate
    }
}, {
    initialRouteName: 'Messages',
    navigationOptions: {
        headerStyle: {height: 64},
    }
});
