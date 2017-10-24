import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import Svg from '~/icons/Svg';
import Style from './Styles';


export default class Mine extends React.Component{

    render(){
        return (
            <View
                style={styles.mineBoxView}>
                <View style={styles.theyAreMsgView}>
                    <View
                        style={styles.theyAreMsgIconView}
                    >
                        <Svg icon="back" size="20" style={styles.coverIcon}/>
                    </View>
                    <View style={styles.theyAreMsgContentView}>
                        <View
                            style={{flex: 1, flexDirection: 'row'}}
                        >
                            <Text
                                style={styles.theyAreMsgContent}
                            >
                                Hi,Guysasdfasdf
                                Hi,Guysasdfasdf
                            </Text>
                        </View>
                        <View>
                            <View
                                style={styles.translateViewDivide}
                            >
                            </View>
                            <View style={styles.translateView}>
                                <Text style={styles.translateViewText}>
                                    这是翻译后的结果
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = Style.clone();
styles.mineBoxView = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F7F7FB',
    paddingRight:14,
    marginTop:10
};
styles.theyAreMsgIconView = {
    flex: 1,
        justifyContent: 'center',
        alignItems:'flex-end'
};
styles.theyAreMsgContentView = {
    maxWidth: 300,
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderColor: '#EFEFF1',
    borderRadius: 4,
    marginLeft: 6,
    borderWidth: 1,
    flexDirection: 'column'
};