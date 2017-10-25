import React from 'react';
import {AsyncStorage,StyleSheet, View, ScrollView, Text, RefreshControl} from 'react-native';
import Notification from './Notification';
import Svg from '~/icons/Svg';
import MessageItem from './MessageItem';
import Emitters from '~/constants/Emitters';


export default class Messages extends React.Component {

    static navigationOptions = ({navigation, screenProps}) => ({
        // header: null,
        title: '聊天',
        headerRight: <Notification/>
    });

    componentWillMount() {
        let $self = this;
        $self.fetchMessages();
        $self.openChatListener = Emitters.DEM.addListener(Emitters.OPEN_CHAT, function (result) {
            $self.props.navigation.navigate('MessageChat',{fromId:result.fromId,userName:result.userName,img:result.img})
        });
    };

    componentWillUnmount() {
        this.openChatListener.remove();
    };

    constructor() {
        super();
        this.state = {
            refreshing: false,
            chats: []
        }
    };

    fetchMessages() {
        let $self = this;
        const config = {
            method: 'GET',
            headers: { //header
                'session_id': ''
            },
        };

        this.readCacheChats(function (err,result) {
            if(err){
                alert('储存失败');
            } else if(result) {
                let jsonObj = JSON.parse(result)
                $self.setState({
                    chats: jsonObj.elements,
                    refreshing: false
                })
            } else {
                $self.setState({
                    refreshing: true,
                });
                fetch('https://www.skout.com/api/1/chats?limit=20&offset=0', config)
                    .then((response) => response.json())
                    .then(function (response) {
                        $self.saveChats(response)
                        $self.setState({
                            chats: response.elements,
                            refreshing: false
                        })
                    });
            }
        });

    }

    saveChats = async (response) => {
        try {
            await AsyncStorage.setItem('chats',JSON.stringify(response));
        } catch (error) {
            // Error saving data
        }
    };

    readCacheChats = (call) => {
        try {
            AsyncStorage.getItem('chats', call);
        } catch (error) {
            // Error saving data
        }
    }

    componentDidMount = () => {

    };

    _onRefresh = () => {

    };

    render() {
        let navigation = this.props.navigation;
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
                {
                    this.state.chats.map(function (data) {
                        return <MessageItem key={data.user.id} data={data} navigation={navigation}/>
                    })
                }
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