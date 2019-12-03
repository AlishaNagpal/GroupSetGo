import { StyleSheet } from 'react-native';
import { vh, vw, Colors } from '../../../Constants'

export default styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    viewOne: {
        height: vh(270),

    },
    pic: {
        height: vh(270),
        width: vw(414)
    },
    backBtn: {
        position: 'absolute',
        top: vh(41.3),
        left: vw(13.3)
    },
    flagBtn: {
        position: 'absolute',
        top: vh(40),
        right: vw(13.3)
    },
    cheersView: {
        backgroundColor: 'black',
        opacity: 0.75,
        position: 'absolute',
        left: vw(13.3),
        bottom: vh(12),
        height: vh(40.3),
        width: vh(40.3),
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: vh(20.1),
    },
    viewTwo: {
       
    },
    viewTwo1: {
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
        fontSize: vh(15.3)
    },
    titleText: {
        paddingTop: vh(8),
        fontWeight: '500',
        fontSize: vh(18.7)
    },
    tagText: {
        color: Colors.grey,
        fontSize: vh(14),
        paddingTop: vh(3),
        textTransform: "capitalize"
    },
    imgView: {
        backgroundColor: 'rgba(184, 184, 184, 0.3)',
        height: vh(40),
        width: vh(40),
        borderRadius: vh(20),
        marginRight: vw(0.7),
        marginTop: vh(10)
    },
    ratingView: {
        backgroundColor: 'rgba(34, 138, 51, 1)',
        height: vh(20.3),
        width: vh(32.3),
        marginRight: vh(2),
        marginTop: vh(3),
        flexDirection: 'row',
        alignItems: 'center',
        padding: vh(2.3)
    },
    ratingText: {
        color: 'white',
        fontSize: vh(12),
        fontWeight: '600'
    },
    viewTwo2: {
        borderBottomWidth: vh(0.7),
        borderBottomColor: 'rgba(184, 184, 184, 0.3)',
        paddingBottom: vh(7.3)
    },
    progressText: {
        fontSize: vh(13.7),
        paddingLeft: vw(67),
        paddingTop: vh(10.3)
    },
    progressBar: {
        margin: vh(13),
        backgroundColor: 'rgba(222, 222, 222, 1)',
        height: vh(6),
        borderRadius: vh(3),
        marginBottom: vh(3.3)
    },
    progress: {
        backgroundColor: 'rgba(34, 138, 51, 1)',
        width: vh(150),
        flex: 1,
        borderRadius: vh(3),
    },
    progressValue: {
        flexDirection: 'row', 
        marginLeft: vw(257.3)
    },
    viewTwo3: { 
        padding: vh(15.3),
        borderBottomWidth: vh(0.7),
        borderBottomColor: 'rgba(184, 184, 184, 0.3)',
     },
     viewTwo4: {
         padding: vh(20.7),
         flexDirection: 'row', 
         alignItems: 'center',
         justifyContent: 'space-around'
     },
    viewThree: {
        height: vh(372),

    },
})
