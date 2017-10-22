import React from 'react';
import {StackNavigator} from 'react-navigation';
import {ScrollView, RefreshControl, StyleSheet, View, Text, Image} from 'react-native';
import Svg from '../../icons/Svg';
import TheyMsg from './msg/They';
import MineMsg from './msg/Mine';
import TimeDivide from './msg/ChatTimeDivide';
import ChatSettings from './profile/Settings';
import ChatInput from './input/ChatInput';


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

    };

    render() {
        return (
            <View
                style={{backgroundColor: '#F7F7FB'}}
            >
                <View>
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh.bind(this)}
                            />
                        }
                    >
                        <TheyMsg/>
                        <MineMsg />
                        <TimeDivide value="2017-02-10 10:10"/>
                    </ScrollView>
                </View>
                <ChatInput/>
            </View>
        )
    }
}