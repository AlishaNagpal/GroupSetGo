import { StyleSheet } from 'react-native'
import { vw, vh, Colors } from '../../Constants'

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    dialogboxStyle: {
        width: vw(300),
        height: vh(200),
        backgroundColor: Colors.white,
        borderRadius: vh(20),
    },
    alertTextStyle: {
        color: Colors.black,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(16.7),
        marginHorizontal: vw(40),
        marginTop: vh(55.3),
        textAlign: 'center'
    },
    buttonsViewStyle: {
        flexDirection: 'row',
        flex: 1,
        marginTop: vh(42),
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
export default styles;