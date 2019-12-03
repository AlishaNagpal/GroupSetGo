import { StyleSheet } from 'react-native'
import { vh, vw, DesignWidth } from '../../Constants';

import Colors from '../../Constants/Colors'
export const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center'
    },
    headerViewStyle: {
        flexDirection: 'row',
        height: vh(42.7),
        backgroundColor: Colors.fadedRed,
        width: vw(DesignWidth),
        alignItems:'center'
    },
    backButtonStyle: {
        marginLeft: vw(13.7),
        // marginTop: vh()
    },
    checkmarkStyle: {
        position: 'absolute',
        marginLeft: vw(50.3),
        top: vh(50.3),
        zIndex: 1
    },
    headerTitleStyle: {
        // marginTop: vh(48),
        marginLeft: vw(13.7),
        color: Colors.white,
        fontSize: vw(20),
        fontFamily: 'SourceSansPro-Semibold'
    },
    cardStyle: {
        width: vw(DesignWidth),
        height: vh(80),
        padding: vw(13.3),
        flexDirection: 'row',
        alignItems: 'center',
        borderTopColor: 'lightgray',
        borderTopWidth: 0.5,
        top: -1
    },
    userImageStyle: {
        width: vw(52),
        height: vw(52),
        borderRadius: vw(26)
    },
    userNameStyle: {
        marginLeft: vw(6.2),
        width: vw(308),
        fontSize: vw(15.3),
        fontFamily: 'SourceSansPro-Semibold',
        color: Colors.darkGray
    },
    cardViewStyle: {
        width: vw(333.3),
        height: vh(295),
        borderRadius: vw(3.3),
        backgroundColor: 'white',
        alignItems: 'center',

    },
    cardContainerStyle: {
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardNameStyle: {
        marginTop: vh(9),
        fontSize: vw(15.3),
        fontFamily: 'SourceSansPro-Semibold',
        color: Colors.darkGray
    },
    horizontalTitleView: {
        width: vw(333.3),
        height: vh(33.3),
        backgroundColor: Colors.fadedRed,
        marginTop: vh(10.9),
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardTitleNameStyle: {
        color: Colors.white,
        fontSize: vw(13.3),
        fontFamily: 'SourceSansPro-Semibold',
        paddingHorizontal: vw(5),
        width: vw(112.3),

    }, cardTitleGenderStyle: {
        color: Colors.white,
        fontSize: vw(13.3),
        fontFamily: 'SourceSansPro-Semibold',
        paddingHorizontal: vw(5),
        width: vw(112.3),
        width: vw(50),
        marginLeft: vw(50.3),

    }, cardTitleAgeStyle: {
        color: Colors.white,
        fontSize: vw(13.3),
        fontFamily: 'SourceSansPro-Semibold',
        paddingHorizontal: vw(5),
        // width: vw(112.3),
        width: vw(30),
        marginLeft: vw(63),

    },
    cardRowStyle: {
        flexDirection: 'row',
        height: vh(37.3),
        width: vw(333.3)
    },
    cardRowNameStyle: {
        width: vw(112.3),
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(15.3),
        color: Colors.darkGray,
        marginLeft: vw(10.3)
    },
    cardRowGenderStyle: {
        width: vw(50),
        marginLeft: vw(50.3),
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(15.3),
        color: Colors.darkGray
    },
    cardRowAgeStyle: {
        width: vw(20),
        marginLeft: vw(59.7),
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(15.3),
        color: Colors.darkGray
    }
});