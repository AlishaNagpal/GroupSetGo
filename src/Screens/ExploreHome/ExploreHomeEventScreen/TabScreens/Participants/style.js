import { StyleSheet } from 'react-native';
import { vh, vw, Colors } from '../../../../../Constants';

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    viewOne: {
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: vw(0.7),
        paddingBottom: vw(14.7),
        margin: vw(13),
    },
    orgHeading: {
        fontSize: vh(15.3),
        fontFamily: 'SourceSansPro-Semibold',
        marginBottom: vw(9.7),
    },
    picView: {
        flexDirection: 'row',
    },
    orgPic: {
        height: vw(52),
        width: vw(52),
        borderRadius: vw(26),
    },
    nameView: {
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: vw(7.7)
    },
    orgName: {
        fontSize: vh(15.3),
        fontFamily: 'SourceSansPro-Semibold',
    },
    ratingView: {
        height: vw(17.7),
        width: vw(32.3),
        backgroundColor: Colors.darkGreen,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: vw(2.7),
        paddingRight: vw(2.7),
        justifyContent: 'space-between',
        borderRadius: vw(1.9)
    },
    ratingText: {
        color: 'white',
        fontSize: vh(12),
        fontFamily: 'SourceSansPro-Semibold',
    },
    viewTwo: {
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: vw(0.7),
    },
    flatListView: {
        flexDirection: 'row',
        marginTop: vw(12.5),
        marginBottom: vw(12.5),
        marginLeft: vw(13),
    },
    myFlatList: {
        height: vh(230)
    },
    check: {
        position: 'absolute',
        top: vw(40),
        left: vw(40)
    },
    separator: {
        flex: 1,
        justifyContent: 'center',
        height: vw(0.7),
        backgroundColor: Colors.lightGray,
    },
    leftView: {
        flex: 0.5,
        flexDirection: 'row',
    },
    rightView: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    chatView: {
        height: vw(23.3),
        width: vw(23.3),
        borderRadius: vw(11.65),
        alignItems: 'center'
    },
    num: {
        color: 'white',
        fontSize: vw(13.3),
        fontFamily: 'SourceSansPro-Semibold',
        padding: vw(2)
    },
    msgView: {
        flexDirection: 'row',
    },
    deleteChat: {
        position: 'absolute',
        right: 10,
        top: 200,
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewThree: {
        margin: vw(13),
        marginBottom: vw(38)
    },
    waitPic: {
        height: vw(52),
        width: vw(52),
        borderRadius: vw(26),
        marginRight: vw(9),
    },
})

export default styles;