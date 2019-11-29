import { StyleSheet } from 'react-native';
import {vh,vw, Colors} from '../../Constants'

export default styles = StyleSheet.create({
    gradient:{
        flex:1,
    },
    mainHeading:{
        fontSize: vh(26.7),
        fontFamily: 'SourceSansPro-Semibold',
        color: Colors.white,
        fontWeight:'bold',
        alignSelf:'center'
    },
    stepText:{
        fontFamily:'SourceSansPro-Regular',
        fontSize:vh(14),
        color: Colors.rosa,
        marginTop: vh(46.7),
        alignSelf:'center'
    },
    belowStep:{
        fontFamily:'SourceSansPro-Semibold',
        color:Colors.white,
        fontSize:vh(17),
        alignSelf:'center',
        fontWeight:'500',
        marginTop: vh(13)
    },
    description:{
        fontFamily:'SourceSansPro-Regular',
        color:Colors.white,
        width: vw(280),
        fontSize:vh(14),
        textAlign:'center',
        marginTop:vh(15),
        alignSelf:'center'
    },
    textInputStyle:{
        backgroundColor: Colors.white,
        width: vw(267),
        height: vh(40),
        borderRadius:vh(20),
        color: Colors.black,
        marginLeft: vw(74),
        marginRight: vw(74),
        marginTop: vh(44),
        paddingLeft: vw(27)
    },
    buttonStyle:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:null,
        borderRadius:vh(20),
        height: vh(47),
        width: vw(267),
        marginLeft: vw(74),
        marginRight: vw(74),
        marginTop: vh(24.3),
        borderWidth: vh(1),
        borderColor: Colors.white,
    },
    buttonText:{
        color: Colors.white,
        fontFamily:'SourceSansPro-Semibold',
        fontSize:vh(16.7),
    }
    
})
