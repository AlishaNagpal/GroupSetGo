import { StyleSheet } from 'react-native'
import { vh, Colors, vw, DesignWidth, DesignHeight } from '../../Constants';

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
    },
    headerView: {
        // height: vh(70),
        backgroundColor: Colors.fadedRed,
        width: vw(DesignWidth),
    },
    backButtonStyle: {
        marginLeft: vw(13.3),
        alignSelf: 'flex-start',
        marginTop: vh(20)
    },
    tabbarViewStyle: {
        width: vw(DesignWidth),
        height: vh(DesignHeight - vh(70)),
    }
});

export default styles;