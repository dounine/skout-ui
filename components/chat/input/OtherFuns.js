import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Svg from '../../../icons/Svg';

const styles = StyleSheet.create({
    moreView: {
        borderTopColor: '#CCC',
        borderTopWidth: 1,
        flexDirection: 'column',
        paddingBottom: 10
    },
    moreViewRow: {
        flexDirection: 'row',
        marginTop: 10,
    },
    moreViewRowItem: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    moreViewRowItemIcon: {
    },
    moreViewRowItemTextView: {
        marginTop: 2,
    },
    moreViewRowItemText: {
        fontSize: 12,
        color: '#787878'
    }
});

class OtherFuns extends React.Component {

    render() {
        return (
            <View ref="openMoreView" style={styles.moreView}>
                <View
                    style={styles.moreViewRow}
                >
                    <View style={styles.moreViewRowItem}>
                        <View style={styles.moreViewRowItemIcon}>
                            <Svg icon="chat" size="34" color="#626262"/>
                        </View>
                        <View style={styles.moreViewRowItemTextView}>
                            <Text style={styles.moreViewRowItemText}>通话</Text>
                        </View>
                    </View>
                    <View style={styles.moreViewRowItem}>
                        <View style={styles.moreViewRowItemIcon}>
                            <Svg icon="chat" size="34" color="#626262"/>
                        </View>
                        <View style={styles.moreViewRowItemTextView}>
                            <Text style={styles.moreViewRowItemText}>通话功能</Text>
                        </View>
                    </View>
                    <View style={styles.moreViewRowItem}>
                        <View style={styles.moreViewRowItemIcon}>
                            <Svg icon="chat" size="34" color="#626262"/>
                        </View>
                        <View style={styles.moreViewRowItemTextView}>
                            <Text style={styles.moreViewRowItemText}>通话功能</Text>
                        </View>
                    </View>
                    <View style={styles.moreViewRowItem}>
                        <View style={styles.moreViewRowItemIcon}>
                            <Svg icon="chat" size="34" color="#626262"/>
                        </View>
                        <View style={styles.moreViewRowItemTextView}>
                            <Text style={styles.moreViewRowItemText}>通话功能</Text>
                        </View>
                    </View>
                </View>
                <View
                    style={styles.moreViewRow}
                >
                    <View style={styles.moreViewRowItem}>
                        <View style={styles.moreViewRowItemIcon}>
                            <Svg icon="chat" size="34" color="#626262"/>
                        </View>
                        <View style={styles.moreViewRowItemTextView}>
                            <Text style={styles.moreViewRowItemText}>通话</Text>
                        </View>
                    </View>
                    <View style={styles.moreViewRowItem}>
                        <View style={styles.moreViewRowItemIcon}>
                            <Svg icon="chat" size="34" color="#626262"/>
                        </View>
                        <View style={styles.moreViewRowItemTextView}>
                            <Text style={styles.moreViewRowItemText}>通话功能</Text>
                        </View>
                    </View>
                    <View style={styles.moreViewRowItem}>
                        <View style={styles.moreViewRowItemIcon}>
                            <Svg icon="chat" size="34" color="#626262"/>
                        </View>
                        <View style={styles.moreViewRowItemTextView}>
                            <Text style={styles.moreViewRowItemText}>通话功能</Text>
                        </View>
                    </View>
                    <View style={styles.moreViewRowItem}></View>
                </View>
            </View>
        )
    }
}


export default OtherFuns;
