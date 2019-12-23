import { StyleSheet } from 'react-native';
import { vh, vw, Colors, DesignHeight, DesignWidth } from '../../Constants';

const ReviewStyle = StyleSheet.create({

    containerStyle: {
        flex: 1,
        backgroundColor: Colors.veryVeryLightGray
    },
    headerView: {
        backgroundColor: Colors.fadedRed,
        width: vw(DesignWidth),
        flexDirection: 'row',
        paddingTop: vh(30),
        alignItems:'center',
        height: vh(86.7)
    },
    backButtonStyle: {
        marginLeft: vw(13.3),
    },
    reviewHeading: {
        color: Colors.white,
        fontSize: vh(20),
        marginLeft: vw(13.3),
        fontFamily: 'SourceSansPro-Semibold',
        textTransform: 'capitalize',
        top:vh(-3)
    },
    accountHead: {
        padding: vw(13.3),
        paddingTop: vw(19.7),
    },
    reviewHeadingAccount: {
        color: Colors.black,
        fontSize: vh(16.7),
        fontFamily: 'SourceSansPro-Semibold',
        textTransform: 'uppercase'
    },
    listView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: vw(13.3),
        backgroundColor: Colors.white
    },
    listText: {
        color: Colors.lightBlack,
        fontSize: vh(16.7),
        fontFamily: 'SourceSansPro-Regular',
        textTransform: 'capitalize',
        paddingVertical: vh(21.3),
    },
    separator: {
        flex: 1,
        justifyContent: 'center',
        height: vw(0.7),
        backgroundColor: Colors.lightGray,
    },
    availableOuterView: {
        backgroundColor: Colors.lightGray,
        height: vh(16.7)
    },
    bottomView: {
        backgroundColor: Colors.lightGray,
        height: vh(16.7)
    },
    bottomStyle: {
        borderBottomWidth: vw(1),
        borderColor: Colors.veryVeryLightGray
    }
})

export default ReviewStyle;