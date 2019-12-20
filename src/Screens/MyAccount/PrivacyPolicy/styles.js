import { StyleSheet } from 'react-native';
import { vh, vw, Colors } from '../../../Constants';

const ReviewStyle = StyleSheet.create({
    containerView: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    imageStyle: {
        height: vw(100),
        width: vw(100)
    },
    text: {
        marginTop: vh(30),
        color: Colors.fadedGray
    },
    button: {
        paddingTop: vh(50)
    },
    goBack: {
        padding: vh(10),
        borderWidth: vh(1)
    }
})

export default ReviewStyle;