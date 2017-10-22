import React, {Component} from 'react';
import {TouchableHighlight, Button, View, Text, StyleSheet} from 'react-native';

import MessageContainer from '../components/chat/MessageNav';

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

function checkTabBarVisible(params) {
    return (params && params.tabBarVisible != null) ? !params.tabBarVisible : true
}

export default class ChatScreen extends Component {

    static navigationOptions = ({navigation})=>({
        tabBarVisible: checkTabBarVisible(navigation.state.params),
    });

    navigationStateChange = (prevState, newState, action) => {
        let visible = 'Messages' === getCurrentRouteName(newState);
        if (this.props.navigation.params !== visible) {
            this.props.navigation.setParams({
                tabBarVisible: !visible
            });
        }
    };

    render() {
        return (
            <MessageContainer onNavigationStateChange={this.navigationStateChange}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});