import { StyleSheet } from 'react-native';
import { vh, vw, Colors, } from '../../../Constants';

const ReviewStyle = StyleSheet.create({
    containerView: {
        flex: 1,
    },
    gradient: {
        paddingVertical: vh(18),
        alignItems: 'center',
    },
    saveTxt: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vh(15.3),
        color: Colors.white
    },
    arrowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(108, 16, 75,0.9)',
        padding: vh(14.3),
        paddingBottom: 0,
    },
    picStyle: {
        height: vh(133.3),
        width: vh(133.3),
        borderRadius: vh(66.5),
        marginBottom: vh(11.7)
    },
    cameraView: {
        backgroundColor: 'white',
        position: 'absolute',
        top: vh(90),
        left: vw(100),
        height: vw(40),
        width: vw(40),
        borderRadius: vw(20),
        alignItems: 'center',
        justifyContent: 'center'
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