import _ from 'lodash';

const FunStyle = {
    clone:function () {
        return _.cloneDeep(this);
    },
    container: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
    },
    containerLeft:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerRight: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        alignItems: 'center',
        marginLeft:14,
    },
    funName: {
        flex: 1
    },
    icon: {
        width: 30,
        height: 30,
        backgroundColor: '#67D0BD',
        borderRadius: 6
    }
};

export default FunStyle;