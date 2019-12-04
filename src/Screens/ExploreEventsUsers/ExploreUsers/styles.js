import { StyleSheet } from 'react-native'
import { Colors, vh, vw, DesignWidth } from '../../../Constants';

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: Colors.backgroundColorLightGray
    },
    textinputViewStyle: {
        width: vw(DesignWidth),
        height: vh(53),
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: vw(14.3),
        marginTop: vh(13)
    },
    rowStyle: {
        height: vh(74),
        width: vw(DesignWidth),
        backgroundColor: Colors.white,
        paddingHorizontal: vw(14),
        paddingVertical: vh(20),
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: vw(0.5),
    },
    searchLocationViewStyle: {
        width: vw(DesignWidth),
        height: vh(53),
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: vw(14.3),
        borderTopWidth: vw(1),
        borderTopColor: Colors.lightGray
    },
    textinputStyle: {
        marginLeft: vw(5),
        color: 'black',
        fontSize: vw(15.3),
        fontFamily: 'SourceSansPro-Regular',
    },
    locationTextStyle: {
        color: Colors.black,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(18.3),
        marginLeft: vw(5.7)
    },
    recentHeadingStyle: {
        marginLeft: vw(13.3),
        marginTop: vh(28),
        fontSize: vw(13.3),
        fontFamily: 'SourceSansPro-Regular',
    },
    searchResultsListStyle: {
        marginTop: vh(10),
        flex: 1,
        backgroundColor: Colors.white
    },
    listPinStyle: {
        marginRight: vw(4)
    },
    listEventTextStyle: {
        fontSize: vw(15.3),
        fontFamily: 'SourceSansPro-Regular'
    },
    listLocationTextStyle: {
        marginLeft: vw(20),
        fontSize: vw(14),
        fontFamily: 'SourceSansPro-Regular',
        color: Colors.fadedGray,
        marginTop: vh(5)
    },
    listRowStyle: {
        flexDirection: 'row'
    }
});
export default styles;