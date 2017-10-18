import React from 'react';
import {TouchableHighlight, Image, ScrollView, View, Button, StyleSheet, Text} from 'react-native';

class Save extends React.Component {

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


export default class LookingFor extends React.Component {

    static navigationOptions = {
        headerRight: (<Save/>),
        title:"寻找"
    }

    select(item) {
        item.select = !item.select
        this.setState({})
    };

    constructor() {
        super();
        this.state = {
            values: [{name: "朋友"}, {name: "调情"}, {name: "乐趣"}, {name: "约会"}, {name: "酒会"}, {name: "聊天"}, {name: "感情"}]
        };
    }


    render() {

        const $self = this
        return (
            <ScrollView
                style={styles.container}
            >
                <View style={styles.listBox}>
                    {
                        $self.state.values.map(function (item, index) {
                            return (
                                <TouchableHighlight
                                    underlayColor="#CCCCCC"
                                    onPress={()=> {
                                        $self.select(item)
                                    }}
                                    key={item.name}
                                >
                                    <View style={[styles.list, {borderBottomWidth: index == 6 ? 0 : 1}]}>
                                        <View style={styles.text}>
                                            <Text>{item.name}</Text>
                                        </View>
                                        <View>
                                            <Image
                                                source={require('../../../../icons/select.png')}
                                                style={item.select ? styles.select : styles.selectNone}
                                            />
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            )
                        })
                    }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        backgroundColor:'#F6F6F6'
    },
    listBox: {
        borderTopWidth:1,
        borderTopColor:'#E0E0E0',
        borderBottomWidth:1,
        borderBottomColor:'#E0E0E0',
        backgroundColor: '#FFFFFF',
    },
    text: {
        flex: 1
    },
    list: {
        flexDirection: 'row',
        flex: 1,
        height: 50,
        marginLeft: 20,
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    select: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    selectNone: {
        width: 20,
        height: 20,
        marginRight: 10,
        display: 'none'
    }
})
