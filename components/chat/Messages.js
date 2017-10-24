import React from 'react';
import {StyleSheet, View, ScrollView, Text, RefreshControl} from 'react-native';
import Notification from './Notification';
import Svg from '~/icons/Svg';
import MessageItem from './MessageItem';


function tabBarVisible(screenProps) {
    setTimeout(function () {
        screenProps.rootNavigation.setParams({
            tabBarVisible: true
        })
    });
    return ''
}

export default class Messages extends React.Component {

    static navigationOptions = ({navigation, screenProps})=>({
        // header: null,
        title: '聊天',
        headerRight: <Notification/>
    });

    constructor() {
        super();
        this.state = {
            refreshing: false
        }
    }

    componentDidMount = () => {

    };

    _onRefresh = () => {

    };

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                }
                style={styles.container}
            >
                <MessageItem navigation={this.props.navigation}/>
                <MessageItem navigation={this.props.navigation}/>
                <MessageItem navigation={this.props.navigation}/>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4'
    }
});