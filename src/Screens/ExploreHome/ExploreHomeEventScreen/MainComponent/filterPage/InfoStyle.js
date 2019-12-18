import { StyleSheet } from 'react-native'
import { vw, vh, Colors } from '../../../../../Constants'

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    dialogboxStyle: {
        width: vw(366.7),
        backgroundColor: Colors.white,
        borderRadius: vh(20),
    },
    alertTextStyle: {
        color: Colors.black,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(15.3),
        marginHorizontal: vw(20),
        marginTop: vw(63.3),
        textAlign: 'center'
    },
    infoIconView: {
        position: 'absolute',
        top: vh(76.3),   
    },
    infoIcon: {
        left: vw(35)
    },
})
export default styles;