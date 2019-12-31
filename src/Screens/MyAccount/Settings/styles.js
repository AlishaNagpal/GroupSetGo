import { StyleSheet } from 'react-native';
import { vh, vw, Colors, DesignWidth } from '../../../Constants';

const ReviewStyle = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: Colors.veryVeryLightGray,
    },
    headerView: {
        backgroundColor: Colors.fadedRed,
        width: vw(DesignWidth),
        flexDirection: 'row',
        paddingTop: vh(30),
        alignItems:'center',
        height: vh(86.7),
    },
    headerStyle: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    listView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: vw(13.3),
        backgroundColor: Colors.white,
        borderBottomWidth: vw(0.7),
        borderBottomColor: Colors.lightGray,
    },
    bottomStyle: {
        borderBottomWidth: vw(1),
        borderColor: Colors.veryVeryLightGray
    },
    listText: {
        color: Colors.black,
        fontSize: vh(16.7),
        fontFamily: 'SourceSansPro-Regular',
        textTransform: 'capitalize',
        paddingVertical: vh(21.3),
    },
    availableOuterView: {
        backgroundColor: Colors.veryVeryLightGray,
        height: vh(16.7)
    },
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    indicator: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
    },
    dialogboxStyle: {
        width: vw(300),
        height: vh(160),
        backgroundColor: Colors.white,
        borderRadius: vh(20),
    },
    alertTextStyle: {
        color: Colors.black,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(16.7),
        marginHorizontal: vw(40),
        marginVertical: vh(30.3),
        textAlign: 'center'
    },
    buttonsViewStyle: {
        flexDirection: 'row',
        flex: 1,
        // marginTop: vh(42),
        borderTopColor: Colors.darkGray,
        borderTopWidth: vw(1)
    },
    yesContinueButtonStyle: {
        width: vw(149),
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: Colors.fadedGray2,
        borderRightWidth: 1
    },
    yesContinueTextStyle: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(16.7),
        color: Colors.fontColor,

    },
    loginTextStyle: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(16.7),
        color: Colors.darkPink
    },
    loginButtonStyle: {
        width: vw(149),
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ReviewStyle;