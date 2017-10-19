import React, {Component} from 'react';
import {TouchableHighlight, ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import Profile from './Profile';
import Gender from './read/Gender';
import Friends from './funs/Friends';
import Groups from './funs/Groups';
import Translate from './funs/Translate';
import CheckedMeOut from './funs/CheckedMeOut';
import Popularity from './funs/Popularity';
import Travel from './funs/Travel';
import Shake from './funs/Shake';
import FeatureMe from './funs/FeatureMe';
import FavoritedMe from './funs/FavoritedMe';
import Settings from './funs/settings/Settings';
import Bugs from './funs/settings/Bugs';
import Help from './funs/settings/Help';
import LogOut from './funs/LogOut';


export default class ProfileList extends Component {

    static navigationOptions = {
        // headfer:null
        tabBarLabel: '我的'
    };

    onPress = (name) => {
        this.props.navigation.navigate(name);
    };

    render() {
        return (
            <ScrollView
                style={{backgroundColor:'#F6F6F6'}}
                >
                <View style={styles.baseInfo}>
                    <TouchableHighlight
                        underlayColor="#CCCCCC"
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
                            underlayColor="#CCCCCC"
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Friends/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="#CCCCCC"
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Groups/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="#CCCCCC"
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Translate/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="#CCCCCC"
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <CheckedMeOut/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="#CCCCCC"
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Popularity/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="#CCCCCC"
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Travel/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="#CCCCCC"
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Shake/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="#CCCCCC"
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <FeatureMe/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="#CCCCCC"
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
                            underlayColor="#CCCCCC"
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Settings/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="#CCCCCC"
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Bugs/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="#CCCCCC"
                            onPress={()=>this.onPress('Info')}
                        >
                            <View>
                                <Help/>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={[styles.fun,{height:30}]}>
                        {/*<Text style={styles.funText}>设置</Text>*/}
                    </View>
                    <View>
                        <LogOut/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    baseInfo: {
        backgroundColor: '#FFFFFF',
        marginBottom:30,
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
    },
    funText: {
        marginTop: 26,
        marginLeft: 14,
        color: '#7F7F7F'
    }
})