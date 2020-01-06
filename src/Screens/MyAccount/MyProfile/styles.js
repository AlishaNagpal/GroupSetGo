import { StyleSheet } from 'react-native';
import { vh, vw, Colors, } from '../../../Constants';

const ReviewStyle = StyleSheet.create({
    containerView: {
        flex: 1,
    },
    gradient: {
        paddingVertical: vh(18),
        alignItems: 'center'
    },
    arrowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: Colors.darkishViolet,
        opacity: 0.9,
        padding: vh(14.3),
        paddingBottom: 0
    },
    picStyle: {
        height: vh(133.3),
        width: vh(133.3),
        borderRadius: vh(66.5),
        marginBottom: vh(11.7)
    },
    nameTxt: {
        color: Colors.white,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(22)
    },
    addressTxt: {
        color: Colors.white,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(15.3)
    },
    tabGradient: {
        alignItems: 'center'
    },
})

export default ReviewStyle;