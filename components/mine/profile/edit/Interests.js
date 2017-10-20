import React from 'react';
import {TouchableHighlight, Image, ScrollView, View, Button, StyleSheet, Text} from 'react-native';
import Svg from '../../../../icons/Svg';

class Save extends React.Component {

    save = () => {
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


export default class Interests extends React.Component {

    static navigationOptions = {
        headerRight: (<Save/>),
        title:"爱好"
    };

    select(item) {
        item.select = !item.select
        this.setState({})
    };

    constructor() {
        super();
        const value = [{name: "电影"}, {name: "看书"}, {name: "电视"}, {name: "音乐"}, {name: "家人"}, {name: "宠物"}, {name: "喝"}, {name: "餐馆"}, {name: "购物"},{name:"看体育"},{name:"体育"},{name:"酒吧"},{name:"跳舞"},{name:"游戏"}]
        value.forEach(function (item) {
            item.select = false;
        });
        this.state = {
            values: value
        };
    }


    render() {

        const $self = this;
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
                                    <View style={[styles.list, {borderBottomWidth: index == 13 ? 0 : 1}]}>
                                        <View style={styles.text}>
                                            <Text>{item.name}</Text>
                                        </View>
                                        <Svg display={item.select} icon="select" size="20" style={styles.select}/>
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
        marginRight: 10,
    },
});
