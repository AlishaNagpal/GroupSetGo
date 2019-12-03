import { StyleSheet } from 'react-native'

/**
 * custom imports
 */
import { vw, vh } from '../../Constants/Dimension';

export const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: vw(40),
    },
    backButtonStyle: {
        left: vw(20),
        marginTop: vh(40),
    },
    resetPasswordTextStyle: {
        color: 'rgb(226,90,113)',
        fontSize: vw(26.7),
        marginTop: vh(180.7),
        fontFamily: 'SourceSansPro-Semibold'
    },
    keepItStrongTextStyle: {
        fontSize: vw(26.7),
        fontFamily: 'SourceSansPro-Semibold'
    },
    emailTextInputStyle: {
        paddingHorizontal: vw(12),
        paddingVertical: vh(8),
        fontSize: vw(16.7),
        fontFamily: 'SourceSansPro-Semibold',
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
        width: vw(185)
    },
    newPasswordInputViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: vh(35),
        marginTop: vh(34),
        borderBottomWidth: vw(1),
        width: vw(245.4),
    },
    confirmPasswordInputViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: vh(35),
        marginTop: vh(21),
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
    resetButtonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: vw(325),
        height: vh(46.5),
        marginTop: vh(29),
        backgroundColor: 'rgb(127,36,97)',
        borderRadius: vw(23.3)
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
    }
});