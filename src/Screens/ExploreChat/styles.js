import { Colors, vh, vw } from "../../Constants";
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    profile: {
        height: vw(40),
        width: vw(40),
        borderRadius: vw(25)
    },
    text: {
        marginTop: vh(30),
        color: Colors.newGray
    },
    imageStyle: {
        height: vw(100),
        width: vw(100)
    },
    header:{
        marginTop: vh(40),
        marginLeft: vw(10),
        flexDirection:'row',
        alignItems:'center'
    },
    saveText:{
        fontFamily:'SourceSansPro-Semibold',
        fontSize:vh(18),
        left:vw(10)
    }
})