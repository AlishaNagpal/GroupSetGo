import { StyleSheet } from 'react-native'
import { vw, vh, Colors, DesignWidth } from '../../Constants';

export default styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: Colors.veryVeryLightGray
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
    backButtonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: vw(13),
    },
    headerText: {
        color: Colors.white,
        fontSize: vh(20),
        fontFamily: 'SourceSansPro-Semibold',
        marginLeft: vw(5),
    },
    skipText:{
        color: Colors.white,
        fontFamily:'SourceSansPro-Regular',
        fontSize:vh(15.3)
    },
    skipView:{
        paddingRight: vw(13)
    },
    stepText:{
        color: Colors.fadedGray,
        fontSize:vh(14.7),
        fontFamily:'SourceSansPro-Regular',
    },
    progressBar:{
        marginLeft: vw(13),
        marginRight: vw(13),
        width: vw(388),
        marginTop: vh(8.7)
    },
    bottomView:{
        backgroundColor: Colors.white,
        width: vw(DesignWidth),
        height: vh(591.7),
        marginTop: vh(13),
        alignItems:'center'
    },
    rateHost:{
        marginTop: vh(30.3),
        fontFamily:'Poppins-Medium',
        fontSize: vh(16.7)
    },
    maleImage:{
        height: vw(90),
        width: vw(90),
        borderRadius: vw(55),
        marginTop: vh(13),
    },
    starView:{
        marginTop: vh(18),
        flexDirection:'row',
        alignSelf:'center',
    },
    experienceView:{
        marginTop: vh(24)
    },
    experienceText:{
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vh(16.7)
    },
    textInput:{
        height: vh(130),
        width: vw(380),
        marginLeft: vw(13.7),
        backgroundColor: Colors.veryVeryLightGray,
        marginRight: vw(13.7),
        marginTop: vh(13.7),
        paddingLeft: vw(10),
        paddingTop: vh(10),
        paddingRight: vw(10)
    },
    buttonStyle:{
        height: vw(66.7),
        width: vw(66.7),
        borderRadius: vw(34),
        alignItems:'center',
        justifyContent:'center',
        marginTop: vh(100),
        marginLeft: vw(320)
    },
    icon:{
        marginTop: vh(5)
    },
    containerStyleModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    dialogboxStyle: {
        width: vw(300),
        height: vh(200),
        backgroundColor: Colors.white,
        borderRadius: vh(20),
    },
    alertTextStyle: {
        color: Colors.black,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(16.7),
        marginHorizontal: vw(40),
        marginTop: vh(55.3),
        textAlign: 'center'
    },
    buttonsViewStyle: {
        marginTop: vh(42),
        borderTopColor: Colors.veryVeryLightGray,
        borderTopWidth: vw(1)
    },
    yesContinueButtonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: Colors.fadedGray2,
        marginTop: vh(20)
    },
    yesContinueTextStyle: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(16.7),
        color: Colors.fadedRed,
    },
});