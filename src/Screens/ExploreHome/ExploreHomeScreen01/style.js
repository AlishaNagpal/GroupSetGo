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
        height: vh(33.3),
        width: vw(200),
        marginLeft: vw(13),
    },
    textInputView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: vw(10),
        shadowOpacity: vh(0.2),
        shadowColor: Colors.gray,
        borderRadius: vh(20),
        backgroundColor: Colors.white,
        paddingLeft: vw(10),
        width: vw(260),
    },
    map: {
        marginLeft: vw(10)
    },
    notification: {
        marginLeft: vw(10)
    },
    sortFilterView:{
        flexDirection:'row',
        alignItems:'center',
        marginTop: vh(13.7),
        marginLeft: vw(69.7)
    },
    sortStyle:{
        borderRadius: vh(5),
        borderColor: Colors.lightGray,
        borderWidth: vw(1),
        height: vh(26.7),
        width: vw(66.7),
        alignSelf:'center',
        justifyContent:'center',
        marginLeft: vw(10)
    },
    sortText:{
        color: Colors.black,
        fontWeight:'600',
        alignSelf:'center',
        fontSize:vh(14.7),
        fontFamily:'SourceSansPro-Semibold'
    },
    recommendedText:{
        marginLeft: vw(28),
        marginTop: vh(17),
        fontFamily: 'SourceSansPro-Bold',
        fontSize: vh(17)
    },
    allEvents:{
        marginLeft: vw(28),
        fontFamily: 'SourceSansPro-Bold',
        fontSize: vh(17)
    },
    flatlistView:{
        marginLeft: vw(20),
        marginTop: vh(10),
        backgroundColor:Colors.white,
        shadowColor:Colors.gray,
        shadowOpacity: vh(0.5),
        height: vh(215),
        width: vw(360),
        borderWidth: vw(0.2),
        borderColor: Colors.fadedGray,
        borderRadius: vh(10),
    },
    flatlistImage:{
        height: vh(140),
        width: vw(360),   

    },
    heart:{
        marginLeft: vw(327.7),
        marginTop: vh(10)
    },
    cheers:{
        height: vh(25),
        width: vh(25)
    },
    cheersView:{
        backgroundColor: Colors.black,
        height: vh(30),
        width: vh(30),
        borderRadius: vh(25),
        alignItems:'center',
        marginTop:vh(55),
        marginLeft: vw(10)
    },
    belowImage:{
        backgroundColor: Colors.white,
        width: vw(360),
        marginTop: vh(10)
    },
    timeText:{
        color: Colors.fadedRed,
        fontFamily:'SourceSansPro-Semibold',
        fontSize: vh(15.3)
    },
    headingText:{
        fontFamily:'SourceSansPro-Semibold',
        fontSize: vh(18.7)
    },
    moneyView:{
        flexDirection:'row',
        alignItems:'center',
    },
    place:{
        fontFamily:'SourceSansPro-Regular',
        fontSize: vh(12),
        color: Colors.fadedGray
    },
    elongatedView:{
        height: vh(12),
        width: vw(1),
        backgroundColor: Colors.fadedGray
    },
    moneyText:{
        fontFamily: 'SourceSansPro-Semibold',
        fontSize:vh(13.7)
    },
    moneyPerson:{
        fontFamily: 'SourceSansPro-Regular',
        fontSize:vh(13.7)
    },
    goingView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    goingText:{
        fontFamily:'SourceSansPro-Regular',
        fontSize: vh(12),
        color: Colors.fadedGray
    },
    goingIcon:{
        flexDirection:'row'
    },
    flatlistHeight:{
        height: vh(230)
    },
    flatlist2Heart:{
        marginLeft: vw(170),
        marginTop: vh(10)
    },
    flatlistHeight2:{
        height: vh(208),
    },
    flatlist2Image:{
        height: vh(106),
        width: vw(227)
    },
    IconView:{
        backgroundColor: Colors.black,
        height: vh(30),
        width: vh(30),
        borderRadius: vh(25),
        alignItems:'center',
        marginTop:vh(45),
        marginLeft: vw(10),
        justifyContent:'center'
    },
    iconSize:{
        height: vh(20),
        width: vh(20)
    },
    perPerson:{
        flexDirection:'row'
    },
    gradient:{
        height: vh(50),
        width: vh(50),
        position:'absolute',
        top: vh(600),
        left:vw(350),
        borderRadius: vh(25),
        alignItems:'center',
        justifyContent:'center'
    },
    calendar:{
        height: vh(25),
        width: vh(25)
    },
    iconTab:{
        marginTop: 5 
    }
})
