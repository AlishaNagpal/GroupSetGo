import { StyleSheet } from 'react-native'
import { vh, Colors, vw, DesignWidth, DesignHeight } from '../../Constants';

const styles = StyleSheet.create({
    containerStyle: {
        // flex: 1,
        paddingHorizontal: vw(14),
        paddingTop: vh(20),
        paddingBottom: vh(24),
        backgroundColor: Colors.white,
        height: vh(244),
        elevation: 2
    },
    guestDeleteViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: vh(26)
    },
    crossBtnImageStyle: {
        width: vw(18.3),
        height: vw(18.3),
    },
    cardContainerStyle: {
        paddingBottom: vh(25)
    },
    crossBtnStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: vw(28.3),
        height: vw(28.3),
        marginLeft: vw(357.7),
        marginTop: vh(10)
    },
    letsStartStyle: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(22),
        marginTop: vh(10)
    },
    justAMinuteStyle: {
        fontSize: vw(15.3),
        fontFamily: 'SourceSansPro-Regular',
        maxWidth: vw(345),
        marginTop: vh(16.3),
        color: Colors.darkGray
    },
    separatorStyle: {
        width: vw(DesignWidth),
        height: vh(0.75),
        backgroundColor: Colors.fadedGray,
        marginHorizontal: vw(-14),
        marginTop: vh(22),
        opacity: 0.7
    },
    doYouWantAccomopanyStyle: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(15.3),
        maxWidth: vw(174),
        color: Colors.darkGray
    },
    switchViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: vh(73),
    },
    switchAnimatedViewStyle: {
        width: vw(26),
        height: vw(26),
        borderRadius: vw(13),
        backgroundColor: 'white',
    },
    howManyGuestsStyle: {
        marginTop: vh(19),
        fontSize: vw(16.7),
        fontFamily: 'SourceSansPro-Semibold'
    },
    youCanBringStyle: {
        marginTop: vh(6.7),
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(14.7),
        color: Colors.darkGray
    },
    guestStyle: {
        color: Colors.fadedRed,
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(14.7),
    },
    nameTextInputStyle: {
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: vw(2),
        paddingHorizontal: vw(2),
        paddingVertical: vh(15),
        marginTop: vh(11)
    },
    ageTextInputStyle: {
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: vw(2),
        paddingHorizontal: vw(2),
        paddingVertical: vh(15),
        marginTop: vh(11)
    },
    genderTextStyle: {
        marginTop: vh(19),
        fontSize: vw(15.3),
        fontFamily: 'SourceSansPro-Regular',
        color: Colors.fadedGray
    },
    radioButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: vh(59),
        // marginLeft: vw(150)
    },
    radioButton: {
        marginRight: vw(10),
    },
    radioText: {
        color: Colors.fadedGray,
        fontFamily: 'SourceSansPro-Regular',
        // fontWeight: '500',
        fontSize: vw(15.3),
        marginLeft: vw(7),
        marginRight: vw(50.7)
    },
    radioButtonStyle: {
        flexDirection: 'row',
        marginTop: vh(13.7)
    },
    addMoreGuestsBtnStyle: {
        width: vw(66),
        height: vw(66),
        borderRadius: vw(33),
        justifyContent: 'center',
        alignItems: 'center'
        // position: 'absolute',
    },
    gradientStyleAddUser: {
        width: vw(66),
        height: vw(66),
        borderRadius: vw(33),
        position: 'absolute',
        bottom: vh(154.7),
        right: vw(13.3),
    },
    gradientStyleNextArrow: {
        width: vw(66),
        height: vw(66),
        borderRadius: vw(33),
        position: 'absolute',
        bottom: vh(50),
        right: vw(13.3),
    }
});

export default styles;