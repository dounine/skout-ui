import React from 'react';
import {StackNavigator} from 'react-navigation';
import {ScrollView, RefreshControl, StyleSheet, View, Text, Image} from 'react-native';
import Svg from '../../icons/Svg';
import TheyMsg from './msg/They';
import MineMsg from './msg/Mine';
import TimeDivide from './msg/ChatTimeDivide';
import ChatSettings from './profile/Settings';


export default class MessageContainer extends React.Component {

    static navigationOptions = ({
        navigation,
        screenProps
    })=>({
        headerTitle: 'hello',
        headerRight: (<ChatSettings navigation={navigation}/>)
    });

    state = {
        refreshing: false
    };

    _onRefresh = () => {

    }

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                }
                style={{backgroundColor: '#F7F7FB'}}
            >
                <TheyMsg/>
                <MineMsg />
                <TimeDivide value="2017-02-10 10:10"/>
            </ScrollView>
        )
    }
}