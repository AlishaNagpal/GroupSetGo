import { StyleSheet } from 'react-native';
import { vh, vw, Colors, DesignHeight, DesignWidth } from '../../../../../Constants';

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: Colors.white
    },
    headerView: {
        alignItems: 'center',
        height: vh(86.7),
        backgroundColor: Colors.fadedRed,
        width: vw(DesignWidth),
        flexDirection: 'row',
        paddingTop: vh(30),
        justifyContent: 'space-between'
    },
    reviewHeadingFilter: {
        color: Colors.white,
        fontSize: vh(25),
        fontFamily: 'SourceSansPro-Semibold',
        paddingLeft: vw(10),
        textTransform: 'capitalize'
    },
    reviewHeadingReset: {
        color: Colors.white,
        fontSize: vh(20),
        fontFamily: 'SourceSansPro-Regular',
        paddingLeft: vw(10),
        textTransform: 'uppercase'
    },
    filterView: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: vw(13),
        paddingRight: vw(13)
    },
    
})

export default styles;