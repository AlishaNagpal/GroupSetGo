import { StyleSheet } from 'react-native'
import { vw, vh, Colors, DesignWidth } from '../../Constants';

export default styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: Colors.veryVeryLightGray
    },
    headerView: {
        height: vh(90),
        backgroundColor: Colors.fadedRed,
        width: vw(DesignWidth),
        flexDirection:'row',
    },
    backButtonStyle: {
        marginLeft: vw(13.3),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: vh(30),
    },
    headerText: {
        color: Colors.white,
        fontSize: vh(20),
        fontFamily: 'SourceSansPro-Semibold',
        marginLeft: vh(5),
        marginBottom: vh(5)
    },
    skipText:{
        color: Colors.white,
        fontFamily:'SourceSansPro-Regular',
        fontSize:vh(15.3)
    },
    skipView:{
        marginTop: vh(47),
        marginLeft: vw(200)
    },
    stepText:{
        color: Colors.fadedGray,
        fontSize:vh(14.7),
        fontFamily:'SourceSansPro-Regular',
        marginLeft: vw(13.7),
        marginTop: vh(15.3),
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
    }
});