import { StyleSheet } from 'react-native';
import { vh, vw, Colors, DesignHeight, DesignWidth } from '../../Constants';

const ReviewStyle = StyleSheet.create({

containerStyle: {
    flex: 1,
},
headerView: {
    height: vh(86.7),
    backgroundColor: Colors.fadedRed,
    width: vw(DesignWidth),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: vh(42)
},
backButtonStyle: {
    marginLeft: vw(13.3),
    alignSelf: 'flex-start',
},
reviewHeading: {
    color: Colors.white,
    fontSize: vh(20),
    marginLeft: vw(13.3),
    fontFamily: 'SourceSansPro-Semibold',
    textTransform: 'capitalize'
},
accountHead: {
    backgroundColor: Colors.veryVeryLightGray,
    padding: vw(13.3),
    paddingTop: vw(19.7),
},
reviewHeadingAccount: {
    color: Colors.black,
    fontSize: vh(16.7),
    fontFamily: 'SourceSansPro-Semibold',
    textTransform: 'uppercase'
},
listView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: vw(13.3)
},
listText: {
    color: Colors.lightBlack,
    fontSize: vh(16.7),
    fontFamily: 'SourceSansPro-Regular',
    textTransform: 'capitalize',
    paddingVertical: vh(21.3),
},
separator: {
    flex: 1,
    justifyContent: 'center',
    height: vw(0.7),
    backgroundColor: Colors.lightGray,
},
availableOuterView: {
    backgroundColor: Colors.lightGray,
    height: vh(16.7)
},
})

export default ReviewStyle;