import { StyleSheet } from 'react-native';
import { vh, vw, Colors, DesignHeight, DesignWidth } from '../../../../Constants'

export default styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    pic: {
        height: vh(270),
        width: vw(414)
    },
    backButton: {
        position: 'absolute',
        top: vh(20),
        left: vw(13.3)
    },
    flagBtn: {
        position: 'absolute',
        top: vh(20),
        right: vw(13.3),
        height:vw(50),
    },
    cheersView: {
        backgroundColor: 'black',
        position: 'absolute',
        left: vw(13.3),
        bottom: vh(12),
        height: vh(40.3),
        width: vh(40.3),
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: vh(20.1),
    },
    cheersIcon: {
        height: vh(22.7),
        width: vw(25.3)
    },
    belowImage: {
        flexDirection: 'row',
        borderBottomWidth: vh(0.7),
        borderBottomColor: 'rgba(184, 184, 184, 0.3)',
        paddingTop: vh(10.3),
        padding: vh(13.3),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    redText: {
        color: Colors.fadedRed,
        textTransform: "uppercase",
        fontSize: vw(18),
        fontFamily: 'SourceSansPro-Semibold'
    },
    titleText: {
        paddingTop: vw(8),
        fontSize: vw(18.7),
        fontFamily: 'SourceSansPro-Semibold'
    },
    tagText: {
        color: Colors.fadedGray,
        fontSize: vw(14),
        paddingTop: vw(7),
        textTransform: "capitalize",
        fontFamily: 'SourceSansPro-Regular'
    },
    profilePicture: {
        justifyContent: 'flex-end',
        right: vw(0.7),
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgView: {
        backgroundColor: Colors.tealBlue,
        height: vh(40),
        width: vh(40),
        borderRadius: vh(20),
        marginRight: vw(0.7),
        marginTop: vh(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    ratingView: {
        backgroundColor: Colors.green,
        height: vw(22.3),
        width: vw(35.3),
        marginTop: vw(4.3),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: vh(1.9),
        justifyContent: 'space-evenly'
    },
    ratingText: {
        color: 'white',
        fontSize: vw(12),
        fontWeight: '600'
    },
    viewTwo2: {
        borderBottomWidth: vh(0.7),
        borderBottomColor: Colors.lightGray,
        paddingBottom: vh(7.3)
    },
    progressText: {
        fontSize: vh(16),
        paddingLeft: vw(30),
        paddingTop: vh(10.3),
        fontFamily: 'SourceSansPro-Semibold',
        color: Colors.darkGray2
    },
    progressBar: {
        margin: vh(13),
    },
    progressValue: {
        flexDirection: 'row',
        marginLeft: vw(13)
    },
    barNumber: {
        color: Colors.fadedGray2,
        fontSize: vh(12)
    },
    barNumber2: {
        color: Colors.fadedGray2,
        fontSize: vh(12),
        marginLeft: vw(280)
    },
    viewTwo3: {
        padding: vh(15.3),
        borderBottomWidth: vh(0.7),
        borderBottomColor: 'rgba(184, 184, 184, 0.3)',
    },
    viewTwo4: {
        padding: vw(19),
        paddingBottom: vw(15.3),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    location: {
        flexDirection: 'row',
        paddingBottom: vh(15.3),
        alignItems: 'center',
    },
    locationText: {
        fontSize: vw(16),
        color: Colors.darkGray2,
        fontFamily: 'SourceSansPro-Regular'
    },
    money: {
        fontSize: vw(16),
        color: Colors.darkGray2,
        fontFamily: 'SourceSansPro-Regular',
    },
    moneyView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconPlace: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cancel: {
        fontSize: vw(16),
        fontFamily: 'SourceSansPro-Semibold',
        color: Colors.black
    },
    center: {
        alignItems: 'center'
    },
    joinText: {
        fontSize: vw(15.3),
        color: Colors.fadedRed
    },
    saveText: {
        fontSize: vw(15.3),
    },
    shareText: {
        fontSize: vw(15.3),
        color: Colors.shareBlue,
        marginTop: vh(4)
    },
    goingText: {
        fontSize: vw(15.3),
        color: Colors.green
    },
    chattingText: {
        fontSize: vw(15.3),
        color: Colors.chatBlue
    },
    waitlisted: {
        fontSize: vw(15.3),
        color: Colors.orange
    },
    separator: {
        flex: 1,
        justifyContent: 'center',
        height: vw(0.7),
        backgroundColor: Colors.lightGray,
    },
    separator2: {
        backgroundColor: Colors.whitishGray,
        padding: vh(6)
    },
    tabBarStyle: {
        alignItems: 'center',
        flex:1
    },
    tabBarFont: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(18),
    },
    tabBarUnderline: {
        backgroundColor: Colors.fadedRed,
        height: vh(3),
    },
    divide:{ 
        width: DesignWidth/3
     }
})
