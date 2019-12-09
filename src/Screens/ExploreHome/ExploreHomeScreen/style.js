import { StyleSheet } from 'react-native';
import { vh, vw, Colors } from '../../../Constants'

export default styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    headerView: {
        flexDirection: 'row',
        marginTop: vh(50),
        alignItems: 'center'
    },
    headerImage: {
        height: vh(40),
        width: vh(40),
        borderRadius: vh(20),
        marginLeft: vw(20)
    },
    headerTextInput: {
        fontSize: vh(15.3),
        paddingLeft: vw(10)
    },
    textInputView: {
        flexDirection: 'row',
        marginLeft: vw(10),
        shadowOpacity: vh(0.2),
        shadowColor: Colors.gray,
        borderRadius: vh(20),
        backgroundColor: Colors.white,
        paddingLeft: vw(10),
        width: vw(260),
        borderWidth: vh(0.5),
        borderColor: Colors.lightGray,
        height: vh(34),
        alignItems:'center'
    },
    map: {
        marginLeft: vw(10)
    },
    notification: {
        marginLeft: vw(10)
    },
    sortFilterView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: vh(13.7),
        marginLeft: vw(69.7)
    },
    sortStyle: {
        borderRadius: vh(5),
        borderColor: Colors.lightGray,
        borderWidth: vw(1),
        height: vh(26.7),
        width: vw(66.7),
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: vw(10)
    },
    sortText: {
        color: Colors.black,
        fontWeight: '600',
        alignSelf: 'center',
        fontSize: vw(14.7),
        fontFamily: 'SourceSansPro-Semibold'
    },
    recommendedText: {
        marginLeft: vw(28),
        marginTop: vh(17),
        fontFamily: 'SourceSansPro-Bold',
        fontSize: vh(17)
    },
    allEvents: {
        marginLeft: vw(28),
        fontFamily: 'SourceSansPro-Bold',
        fontSize: vh(17),
        marginTop: vh(20),
    },
    flatlistView: {
        marginLeft: vw(20),
        marginRight: vw(20),
        marginTop: vh(10),
        backgroundColor: Colors.white,
        shadowColor: Colors.gray,
        shadowOpacity: vh(0.5),
        height: vw(230),
        width: vw(340),
        borderWidth: vw(0.2),
        borderColor: Colors.fadedGray,
        borderRadius: vh(10),
    },
    flatlistImage: {
        height: vw(138),
        width: vw(340),
        borderTopRightRadius: vh(10),
        borderTopLeftRadius: vh(10)
    },
    heart: {
        position: 'absolute',
        marginLeft: vw(310),
        marginTop: vh(10)
    },
    heart2: {
        position: 'absolute',
        marginLeft: vw(310),
        marginTop: vh(40)
    },
    cheers: {
        height: vh(25),
        width: vh(25)
    },
    cheersView: {
        position: 'absolute',
        backgroundColor: Colors.black,
        height: vh(30),
        width: vh(30),
        borderRadius: vh(25),
        alignItems: 'center',
        top: vw(100),
        left: vw(10)
    },
    belowImage: {
        marginTop: vh(10)
    },
    timeText: {
        color: Colors.fadedRed,
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(15.3)
    },
    headingText: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(18.7)
    },
    moneyView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    place: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(14),
        color: Colors.fadedGray,
        top: vw(5)
    },
    elongatedView: {
        height: vh(12),
        width: vw(1),
        backgroundColor: Colors.fadedGray,
        top: vw(5)
    },
    moneyText: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(13.7),
        top: vw(5)
    },
    moneyPerson: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(13.7),
        top: vw(5)
    },
    goingView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    goingText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(12),
        color: Colors.fadedGray
    },
    goingIcon: {
        flexDirection: 'row'
    },
    flatlistHeight: {
        height: vh(230)
    },
    flatlist2Heart: {
        position: 'absolute',
        left: vw(155),
        marginTop: vh(10)
    },
    flatlist2Image: {
        height: vw(126),
        width: vw(190),
        borderTopRightRadius: vh(10),
        borderTopLeftRadius: vh(10)
    },
    IconView: {
        position: 'absolute',
        backgroundColor: Colors.black,
        height: vh(30),
        width: vh(30),
        borderRadius: vh(25),
        alignItems: 'center',
        top: vh(70),
        marginLeft: vw(10),
        justifyContent: 'center'
    },
    iconSize: {
        height: vh(20),
        width: vh(20)
    },
    perPerson: {
        flexDirection: 'row'
    },
    calendar: {
        height: vh(25),
        width: vh(25)
    },
    iconTab: {
        marginTop: 5
    },
    mapStyle: {
        height: vh(580),
        width: vw(414),
        marginTop: vh(10)
    },
    mainCardView: {
        flex: 1,
        position: 'absolute',
        height: vw(230),
        width: vw(340),
        borderRadius: vh(16.7),
        marginHorizontal: vw(40),
        marginTop: vh(10),
        backgroundColor: Colors.white,
        borderWidth: vw(0.2),
        borderColor: Colors.fadedGray,
        bottom: vh(60)

    },
    marker: {
        height: 30,
        width: 30
    },
    calloutView: {
        width: 180,
        alignItems: 'center'
    },
})
