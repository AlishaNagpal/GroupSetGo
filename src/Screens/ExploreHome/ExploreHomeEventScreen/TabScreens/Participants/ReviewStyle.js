import { StyleSheet } from 'react-native';
import { vh, vw, Colors, DesignHeight, DesignWidth } from '../../../../../Constants';

const ReviewStyle = StyleSheet.create({

containerStyle: {
    flex: 1,
    alignItems: 'center',
    marginBottom: vh(20)
},
headerView: {
    height: vh(80.7),
    backgroundColor: Colors.fadedRed,
    width: vw(DesignWidth),
    flexDirection: 'row',
    paddingTop: vh(42),
    alignItems: 'center',
},
backButtonStyle: {
    marginLeft: vw(13.3),
    alignSelf: 'flex-start',
},
tabbarViewStyle: {
    width: vw(DesignWidth),
    height: vh(DesignHeight - vh(90)),
},
reviewHeading: {
    color: Colors.white,
    fontSize: vh(20),
    marginLeft: vw(13.3),
    fontFamily: 'SourceSansPro-Semibold',
    bottom:vw(5)
},
separator: {
    flex: 1,
    justifyContent: 'center',
    height: vw(0.7),
    backgroundColor: Colors.lightGray,
    marginTop: vh(17)
},
})

export default ReviewStyle;