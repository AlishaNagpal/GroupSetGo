import { StyleSheet } from 'react-native';
import { vh, vw, Colors, DesignWidth } from '../../../../../Constants'

export default styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
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
        backgroundColor: Colors.veryVeryLightGray
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
    }
})
