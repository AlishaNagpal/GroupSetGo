import { StyleSheet } from 'react-native';
import { vh, vw, Colors } from '../../../../../Constants';

const styles = StyleSheet.create({
    mainView: {
        // flex: 1,
    },
    viewOne: {
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: vw(0.7),
        paddingBottom: vw(14.7),
        margin: vw(13),
    },
    orgHeading: {
        fontSize: vh(15.3),
        fontFamily: 'SourceSansPro-Semibold',
        marginBottom: vw(9.7),
    },
    picView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leaveView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    orgPic: {
        height: vw(52),
        width: vw(52),
        borderRadius: vw(26),
    },
    nameView: {
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: vw(7.7)
    },
    orgName: {
        fontSize: vh(15.3),
        fontFamily: 'SourceSansPro-Semibold',
        marginBottom: vw(8)
    },
    ratingView: {
        height: vw(17.7),
        width: vw(32.3),
        backgroundColor: Colors.darkGreen,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: vw(2.7),
        paddingRight: vw(2.7),
        justifyContent: 'space-between',
        borderRadius: vw(1.9)
    },
    ratingText: {
        color: 'white',
        fontSize: vh(12),
        fontFamily: 'SourceSansPro-Semibold',
    },
    leave: {
        backgroundColor: Colors.red,
        height: vh(30),
        width: vw(106.7),
        borderRadius: vh(1.7),
        marginRight: vw(0.7),
        alignItems: 'center'
    },
    leaveText: {
        fontSize: vh(15.3),
        fontFamily: 'SourceSansPro-Semibold',
        color: 'white',
        paddingTop: vh(4)
    },
    viewTwo: {
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: vw(0.7),
        marginLeft: vw(13),
        paddingBottom: vw(13),
    },
    flatListView: {
        flexDirection: 'row',
        marginTop: vw(12.5),
        marginBottom: vw(12.5),
        marginLeft: vw(13),
    },
    myFlatList: {
        height: vh(230)
    },
    check: {
        position: 'absolute',
        top: vw(40),
        left: vw(40)
    },
    separator: {
        flex: 1,
        justifyContent: 'center',
        height: vw(0.7),
        backgroundColor: Colors.lightGray,
    },
    leftView: {
        flex: 0.5,
        flexDirection: 'row',
    },
    rightView: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    chatView: {
        height: vw(23.3),
        width: vw(23.3),
        borderRadius: vw(11.65),
        alignItems: 'center'
    },
    num: {
        color: 'white',
        fontSize: vw(13.3),
        fontFamily: 'SourceSansPro-Semibold',
        padding: vw(2)
    },
    msgView: {
        flexDirection: 'row',
    },
    deleteChat: {
        position: 'absolute',
        right: 10,
        top: 200,
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    plus: {
        flexDirection: 'row',
        width: vw(356)
    },
    plusView: {
        height: vw(52),
        width: vw(52),
        borderRadius: vw(26),
        backgroundColor: Colors.fadedRed,
        alignItems: 'center',
    },
    plusText: {
        color: 'white',
        fontSize: vw(23.3),
        fontFamily: 'SourceSansPro-Regular',
        paddingTop: vw(9.3)
    },
    viewThree: {
        margin: vw(13),
        marginBottom: vw(18.7)
    },
    waitPic: {
        height: vw(52),
        width: vw(52),
        borderRadius: vw(26),
        marginRight: vw(9),
    },
    separator2: {
        backgroundColor: Colors.whitishGray,
        padding: vh(6)
    },
    reviewHead: {
        borderBottomWidth: vw(0.7),
        borderBottomColor: Colors.lightGray,
    },
    reviewText: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(16.7),
        paddingLeft: vw(14.7),
        paddingTop: vw(17),
        paddingBottom: vw(16.3)
    },
    rwView: {
        padding: vw(13.6),
        paddingBottom: 0,
    },
    imgView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imgView2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rwPic: {
        height: vw(52),
        width: vw(52),
        borderRadius: vw(26)
    },
    rwNameView: {
        margin: vw(6.7),
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
    },
    rwName: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vh(15.3),
    },
    rwDate: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vh(13.3),
        color: Colors.midGrey
    },
    reviewRatingView: {
        height: vw(21),
        width: vw(45.7),
        backgroundColor: Colors.darkGreen,
        marginTop: vw(7.4),
        borderRadius: vw(1.9),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    reviewRatingText: {
        fontSize: vw(15),
        fontFamily: 'SourceSansPro-Semibold',
        color: 'white'
    },
    rwText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vh(15.3),
        color: Colors.verLightGrey,
        paddingLeft: vw(1.7),
        paddingRight: vw(27),
    },
    reviewView: { 
        paddingTop: vw(9.9)
    },
    readMore: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vh(15.3),
        color: Colors.fadedRed,
        // position: 'absolute',
        // right: 0,
        // bottom: 0,
    },
    reviewBtn: {
        alignItems: 'center',
        borderTopWidth: vw(0.7),
        borderTopColor: Colors.lightGray,
    },
    readReviewText: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vh(16.7),
        textTransform: 'uppercase',
        color: Colors.fadedRed,
        padding: vw(24)
    },
    flatReview: {
        paddingBottom: vw(17.7),
    },
    settle: {
        alignItems: 'center',
        padding: vw(20),
        paddingTop: vw(26.3),
        backgroundColor: Colors.whitishGray,
        paddingBottom: vw(42)
    },
    gradientStyle: {
        width: vw(374),
        height: vh(53.3),
        borderRadius: vh(26.7),
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    loginButtonTitleStyle: {
        color: 'white',
        fontSize: vw(16.7),
        fontFamily: 'SourceSansPro-Semibold',
        textTransform: 'uppercase'
    },
})

export default styles;