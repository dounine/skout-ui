import React, {Component} from 'react';
import {TouchableHighlight, Button, View, Text, StyleSheet} from 'react-native';
import Svg from '../icons/Svg';

import MessageContainer from '../components/chat/MessageNav';
import {StackNavigator} from 'react-navigation';

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
        header: null,
        tabBarLabel: '聊天',
        tabBarVisible: checkTabBarVisible(navigation.state.params),
        tabBarIcon: ({tintColor}) => {
            return (
                <Svg icon="chat" size="26" color="#929292" style={styles.icon}/>
            )
        }
    });

    navigationStateChange = (prevState, newState, action) => {
        let visible = 'Messages' === getCurrentRouteName(newState);
        if (this.props.navigation.params !== visible) {
            this.props.navigation.setParams({
                tabBarVisible: !visible
            });
        }
    }

    render() {
        return (
            <MessageContainer onNavigationStateChange={this.navigationStateChange}
                              screenProps={{rootNavigation: this.props.navigation}}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 30,
        height: 30,
    }
});