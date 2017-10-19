import React from 'react';
import {StyleSheet,View,ScrollView,Text,RefreshControl} from 'react-native';
import Message from './Message';

export default class Messages extends React.Component{

    constructor(){
        super();
        this.state = {
            refreshing:false
        }
    }

    _onRefresh = () =>{

    }

    render(){
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
                <Message />
                <Message />
                <Message />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F4F4F4'
    }
})