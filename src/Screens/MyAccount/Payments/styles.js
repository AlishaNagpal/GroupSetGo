import { StyleSheet } from 'react-native';
import { vh, vw, Colors, } from '../../../Constants';

const ReviewStyle = StyleSheet.create({
    containerView: {
        flex: 1,
        alignItems: 'flex-end'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: vh(200)
    },
    imageStyle: {
        height: vw(100),
        width: vw(100)
    },
    text: {
        marginTop: vh(30),
        color: Colors.fadedGray
    },
    backIcon:{
        marginTop:vh(30),
        marginLeft:vw(20)
    }
})

export default ReviewStyle;