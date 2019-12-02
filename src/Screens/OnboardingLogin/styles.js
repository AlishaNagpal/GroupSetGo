import { StyleSheet } from 'react-native'

/**
 * custom imports
 */
import { vw, vh } from '../../Constants/Dimension';

export const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
    },
    logoImageStyle: {
        width: vw(82),
        height: vw(83.3),
        marginTop: vh(167)
    },
    helloStrangerStyle: {
        color: 'rgb(226,90,113)',
        fontSize: vw(26.7),
        marginTop: vh(21.3),
        fontFamily: 'SourceSansPro-Semibold'
    },
    welcomeTextStyle: {
        fontSize: vw(26.7),
        fontFamily: 'SourceSansPro-Semibold'
    },
    whereSharingTextStyle: {
        marginTop: vh(14.7),
        fontSize: vw(15.3),
        fontFamily: 'SourceSansPro-Regular'
    },
    loginButtonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: vw(325),
        height: vh(46.5),
        marginTop: vh(21),
        backgroundColor: 'rgb(127,36,97)',
        borderRadius: vw(23.3)
    },
    loginButtonTitleStyle: {
        color: 'white',
        fontSize: vw(16.7),
        fontFamily: 'SourceSansPro-Regular'
    },
    createAnAccountViewStyle: {
        flexDirection: 'row',
        marginTop: vh(16)
    },
    googleButtonStyle: {
        width: vw(46.7),
        height: vw(46.7)
    },
    facebookButtonStyle: {
        width: vw(46.7),
        height: vw(46.7)
    },
    socialLoginViewStyle: {
        flexDirection: 'row',
        width: vw(106.7),
        justifyContent: 'space-between',
        marginTop: vh(22.7)
    },
    youCanAlsoLoginWithStyle: {
        marginTop: vh(64.3),
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(15.3)
    },
    createAccountTextStyle: {
        textDecorationLine: 'underline',
        color: 'rgb(226,90,113)',
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(15.3)
    },
    newToGroupSetGoStyle: {
        fontSize: vw(15.3),
        fontFamily: 'SourceSansPro-Semibold'
    },
    bottomViewStyle: {
        flex: 1,
        justifyContent: "flex-end"
    },
    skipLoginTextStyle: {
        color: 'rgb(166,166,166)',
        fontSize: vw(14.7),
        fontFamily: 'SourceSansPro-Regular',
    },
    skipLoginButtonStyle: {
        marginBottom: vh(19.7),
        justifyContent: 'center',
        alignItems: 'center'
    }
});