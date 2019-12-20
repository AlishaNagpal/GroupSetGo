import { Colors, vh, vw } from "../../Constants";
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginTop: vh(30),
        color: Colors.fadedGray
    },
    imageStyle: {
        height: vw(100),
        width: vw(100)
    }
})