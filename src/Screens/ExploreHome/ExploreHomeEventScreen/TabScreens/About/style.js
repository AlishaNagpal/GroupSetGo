import { StyleSheet } from 'react-native';
import { vh, vw, Colors } from '../../../../../Constants'

export default styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginBottom: vh(20)
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
        alignItems: 'center'
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
    line2: {
        width: vw(450),
        backgroundColor: Colors.lightGray,
        height: vh(2),
        marginBottom: vh(10),
        marginTop: vh(18),
    },
    viewMore: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: vh(20),
        marginBottom: vh(19.3)
    },
    viewMoreText:{
        color: Colors.fadedRed,
        fontFamily:'SourceSansPro-Regular',
        fontSize: vh(15.3),
        marginRight: vw(10)
    },
    separator: {
        backgroundColor: Colors.whitishGray,
        padding: vh(6),
    },
    mapStyle:{
        flex:1,
        height: vh(226.7),
        width: vw(414)
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: vh(10)
    },
})
