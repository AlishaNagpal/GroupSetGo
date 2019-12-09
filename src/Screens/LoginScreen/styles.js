import { StyleSheet } from 'react-native'

/**
 * custom imports
 */
import { vw, vh } from '../../Constants/Dimension';
import { Colors } from '../../Constants';

export const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: vw(40),
        backgroundColor: Colors.white
    },
    welcomeBackStyle: {
        color: 'rgb(226,90,113)',
        fontSize: vw(26.7),
        marginTop: vh(163.7),
        fontFamily: 'SourceSansPro-Semibold'
    },
    signInToContinueStyle: {
        fontSize: vw(26.7),
        fontFamily: 'SourceSansPro-Semibold'
    },
    emailTextInputStyle: {
        marginHorizontal: vw(12),
        paddingVertical: vh(8),
        fontSize: vw(16.7),
        fontFamily: 'SourceSansPro-Semibold',
        width: vw(185),
    },
    emailInputViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: vh(35),
        marginTop: vh(60),
        borderBottomWidth: vw(1),
        width: vw(245.4),
    },
    passwordTextInputStyle: {
        paddingHorizontal: vw(12),
        paddingVertical: vh(8),
        fontSize: vw(16.7),
        fontFamily: 'SourceSansPro-Semibold',
        width: vw(185),
    },
    passwordInputViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: vh(35),
        marginTop: vh(29),
        borderBottomWidth: vw(1),
        width: vw(245.4),
    },
    searchIcon: {
        padding: vh(10),
    },
    forgotPasswordTextStyle: {
        color: 'rgb(166,166,166)',
        fontSize: vw(14.7),
        fontFamily: 'SourceSansPro-Regular',
        marginTop: vh(13)
    },
    gradientStyle: {
        width: vw(325),
        height: vh(46.5),
        marginTop: vh(66),
        borderRadius: vh(23.3)
    },
    loginButtonStyle: {
        width: vw(325),
        height: vh(46.5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonTitleStyle: {
        color: 'white',
        fontSize: vw(16.7),
        fontFamily: 'SourceSansPro-Regular'
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
    createAnAccountViewStyle: {
        flexDirection: 'row',
        marginTop: vh(16)
    },
    crossButtonStyle: {
        width: vw(18.3),
        height: vw(18.3),
        marginLeft: vw(377.7),
        marginTop: vh(19.7),
        backgroundColor: 'red'
    },
    errorView: {
        position: 'absolute',
        height: vh(70),
        width: vw(420),
        backgroundColor: Colors.white,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: vh(-390),
        marginLeft: vw(-80)
    },
    errorView1: {
        position: 'absolute',
        height: vh(70),
        width: vw(420),
        backgroundColor: Colors.white,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: vh(-440),
        marginLeft: vw(-80)
    },
    errorMessage: {
        fontSize: vh(18),
        color: Colors.black,
        marginTop: vh(25),
        marginLeft: vw(20)
    },
    headerButton: {
        marginTop: vh(25),
        marginRight: vw(30)
    },
    infoText: {
        color: Colors.chatBlue,
        marginTop: vh(25),
    }
});