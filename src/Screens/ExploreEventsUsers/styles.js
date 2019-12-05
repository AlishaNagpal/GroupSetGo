import { StyleSheet } from 'react-native'
import { vh, Colors, vw, DesignWidth, DesignHeight } from '../../Constants';

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
    },
    headerView: {
        // alignItems: 'center',
        height: vh(90),
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
        height: vh(DesignHeight - vh(90)),
    }
});

export default styles;