import React, {Component} from 'react';
import {ScrollView, View, Button, Text, TextInput} from 'react-native';

class Save extends Component {

    save = () => {
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

export default class Username extends Component {

    static navigationOptions = {
        headerRight: (<Save/>),
        title:"用户名"
    }

    constructor() {
        super()
        this.state = {
            text: 'Lake isme'
        }
    }

    render() {
        return (
            <ScrollView
                style={{backgroundColor:'#F6F6F6'}}
            >
                <View style={{marginTop:40}}>
                    <TextInput
                        style={{height: 40,
                            borderColor: '#DFDFDF',
                            backgroundColor:'#FFFFFF',
                            paddingLeft:10,
                            borderTopWidth: 1,
                            borderBottomWidth:1
                        }}
                        autoFocus={true}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                </View>
                <View style={{marginTop:40,padding:10}}>
                    <Text style={{color:'#989898'}}>
                        创建一个Skout名字，这样就可以让你的朋友跟你聊天的时候就知道你叫什么了.
                    </Text>
                </View>
            </ScrollView>
        )
    }
}



