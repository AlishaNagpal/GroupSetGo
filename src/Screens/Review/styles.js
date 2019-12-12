import { StyleSheet } from 'react-native'
import { vw, vh, DesignWidth, Colors } from '../../Constants';

/**
 * custom imports
 */

const styles = StyleSheet.create({
    containerStyle1: {
        height: vh(147.7),
        paddingHorizontal: vw(13.3),
        paddingVertical: vh(12.3),
        backgroundColor: Colors.white
    },
    containerStyle2: {
        height: vh(254.7),
        paddingHorizontal: vw(13.3),
        paddingVertical: vh(12.3),
        backgroundColor: Colors.white,
        marginTop: vh(14)
    },
    gradient: {
        height: vh(50),
        width: vh(50),
        position: 'absolute',
        top: vh(600),
        left: vw(350),
        borderRadius: vh(25),
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerView: {
        alignItems: 'center',
        height: vh(68),
        backgroundColor: Colors.fadedRed,
        width: vw(DesignWidth),
        flexDirection: 'row'
    },
    backButtonStyle: {
        marginLeft: vw(13.3),
        alignSelf: 'flex-start',
        marginTop: vh(30)
    },
    reviewHeadingStyle: {
        color: Colors.white,
        fontSize: vw(20),
        marginLeft: vw(13.7),
        fontFamily: 'SourceSansPro-Semibold',
        marginTop: vh(20)
    },
    eventNameHeadingStyle: {
        color: Colors.darkGray,
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(16.7)
    },
    eventAddressStyle: {
        width: vw(190.3),
        fontSize: vw(15.3),
        color: Colors.fadedGray2,
        fontFamily: 'SourceSansPro-Regular'
    },
    loginButtonGradientStyle: {
        width: vw(374),
        height: vw(53.4),
        marginTop: vh(23.6),
        backgroundColor: 'rgb(127,36,97)',
        borderRadius: vw(26.7),
        marginHorizontal: vw(20)
    },
    loginButtonStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        width: vw(374),
        height: vw(53.4),
    },
    loginButtonTitleStyle: {
        color: 'white',
        fontSize: vw(16.7),
        fontFamily: 'SourceSansPro-Regular'
    },
    listRowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    typeCostStyle: {
        width: vw(145),
        textAlign: 'left',
        fontSize: vw(15.3),
        fontFamily: 'SourceSansPro-Regular',
        color: Colors.fadedGray2
    },
    listAmountStyle: {
        marginBottom: vh(15),
        textAlign: 'right',
        width: vw(40.3),
        fontSize: vw(15.3),
        fontFamily: 'SourceSansPro-Regular',
        color: Colors.fadedGray2
    },
    listPersonCountStyle: {
        fontSize: vw(15.3),
        textAlign: 'right',
        marginBottom: vh(15),
        width: vw(30),
        fontFamily: 'SourceSansPro-Regular',
        color: Colors.fadedGray2
    },
    listTotalAmountStyle: {
        width: vw(40),
        textAlign: 'right',
        fontSize: vw(15.3),
        marginBottom: vh(15),
        fontFamily: 'SourceSansPro-Regular',
        color: Colors.black
    },
    containerStyle: {
        backgroundColor: Colors.backgroundColorLightGray,
        flex: 1
    },
    eventDateViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: vh(17)
    },
    eventDateStyle: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(13.3),
        color: Colors.fadedGray2
    },
    eventDetailsCommonStyle: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(15.3),
        color: Colors.black
    },
    leaveDateStyle: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(15.3),
        color: Colors.black,
        marginRight: vw(88)
    },

});

export default styles;