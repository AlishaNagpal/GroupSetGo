import { StyleSheet } from 'react-native';
import { vh, vw, Colors, DesignHeight, DesignWidth } from '../../../../../Constants';

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: Colors.white
    },
    headerView: {
        alignItems: 'center',
        height: vh(86.7),
        backgroundColor: Colors.fadedRed,
        width: vw(DesignWidth),
        flexDirection: 'row',
        paddingTop: vh(30),
        justifyContent: 'space-between'
    },
    reviewHeadingFilter: {
        color: Colors.white,
        fontSize: vh(25),
        fontFamily: 'SourceSansPro-Semibold',
        paddingLeft: vw(10),
        textTransform: 'capitalize'
    },
    reviewHeadingReset: {
        color: Colors.white,
        fontSize: vh(20),
        fontFamily: 'SourceSansPro-Regular',
        paddingLeft: vw(10),
        textTransform: 'uppercase'
    },
    filterView: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: vw(13),
        paddingRight: vw(13)
    },
    dateHead: {
        backgroundColor: Colors.lightGray,
        padding: vw(13.3),
        paddingTop: vw(19.7)
    },
    dateText: {
        textTransform: 'uppercase',
        fontSize: vw(17.7),
        fontFamily: 'SourceSansPro-Semibold'
    },
    dateView: {
        marginHorizontal: vw(13.3),
        marginVertical: vw(20.7),
    },
    dateInnerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    dateNewText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(17.7),
        color: Colors.verLightGrey
    },
    datePicker: {
        width: '45%'
    },
    personCheckView: {
        flexDirection: 'row',
    },
    checkText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(17.7),
        color: Colors.darkGray2,
        textTransform: 'capitalize',
        marginLeft: vw(10),
        marginRight: vw(20)
    },
    sliderView: {
        marginHorizontal: vw(13.3)
    },
    slider: {
        alignItems: 'center',
    },
    availableOuterView: {
        backgroundColor: Colors.lightGray,
        height: vh(16.7)
    },
    availableView: {
        backgroundColor: Colors.white,
        paddingVertical: vw(32),
        paddingHorizontal: vw(13.3)
    },
    percent: {
        backgroundColor: Colors.lightGray,
        padding: vw(13.3),
        paddingTop: vw(27.3)
    },
    category: {
        backgroundColor: Colors.toolightGrey,
        padding: vw(13.3),
        paddingTop: vw(27.3)
    },
})

export default styles;