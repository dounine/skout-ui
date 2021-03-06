import React from 'react';
import {TouchableHighlight, Image, ScrollView, View, Button, StyleSheet, Text} from 'react-native';
import Svg from '~/icons/Svg';

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


export default class Smoking extends React.Component {

    static navigationOptions = {
        headerRight: (<Save/>),
        title:"吸烟"
    };

    select(item) {
        this.state.values.forEach(function (i) {
            i.select = undefined
        });
        item.select = !item.select;
        this.setState({})
    };

    constructor() {
        super();
        const value = [{name: "留着空白"}, {name: "日常"}, {name: "偶尔"},{name: "绝对不会"}]
        value.forEach(function (item) {
            item.select = false;
        })
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
                                    <View style={[styles.list, {borderBottomWidth: index == 3 ? 0 : 1}]}>
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
