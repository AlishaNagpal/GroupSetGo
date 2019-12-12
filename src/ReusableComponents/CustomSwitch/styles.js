import { StyleSheet } from 'react-native'
import { vh, Colors, vw, DesignWidth, DesignHeight } from '../../Constants';

const styles = StyleSheet.create({
    containerStyle: {
        width: vw(47.3),
        height: vw(30),
        borderRadius: vw(13),
        justifyContent: 'center',
    },
    switchAnimatedViewStyle: {
        width: vw(26),
        height: vw(26),
        borderRadius: vw(13),
        backgroundColor: 'white',
      },
})
export default styles;