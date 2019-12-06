import { StyleSheet } from 'react-native';
import { vh, vw, Colors } from '../../Constants'

export default styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    mainHeading: {
        fontSize: vw(23.3),
        fontFamily: 'SourceSansPro-Semibold',
        color: Colors.white,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    stepText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(14),
        color: Colors.rosa,
        marginTop: vh(46.7),
        alignSelf: 'center'
    },
    belowStep: {
        fontFamily: 'SourceSansPro-Semibold',
        color: Colors.white,
        fontSize: vw(17),
        alignSelf: 'center',
        fontWeight: '500',
        marginTop: vh(13)
    },
    description: {
        fontFamily: 'SourceSansPro-Regular',
        color: Colors.white,
        width: vw(280),
        fontSize: vw(14),
        textAlign: 'center',
        marginTop: vh(15),
        alignSelf: 'center'
    },
    textInputStyle: {
        backgroundColor: Colors.white,
        width: vw(267),
        height: vh(47),
        borderRadius: vh(20),
        color: Colors.black,
        marginLeft: vw(74),
        marginRight: vw(74),
        marginTop: vh(44),
        paddingLeft: vw(27),
        paddingRight: vw(20),
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.darkViolet,
        borderRadius: vh(23.5),
        height: vh(47),
        width: vw(267),
        marginLeft: vw(74),
        marginRight: vw(74),
        marginTop: vh(24.3),
        borderWidth: vh(1),
        borderColor: Colors.white,
    },
    buttonText: {
        color: Colors.white,
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(16.7),
    },
    iconPos: {
        marginLeft: vw(20),
        marginTop: vh(40)
    },
    radioButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: vh(59),
        marginLeft: vw(150)
    },
    radioButton: {
        marginRight: vw(10),
    },
    radioText: {
        color: Colors.white,
        fontFamily: 'SourceSansPro-Semibold',
        fontWeight: '500',
        fontSize: vw(18)
    },
    eyeIcon: {
        position: 'absolute',
        top: vh(-35),
        left: vw(300)
    },
    datePicker: {
        width: vw(200),
        alignSelf: 'center',
        marginTop: vw(20)
    },
    errorView:{
        position:'absolute',
        top:-30,
        height: vh(50),
        width: vw(420),
        backgroundColor: Colors.beige ,
        alignItems:'center'
    },
    errorMessage:{ 
        fontSize: vh(18), 
        color: Colors.black,
        marginTop: vh(25) 
    }

})
