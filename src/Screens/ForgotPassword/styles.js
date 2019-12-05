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
    forgotPasswordTextStyle: {
        color: 'rgb(226,90,113)',
        fontSize: vw(26.7),
        marginTop: vh(180.7),
        fontFamily: 'SourceSansPro-Semibold'
    },
    searchIcon: {
        padding: vh(10),
    },
    dontWorryTextStyle: {
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
        marginTop: vh(34.3),
        borderBottomWidth: vw(1),
        width: vw(245.4),
    },
    submitButtonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: vw(325),
        height: vh(46.5),
        marginTop: vh(26),
        backgroundColor: 'rgb(127,36,97)',
        borderRadius: vh(23.3)
    },
    loginButtonTitleStyle: {
        color: 'white',
        fontSize: vw(16.7),
        fontFamily: 'SourceSansPro-Regular'
    },
    backButtonStyle: {
        left: vw(20),
        marginTop: vh(40),
    },
});