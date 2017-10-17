import React, {Component} from 'react';
import {ListView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MyProfile from './profile/Profile';

const MineNaviator = StackNavigator(
    {
        Me: {
            screen: MyProfile
        }
    }
);

export default MineNaviator;

// export default class Mine extends Component {
//
//     constructor() {
//         super();
//         const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         this.state = {
//             dataSource: ds.cloneWithRows(['row 1', 'row 2']),
//         };
//     }
//
//     renderRow(rowData, sectionID, rowID, highlightRow) {
//         return <Text>{rowData}</Text>
//     }
//
//     render() {
//
//         return (
//             <ScrollView
//                 style={styles.container}
//
//             >
//                 <ListView
//                     renderRow={this.renderRow}
//                     dataSource={this.state.dataSource}
//                 >
//
//                 </ListView>
//
//             </ScrollView>
//         );
//     }
// }

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerRow: {
        marginTop: 20,
        flexDirection: 'row',
        height: 40,
        backgroundColor: '#9cf'
    },
    header: {//头像
        width: 20,
        height: 20,
    }
})