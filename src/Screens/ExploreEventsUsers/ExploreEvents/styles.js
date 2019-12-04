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
        marginTop: vh(13),
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: vw(14.3)
    }, listRowStyle: {
        paddingHorizontal: vw(14),
        paddingVertical: vh(20),
        width: vw(DesignWidth),
        height: vh(74.7),
        backgroundColor: Colors.white,
        borderBottomWidth: vw(0.5),
        borderBottomColor: Colors.lightGray
    },
    eventTextStyle: {
        fontSize: vw(15.3),
        fontFamily: 'SourceSansPro-Regular'
    },
    eventLocationTextStyle: {
        fontSize: vw(13),
        fontFamily: 'SourceSansPro-Regular',
        color: Colors.fadedGray,
        marginTop: vh(5)
    },
    textinputStyle: {
        marginLeft: vw(5),
        color: 'black',
        fontSize: vw(15.3),
        fontFamily: 'SourceSansPro-Regular',
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
    }
});
export default styles;