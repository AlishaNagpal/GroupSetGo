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
        marginTop: vh(40),
        flexDirection:'row',
        alignItems:'center',
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
    headerText:{
        color: Colors.white,
        fontSize: vh(20),
        fontFamily: 'SourceSansPro-Semibold',
        marginLeft: vh(5),
    }
});