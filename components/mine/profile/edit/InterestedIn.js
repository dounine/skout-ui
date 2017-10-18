import React, {Component} from 'react';
import {Picker,Button,Text} from 'react-native';

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


export default class InterestedIn extends Component {

    static navigationOptions = {
        headerRight:(<Save/>),
        title:"感兴趣的人"
    }

    constructor() {
        super()
        this.state = {
            language: 'man'
        }
    }

    render() {
        return (
            <Picker
                mode={"dropdown"}
                selectedValue={this.state.language}
                onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                <Picker.Item label="男人" value="man"/>
                <Picker.Item label="女人" value="woman"/>
                <Picker.Item label="男人跟女人" value="wm"/>
            </Picker>
        )
    }
}

