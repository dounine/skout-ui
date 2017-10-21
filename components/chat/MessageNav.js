import React from 'react';
import {StackNavigator,NavigationActions} from 'react-navigation';
import Messages from './Messages';
import MessageChat from './MessageChat';
import Profile from './profile/Profile';
export default StackNavigator({
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
    initialRouteName: 'MessageChat',
    navigationOptions:{
        headerStyle:{height: 64},
    }
});
