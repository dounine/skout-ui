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


export default class Religion extends Component {

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
            <Picker
                mode={"dropdown"}
                selectedValue={this.state.language}
                onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                <Picker.Item label="男" value="man"/>
                <Picker.Item label="女" value="woman"/>
            </Picker>
        )
    }
}

