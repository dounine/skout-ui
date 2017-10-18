import React, {Component} from 'react';
import {TouchableHighlight,Button,Text} from 'react-native';
import Picker from 'react-native-picker';

class Save extends Component {

    save = () =>{
        alert()
    }

    render() {
        return (
            <Button
                onPress={this.save}
                title={"保存"}>

            </Button>
        )
    }
}


export default class Height extends Component {

    static navigationOptions = {
        headerRight:(<Save/>)
    }



    constructor() {
        super()
        this.state = {
            language: '男'
        }
    }

    render() {
        return (
            <TouchableHighlight underlayColor='#fff' onPress={this._showTimePicker.bind(this)}>
                <Text>hello</Text>
            </TouchableHighlight>
        )
    }
}

