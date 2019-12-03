import { StyleSheet } from 'react-native';
import { vh, vw, Colors } from '../../../../Constants'

export default styles = StyleSheet.create({
    mainView: {
        flex: 1,
        marginTop: vh(25),
    },
    viewOne: {
        height: vh(270),

    },
    pic: {
        height: vh(270),
        width: vw(414)
    },
    backButton: {
        position: 'absolute',
        top: vh(41.3),
        left: vw(13.3)
    },
    shade: {
        position: 'absolute',
        opacity: 0.3,
        height: vh(70),
        width: vw(414),
        backgroundColor: Colors.black,
    },
    flagBtn: {
        position: 'absolute',
        top: vh(40),
        right: vw(13.3)
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
    belowImage: {
        flexDirection: 'row',
        borderBottomWidth: vh(0.7),
        borderBottomColor: 'rgba(184, 184, 184, 0.3)',
        paddingTop: vh(10.3),
        padding: vh(13.3),
        paddingBottom: vh(10.3),
    },
    redText: {
        color: Colors.fadedRed,
        fontWeight: '600',
        textTransform: "uppercase",
        fontSize: vw(18),
        fontFamily: 'SourceSansPro-Semibold'
    },
    titleText: {
        paddingTop: vh(8),
        fontWeight: '500',
        fontSize: vw(18.7),
        fontFamily: 'SourceSansPro-Semibold'
    },
    tagText: {
        color: Colors.fadedGray,
        fontSize: vw(14),
        paddingTop: vh(3),
        textTransform: "capitalize",
        fontFamily: 'SourceSansPro-Regular'
    },
    profilePicture: {
        justifyContent: 'flex-end',
        left: vw(65),
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
        height: vw(22),
        width: vw(40),
        marginRight: vh(2),
        marginTop: vh(3),
        flexDirection: 'row',
        alignItems: 'center',
        padding: vh(2.3)
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
        marginLeft: vw(257.3)
    },
    barNumber: {
        color: Colors.fadedGray2,
        fontSize: vh(12)
    },
    barNumber2: {
        color: Colors.fadedGray2,
        fontSize: vh(12),
        marginLeft: vw(100)
    },
    viewTwo3: {
        padding: vh(15.3),
        borderBottomWidth: vh(0.7),
        borderBottomColor: 'rgba(184, 184, 184, 0.3)',
    },
    location: {
        flexDirection: 'row',
        paddingBottom: vh(15.3)
    },
    locationText: {
        fontSize: vw(16),
        color: Colors.darkGray2,
        fontFamily: 'SourceSansPro-Regular'
    },
    money: {
        fontSize: vw(16),
        color: Colors.darkGray2,
        fontFamily: 'SourceSansPro-Regular'
    },
    moneyView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconPlace: {
        flexDirection: 'row'
    },
    cancel: {
        fontSize: vw(16),
        fontFamily: 'SourceSansPro-Semibold',
        color: Colors.black
    },
    viewTwo4: {
        padding: vh(20.7),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    center: {
        alignItems: 'center'
    },
    joinText: {
        fontSize: vh(15),
        color: Colors.green
    },
    saveText: {
        fontSize: vh(15),
        color: Colors.fadedRed
    },
    shareText: {
        fontSize: vh(15),
        color: Colors.shareBlue
    },
    separator: {
        backgroundColor: Colors.whitishGray,
        padding: vh(6)
    }
})
