import {StyleSheet} from 'react-native';
import {Colors, vh, vw} from '../../../../Constants';
const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: Colors.profileGrey
    },
    cardStyle: {
        margin: vh(13.3),
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: vh(3.3)
    },
    img: {
        marginHorizontal: vw(26),
        marginVertical: vh(46.7)
    },
    separator: {
        backgroundColor: Colors.profileGrey,
        width: vh(1),
        height: '70%'
    },
    textView: {
        paddingLeft: vw(12.7),
    },
    heading: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(18.7)
    },
    title: {
        color: Colors.fadedGray2,
        fontFamily: 'SourceSansPro-Regular'
    },
})
export default Styles;