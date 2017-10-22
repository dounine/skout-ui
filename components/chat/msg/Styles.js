import _ from 'lodash';
import {Platform} from 'react-native';

const Style = {
    clone:function () {
        return _.cloneDeep(this);
    },
    theyAreBoxView: {
        flex: 1,
        backgroundColor: '#F7F7FB',
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                //ios下显示的样式
            },
            android: {
                //android下显示的样式
            },
        }),
    },
    theyAreHandView: {
        marginLeft: 10
    },
    theyAreHandImage: {
        width: 30,
        height: 30,
        borderRadius: 4
    },
    theyAreMsgView: {
        flex: 1,
        flexDirection: 'row',
    },
    theyAreMsgContentView: {
        maxWidth: 290,
        padding: 8,
        backgroundColor: '#FFFFFF',
        borderColor: '#EFEFF1',
        borderRadius: 4,
        marginLeft: 10,
        borderWidth: 1,
        flexDirection: 'column'
    },
    theyAreMsgContent: {},
    theyAreMsgIconView: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal:2

    },
    coverIcon: {
        width: 26,
        height: 26,
        backgroundColor: '#C6C6C9',
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 4
    },
    translateViewDivide: {
        height: 1,
        backgroundColor: '#F0F0F0',
        marginVertical:10
    },
    translateView: {
        flex: 1,
    },
    translateViewText: {
        fontSize: 14
    }
};

export default Style;