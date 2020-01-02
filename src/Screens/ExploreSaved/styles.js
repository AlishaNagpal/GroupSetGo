import { Colors, vh, vw } from "../../Constants";
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    profile: {
        height: vw(40),
        width: vw(40),
        borderRadius: vw(25)
    },
    text: {
        marginTop: vh(30),
        color: Colors.newGray
    },
    imageStyle: {
        height: vw(100),
        width: vw(100)
    },
    header:{
        marginTop: vh(40),
        marginLeft: vw(10),
        flexDirection:'row',
        alignItems:'center',
        marginBottom:vw(10)
    },
    saveText:{
        fontFamily:'SourceSansPro-Semibold',
        fontSize:vh(18),
        left:vw(10)
    },
    flatlistView: {
        marginTop: vh(11),
        backgroundColor: Colors.white,
        width: vw(380),
        borderRadius: vh(10),
        borderColor: Colors.verLightGrey,
        borderWidth:vw(0.5),
        alignSelf:'center',
        marginBottom:vw(20)
    },
    flatlistImage: {
        height: vh(166.7),
        width: vw(380),
        borderTopRightRadius: vh(10),
        borderTopLeftRadius: vh(10)
    },
    heart: {
        position: 'absolute',
        marginLeft: vw(350),
        marginTop: vh(10),
    },
    cheersView: {
        position: 'absolute',
        backgroundColor: Colors.black,
        height: vh(40.3),
        width: vh(40.3),
        borderRadius: vh(25),
        alignItems: 'center',
        top: vh(120),
        left: vw(10),
        justifyContent:'center'
    },
    cheers: {
        height: vh(22.7),
        width: vh(25.3)
    },
    belowImage: {
        height: vh(85),
        width: vw(370),
        backgroundColor: Colors.white,
        borderBottomLeftRadius : vh(10),
        borderBottomRightRadius: vh(10),
        borderColor: Colors.veryVeryLightGray,
        borderBottomWidth: vw(0.5),
        borderLeftWidth:vw(0.5),
        borderRightWidth:vw(0.5),
    },
    goingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: vh(8)
    },
    timeText: {
        color: Colors.fadedRed,
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(15.3)
    },
    goingIcon: {
        flexDirection: 'row',
        alignContent:'center',
        justifyContent:'center'
    },
    runIcon:{
        height: vh(11.7),
        width: vw(12.3)
    },
    goingText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(12),
        color: Colors.fadedGray
    },
    headingText: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(18.7),
    },
    moneyView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:vh(5)
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
})