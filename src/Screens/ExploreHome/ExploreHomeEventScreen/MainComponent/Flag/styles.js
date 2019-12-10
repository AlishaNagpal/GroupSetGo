import { StyleSheet } from 'react-native'
import { vh, Colors, vw, DesignWidth, DesignHeight } from '../../../../../Constants'

export default styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.veryVeryLightGray
    },
    headerView: {
        height: vh(90),
        backgroundColor: Colors.fadedRed,
        width: vw(DesignWidth),
    },
    backButtonStyle: {
        marginLeft: vw(13.3),
        alignSelf: 'flex-start',
        marginTop: vh(30)
    },
    textInputBox: {
        height: vh(280),
        width: vw(DesignWidth),
        backgroundColor: Colors.white
    },
    descriptionBox: {
        marginLeft: vw(13.7),
        marginRight: vw(13.7),
        backgroundColor: Colors.veryVeryLightGray,
        marginTop: vh(16.7),
        marginBottom: vh(23.3),
        height: vh(163.3),
        paddingRight: vw(15),
        paddingLeft: vw(15)
    },
    gradientStyle: {
        marginBottom: vh(29.7),
        marginLeft: vw(20),
        marginRight: vw(20),
        width: vw(374),
        height: vh(53.3),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: vw(26.7)
    },
    buttonText: {
        fontFamily: 'SourceSansPro-Semibold',
        color: Colors.white,
        fontSize: vh(16.7),
        textTransform: 'uppercase'
    },
    errorView: {
        position: 'absolute',
        height: vh(80),
        width: vw(420),
        backgroundColor: Colors.white,
        top: -60,
    },
    errorMessage: {
        fontSize: vh(18),
        color: Colors.black,
        marginTop: vh(25),
        marginLeft: vw(20),
        width: vw(300),
        height: vw(60)
    },
    headerButton: {
        marginTop: vh(25),
        marginRight: vw(20),
        marginLeft: vw(20),
        marginBottom: vh(15)
    },
    infoText: {
        color: Colors.chatBlue,
        marginTop: vh(25),
        marginBottom: vh(15)
    },
    topView: {
        marginTop: vw(10),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    }
});