import { StyleSheet } from 'react-native'
import { vh, vw, Colors, DesignWidth } from '../../../../../Constants';


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        paddingTop: vh(12.7),
    },
    priceDetailsHeadingStyle: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(15.3),
        color: Colors.darkGray,
        marginHorizontal: vw(13.3)
    },
    budgetViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: vh(23.7),
        marginHorizontal: vw(13.3)
    },
    amountTextStyle: {
        paddingHorizontal: vw(24),
        paddingVertical: vh(12),
        backgroundColor: Colors.fadedRed,
        color: Colors.white,
        fontSize: vw(15.3),
        fontFamily: 'SourceSansPro-Semibold',
        borderRadius: vw(2)
    },
    totalBudgetHeadingStyle: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(15.3),
        color: Colors.fadedGray2
    },
    listIconStyle: {
        width: vw(23.3),
        height: vw(14.7),
        // marginLeft: vw(13.3)
    },
    listRowStyle: {
        paddingVertical: vh(14),
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: vw(1),
        borderBottomColor: Colors.shadowColor,
        width: vw(DesignWidth - 26.6),
        marginHorizontal: vw(13.3)
    },
    titleStyle: {
        marginLeft: vw(12.3),
        width: vw(99.3),
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(15.3),
        color: Colors.fadedGray2,
        textAlign: 'left'
    },
    amountStyle: {
        marginLeft: vw(208.3),
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(15.3),
        width: vw(35.7),
        color: Colors.darkGray,
        textAlign: 'right'
    },
    priceDetailsViewStyle: {
        height: vh(280),
        width: vw(DesignWidth),
        borderTopWidth: (0.25),
        borderColor: Colors.shadowColor,
    },
    finalBudgetView: {
        paddingTop: vh(19.3),
        paddingHorizontal: vw(13.3),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: vw(DesignWidth),
    },
    finalBudgetText: {
        fontSize: vw(15.3),
        fontFamily: 'SourceSansPro-Semibold',
        color: Colors.darkGray,
        textAlign: 'left',
    },
    finalBudgetValue: {
        fontSize: vw(15.3),
        fontFamily: 'SourceSansPro-Semibold',
        color: Colors.darkGray,
        textAlign: 'right',
    },
    amountView: {
        paddingTop: vh(19.3),
        paddingHorizontal: vw(13.3),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: vw(DesignWidth),
    },
    amountText: {
        fontSize: vw(15.3),
        fontFamily: 'SourceSansPro-Semibold',
        color: Colors.darkGray,
        textAlign: 'left',
    },
    refundStyle: {
        fontSize: vw(15.3),
        fontFamily: 'SourceSansPro-Semibold',
        color: Colors.darkGray,
        textAlign: 'right',
    },
    raiseIncident: {
        flexDirection: 'row',
        height: vh(60),
        marginBottom: vh(25),
        marginTop: vh(10)
    },
    raiseIncidentButton: {
        width: vw(DesignWidth / 2),
        alignItems: 'center',
        borderWidth: vw(0.3),
        borderColor: Colors.verLightGrey
    },
    raiseIncidentText: {
        marginVertical: vh(20),
        color: Colors.fadedRed,
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(16.7),
    },
    rateReviewButton: {
        width: vw(DesignWidth / 2),
        alignItems: 'center',
        // backgroundColor: Colors.fadedRed,
    },
    rateReviewText: {
        marginVertical: vh(20),
        color: Colors.white,
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(16.7),
    }
});

export default styles;