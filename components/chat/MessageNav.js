import React from 'react';
import {StackNavigator} from 'react-navigation';
import Messages from './Messages';
import MessageChat from './MessageChat';

const navigation =  StackNavigator({
    Messages:{
        screen:Messages
    },
    MessageChat:{
        screen:MessageChat
    }
},{
    initialRouteName:'MessageChat'
})

export default navigation;