import React from 'react';
import {StackNavigator} from 'react-navigation';
import {DeviceEventEmitter,ScrollView, RefreshControl, StyleSheet, View, Text, Image} from 'react-native';
import Svg from '../../icons/Svg';
import TheyMsg from './msg/They';
import MineMsg from './msg/Mine';
import TimeDivide from './msg/ChatTimeDivide';
import ChatSettings from './profile/Settings';
import ChatInput from './input/ChatInput';
import Emitters from '../../constants/Emitters';

export default class MessageChat extends React.Component {

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

    componentDidMount (){
        let $self = this;
        this.switchTranslate = Emitters.DEM.addListener(Emitters.SWITCH_TRANSLATE,function (result) {
            $self.props.navigation.navigate('Translate')
        });
    };

    componentWillUnmount (){
        this.switchTranslate.remove();
    }

    _onRefresh = () => {

    };

    render() {
        return (
            <View
                style={{
                    flex:1,
                    backgroundColor: '#F7F7FB'}}
            >
                <View
                    style={{
                        flex:1
                    }}
                >
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
                <View>
                    <ChatInput/>
                </View>
            </View>
        )
    }
}