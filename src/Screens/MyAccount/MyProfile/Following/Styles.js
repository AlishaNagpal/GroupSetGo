import { Colors, vh, vw } from "../../../../Constants";
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingTop: vh(100)
    },
    text: {
        marginTop: vh(30),
        color: Colors.newGray
    },
    imageStyle: {
        height: vw(100),
        width: vw(100)
    },
})