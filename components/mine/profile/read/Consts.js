import _ from 'lodash';

const ReadStyle = {
    clone:function () {
        return _.cloneDeep(this);
    },
    headerRow: {
        flex:1,
        flexDirection: 'row',
        height: 50,
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        marginLeft:14,
        alignItems: 'center',
    },
    genderLeft:{
        flex:1
    },
    genderRight:{
        flexDirection:'row',
    },
    genderText:{
        color:'#989898',
    }
};

export default ReadStyle;