import { StyleSheet } from 'react-native';
import { vh, vw, Colors } from '../../../Constants'

export default styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    headerView: {
        flexDirection: 'row',
        marginTop: vh(40),
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
        borderRadius: vh(20),
        backgroundColor: Colors.white,
        paddingLeft: vw(10),
        width: vw(260),
        borderWidth: vh(1),
        borderColor: Colors.lightGray,
        height: vh(34),
        alignItems: 'center'
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
        fontSize: vh(20)
    },
    allEvents: {
        marginLeft: vw(28),
        fontFamily: 'SourceSansPro-Bold',
        fontSize: vh(20),
        marginTop: vh(15),
    },
    flatlistView: {
        marginLeft: vw(13.7),
        marginTop: vh(11),
        backgroundColor: Colors.white,
        height: vw(166.7),
        width: vw(360),
        borderWidth: vw(0.2),
        borderColor: Colors.fadedGray,
        borderRadius: vh(10),
    },
    flatlistImage: {
        height: vw(166.7),
        width: vw(360),
        borderTopRightRadius: vh(10),
        borderTopLeftRadius: vh(10)
    },
    heart: {
        position: 'absolute',
        marginLeft: vw(320),
        marginTop: vh(10),
    },
    cheers: {
        height: vh(22.7),
        width: vh(25.3)
    },
    cheersView: {
        position: 'absolute',
        backgroundColor: Colors.black,
        height: vh(40.3),
        width: vh(40.3),
        borderRadius: vh(25),
        alignItems: 'center',
        top: vw(125),
        left: vw(10),
        justifyContent:'center'
    },
    belowImage: {
        height: vh(70),
        width: vw(360),
        backgroundColor: Colors.white,
        shadowOpacity: vw(1),
        shadowColor: Colors.fadedGray,
        borderBottomLeftRadius : vh(10),
        borderBottomRightRadius: vh(10)
    },
    belowImage2: {
        height: vh(93),
        width: vw(186.7),
        backgroundColor: Colors.white,
        shadowOpacity: vw(1),
        shadowColor: Colors.fadedGray,
        borderBottomLeftRadius : vh(10),
        borderBottomRightRadius: vh(10)
    },
    timeText: {
        color: Colors.fadedRed,
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(15.3)
    },
    headingText: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(18.7),
        marginTop: vh(-3)
    },
    headingText2:{ 
        fontSize: vw(16.7), 
        width: vw(186.7), 
        height: vh(19) ,
        fontFamily: 'SourceSansPro-Semibold',
    },
    moneyView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:vh(-7)
    },
    place: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(14),
        color: Colors.fadedGray,
        top: vw(5)
    },
    place2: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(14),
        color: Colors.fadedGray,
        top: vw(3)
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
        justifyContent: 'space-between',
        marginTop: vh(8)
    },
    goingText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(12),
        color: Colors.fadedGray
    },
    goingIcon: {
        flexDirection: 'row',
        alignContent:'center',
        justifyContent:'center'
    },
    flatlistHeight: {
        height: vh(250)
    },
    flatlistHeight2: {
        height: vh(230)
    },
    flatlist2Heart: {
        position: 'absolute',
        left: vw(155),
        marginTop: vh(10)
    },
    flatlist2Image: {
        height: vw(106.7),
        width: vw(186.7),
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
        flexDirection: 'row',
        top: vh(-2)
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
    runIcon:{
        height: vh(11.7),
        width: vw(12.3)
    }
})
