import { StyleSheet } from 'react-native';
import { vh, vw, Colors, DesignHeight, DesignWidth } from '../../../../../Constants';

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: Colors.white
    },
    headerView: {
        alignItems: 'center',
        height: vh(80),
        backgroundColor: Colors.fadedRed,
        width: vw(DesignWidth),
        flexDirection: 'row',
        paddingTop: vh(30),
        justifyContent: 'space-between'
    },
    reviewHeadingFilter: {
        color: Colors.white,
        fontSize: vw(25),
        fontFamily: 'SourceSansPro-Semibold',
        paddingLeft: vw(10),
        textTransform: 'capitalize'
    },
    reviewHeadingReset: {
        color: Colors.white,
        fontSize: vw(20),
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
    startDateText: {
        textTransform: 'uppercase',
        fontSize: vw(17.7),
        fontFamily: 'SourceSansPro-Semibold',
        color:Colors.fadedGray,
    },
    dateView: {
        marginHorizontal: vw(13.3),
        marginTop: vw(20.7),
    },
    dateInnerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dateNewText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(17.7),
        color: Colors.verLightGrey
    },
    personCheckView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(17.7),
        color: Colors.darkGray2,
        textTransform: 'capitalize',
        marginLeft: vw(10),
        marginRight: vw(20)
    },
    costTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: vh(17.7)
    },
    costText: {
        fontFamily: 'Poppins-Medium',
        fontSize: vw(15.7),
        color: Colors.darkGray2
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
        paddingHorizontal: vw(13.3),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    plusMinusView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    slotNumView: {
        borderColor: Colors.slotGray,
        height: vw(23.3),
        width: vw(33.3),
        borderWidth: vw(1),
        borderRadius: vw(1.7),
        marginHorizontal: vw(7)
    },
    percent: {
        backgroundColor: Colors.lightGray,
        padding: vw(13.3),
        paddingTop: vw(27.3)
    },
    percentSliderView: {
        paddingHorizontal: vw(13.3)
    },
    category: {
        backgroundColor: Colors.toolightGrey,
        padding: vw(13.3),
        paddingTop: vw(27.3)
    },
    family: {
        backgroundColor: Colors.white,
        padding: vw(13.3),
        paddingVertical: vh(20.3),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    familyBtnView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    familyYes: {
        textTransform: 'capitalize',
        fontSize: vw(15.3),
        fontFamily: 'SourceSansPro-Semibold',
        textAlign: 'center'
    },
    applyView: {
        backgroundColor: Colors.darkNewGreen,
        padding: vw(13.3),
        paddingTop: vw(19.7),
        alignItems: 'center'
    },
    applyText: {
        textTransform: 'uppercase',
        fontSize: vw(17.7),
        fontFamily: 'SourceSansPro-Semibold',
        color: Colors.white
    },
    dateTimePicker: {
        width: '45%'
    }

})

export default styles;