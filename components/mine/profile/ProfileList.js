import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import Profile from './Profile';
import Gender from './Gender';
import Friends from './funs/Friends';
import Groups from './funs/Groups';
import Translate from './funs/Translate';
import CheckedMeOut from './funs/CheckedMeOut';
import Popularity from './funs/Popularity';
import Travel from './funs/Travel';
import Shake from './funs/Shake';
import FeatureMe from './funs/FeatureMe';
import FavoritedMe from './funs/FavoritedMe';


export default class ProfileList extends Component {

    static navigationOptions = {
        // headfer:null
        // title:'我的',
        tabBarLabel: '我的'
    };

    onPress = (name) => {
        this.props.navigation.navigate(name);
    };

    render() {
        return (
            <ScrollView>

                <View style={styles.baseInfo}>
                    <TouchableHighlight
                        onPress={()=>this.onPress('Info')}
                    >
                        <View>
                            <Profile/>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.fun}>
                        <Text style={styles.funText}>功能</Text>
                    </View>
                    <View style={styles.funs}>
                        <TouchableHighlight
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Friends/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Groups/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Translate/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <CheckedMeOut/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Popularity/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Travel/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Shake/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Travel/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <FeatureMe/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <FavoritedMe/>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.fun}>
                        <Text style={styles.funText}>设置</Text>
                    </View>
                    <View style={styles.funs}>
                        <TouchableHighlight
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Shake/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Shake/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Shake/>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    baseInfo: {
        backgroundColor: '#FFFFFF',

    },
    fun: {
        height: 50,
        backgroundColor: '#F6F6F6'
    },
    funs: {
        borderTopColor: '#E0E0E0',
        borderBottomColor: '#E0E0E0',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingLeft: 14
    },
    funText: {
        marginTop: 26,
        marginLeft: 14,
        color: '#7F7F7F'
    }
})