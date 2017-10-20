import React, {Component} from 'react';
import {Picker,View,Button,Text,TextInput} from 'react-native';

class Save extends Component {

    save = () =>{
        alert()
    };

    render() {
        return (
            <Button
                onPress={this.save}
                title={"保存"}>

            </Button>
        )
    }
}


export default class AboutMe extends Component {

    static navigationOptions = {
        headerRight:(<Save/>),
        title:'关于我'
    };

    constructor() {
        super()
        this.state = {
            text: '我是人'
        }
    }

    render() {
        return (
        <View style={{
            backgroundColor: '#FFFFFF',
            padding:10,
            flex:1,
            borderBottomColor: '#000000',
            borderBottomWidth: 0 }}
        >
            <TextInput
                autoFocus={true}
                onChangeText={(t)=>this.setState({text:t})}
                multiline = {true}
                value={this.state.text}
            />
        </View>

        )
    }
}

