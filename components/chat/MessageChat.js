import React from 'react';
import {StackNavigator} from 'react-navigation';
import {
    ProgressViewIOS,
    FlatList,
    ScrollView,
    RefreshControl,
    StyleSheet,
    View,
    Text,
    Image,
    Animated,
    Easing
} from 'react-native';
import Svg from '~/icons/Svg';
import TheyMsg from './msg/They';
import MineMsg from './msg/Mine';
import TimeDivide from './msg/ChatTimeDivide';
import ChatSettings from './profile/Settings';
import ChatInput from './input/ChatInput';
import Emitters from '~/constants/Emitters';

const ITEM_HEIGHT = 54;
const myId = '126709797';

export default class MessageChat extends React.Component {

    static navigationOptions = ({
                                    navigation,
                                    screenProps
                                }) => ({
        headerTitle: navigation.state.params.userName,
        headerRight: (<ChatSettings navigation={navigation}/>)
    });

    constructor() {
        super();
        this.state = {
            refreshing: true,
            progress: 0.1,
            showMessages: false,
            messages: []
        };
    }

    componentWillMount() {
        this.searchChatList();
        let $self = this;
        this.switchTranslate = Emitters.DEM.addListener(Emitters.SWITCH_TRANSLATE, function (result) {
            $self.props.navigation.navigate('Translate')
        });
        $self.sendMessageListener = Emitters.DEM.addListener(Emitters.SEND_MESSAGE, function (result) {
            $self.sendMessage(result)
        });
    };

    sendMessage(context) {
        let fromId = this.props.navigation.state.params.fromId;
        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'session_id': ''
            },
            body: 'message=' + context
        };
        let $self = this;
        let messages = $self.state.messages;
        Emitters.DEM.emit(Emitters.SEND_MESSAGE_STATUS,'error');
        if(false)
        fetch(`https://www.skout.com/api/1/chats/${fromId}/send`, config)
            .then((response) => response.json())
            .then(function (response) {
                messages.push({
                    id: response.message_id,
                    text: context,
                    to: fromId,
                    from: myId
                });
                Emitters.DEM.emit(Emitters.SEND_MESSAGE_STATUS,'success');
                $self.setState({
                    messages: messages,
                    inputText:null
                })
            })
            .catch(function (err) {
                Emitters.DEM.emit(Emitters.SEND_MESSAGE_STATUS,err);
            });
    }

    searchChatList() {
        let $self = this;
        let fromId = this.props.navigation.state.params.fromId;
        let before = new Date().getTime();
        let config = {
            method: 'GET',
            headers: { //header
                'session_id': ''
            },
        };
        $self.setState({
            refreshing: true
        });
        $self.progressInterval = setInterval(function () {
            if ($self.state.progress <= 0.9) {
                $self.setState({
                    progress: $self.state.progress + 0.01
                });
            }
        }, 10);
        fetch(`https://www.skout.com/api/1/chats/${fromId}?_ignoreLoadingBar=true&limit=10`,
            config)
            .then((response) => response.json())
            .then(function (response) {
                $self.setState({
                    progress: 1.0,
                    refreshing: false,
                    messages: response.elements
                });
                clearInterval($self.progressInterval)
                setTimeout(() => {
                    $self.refs.msgs.scrollToEnd();
                    // setTimeout(()=>{
                    $self.setState({
                        showMessages: true
                    });
                    // },300)
                }, 100)

            })
            .catch(function (err) {
                console.error(err)
            });
    }

    componentWillUnmount() {
        this.switchTranslate.remove();
        this.sendMessageListener.remove();
    }

    _onRefresh = () => {

    };

    renderItem(item, fromId) {
        let data = item.item;
        return <View style={{opacity: this.state.showMessages ? 1 : 0}}>
            {
                fromId === data.to ?
                    <MineMsg text={data.text}/> :
                    <TheyMsg img={this.props.navigation.state.params.img} text={data.text}/>
            }
        </View>
    }

    render() {
        const fromId = this.props.navigation.state.params.fromId;
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#F7F7FB'
                }}
            >
                <View
                    style={{
                        flex: 1
                    }}

                >
                    {
                        this.state.progress < 1.0 &&
                        <ProgressViewIOS style={styles.progressView} progress={this.state.progress}/>
                    }
                    <FlatList
                        ref="msgs"
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh.bind(this)}
                            />
                        }
                        // getItemLayout={(data, index) => (
                        //     {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
                        // )}
                        renderItem={(data) => this.renderItem(data, fromId)}
                        data={this.state.messages}
                        keyExtractor={(item, index) => index}
                    >
                        {/*<TimeDivide value="2017-02-10 10:10"/>*/}
                    </FlatList>
                </View>
                <View>
                    <ChatInput/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    progressView: {}
})