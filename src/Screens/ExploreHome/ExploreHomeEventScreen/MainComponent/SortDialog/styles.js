import { StyleSheet } from 'react-native'
import { vw, vh, Colors } from '../../../../../Constants';

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    dialogboxStyle: {
        width: '100%',
        backgroundColor: Colors.whitishGray,
    },
    alertTextStyle: {
        color: Colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: vw(17),
        textAlign: 'left',
        textTransform: 'uppercase',
        color: Colors.newGrey,
        margin: vw(17),
        marginLeft: vw(12.3)
    },
    listView: {
        backgroundColor: Colors.white,
        padding: vw(21.7),
        paddingLeft: vw(28),
        borderBottomWidth: vw(1.5),
        borderBottomColor: Colors.whitishGray,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listText: {
        textTransform: 'capitalize',
        fontFamily: 'Poppins-Regular',
        fontSize: vw(17),
        color: Colors.darkGray2
    },
    
})
export default styles;