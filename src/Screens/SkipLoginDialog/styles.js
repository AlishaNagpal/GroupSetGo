import { StyleSheet } from 'react-native'
import { vw, vh, Colors } from '../../Constants'

const styles = StyleSheet.create({
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
        height: vh(220),
        backgroundColor: Colors.white,
        borderRadius: vh(20),
    },
    alertTextStyle: {
        color: Colors.black,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(16.7),
        marginHorizontal: vw(40),
        marginVertical: vh(50.3),
        textAlign: 'center'
    },
    buttonsViewStyle: {
        flexDirection: 'row',
        flex: 1,
        borderTopColor: Colors.darkGray,
        borderTopWidth: vw(0.7)
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