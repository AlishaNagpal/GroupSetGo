import { StyleSheet } from 'react-native';
import { vh, vw, Colors, DesignWidth } from '../../../../../Constants'

export default styles = StyleSheet.create({
    mainContainer: {
         flexGrow: 1,
    },
    detailView: {
        flexDirection: 'column',
        marginTop: vh(16)
    },
    detailsTextHead: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vh(16),
        marginLeft: vw(14)
    },
    detailsText: {
        marginLeft: vw(14),
        marginRight: vw(18),
        color: Colors.fadedGray,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vh(16)
    },
    line: {
        width: vw(383),
        backgroundColor: Colors.lightGray,
        height: vh(2),
        marginHorizontal: vw(20),
        marginBottom: vh(10),
        marginTop: vh(18),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonStyle: {
        height: vh(36.7),
        width: vw(86.7),
        borderRadius: vh(1.7),
        backgroundColor: Colors.fadedRed,
        marginRight: vw(13.3),
        justifyContent: 'center',
        alignItems: 'center'
    },
    money: {
        color: Colors.white,
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vh(16)
    },
    separator: {
        backgroundColor: Colors.whitishGray,
        padding: vh(6),
    },
    mapStyle: {
        flex: 1,
        height: vh(226.7),
        width: vw(414)
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: vh(10)
    },
    gradient: {
        height: vh(50),
        width: vh(50),
        position: 'absolute',
        top: vh(650),
        left: vw(350),
        borderRadius: vh(25),
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewMoreText: {
        color: Colors.fadedRed,
        marginRight: vw(13.3)
    },
    containerStyle: {
        flex: 1,
        alignItems: 'center',
    },
    headerView: {
        height: vh(90),
        backgroundColor: Colors.fadedRed,
        width: vw(DesignWidth),
    },
    backButtonStyle: {
        marginLeft: vw(13.3),
        alignSelf: 'flex-start',
    },
    headerStyle:{
        marginTop: vh(40),
        flexDirection:'row',
        alignItems:'center',
    },
    headerReview:{
        marginLeft:vw(10),
        color: Colors.white,
        fontSize: vh(20),
        fontFamily: 'SourceSansPro-Semibold'
    },
    reviewFLMainView:{
        marginTop: vh(13.8),
        backgroundColor:Colors.white,
        marginBottom: vh(17),
        marginLeft: vw(10)
    },
    imageHeaderView: {
        flexDirection: 'row',
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
        justifyContent: 'space-evenly',
        marginLeft: vw(200)
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
    seperator:{
        width: vw(DesignWidth),
        height: vh(1),
        backgroundColor: Colors.lightGray
    }
})
