import { StyleSheet } from 'react-native'
import { vw, vh, Colors, DesignWidth } from '../../Constants';

export default styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: Colors.veryVeryLightGray
    },
    headerView: {
        backgroundColor: Colors.fadedRed,
        width: '100%',
        flexDirection: 'row',
        paddingTop:vh(30)
    },
    backButtonStyle: {
        marginLeft: vw(13.3),
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    headerText: {
        color: Colors.white,
        fontSize: vh(20),
        fontFamily: 'SourceSansPro-Semibold',
        marginLeft: vh(5),
        marginBottom: vh(5)
    },
    skipText: {
        color: Colors.white,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vh(15.3)
    },
    skipView: {
        right: vw(20),
        top: vh(17)
    },
    containerStyleModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    dialogboxStyle: {
        width: vw(300),
        height: vh(160),
        backgroundColor: Colors.white,
        borderRadius: vh(20),
    },
    alertTextStyle: {
        color: Colors.black,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vw(16.7),
        marginHorizontal: vw(40),
        marginTop: vh(55.3),
        textAlign: 'center'
    },
    buttonsViewStyle: {
        marginTop: vh(20),
        borderTopColor: Colors.veryVeryLightGray,
        borderTopWidth: vw(1)
    },
    yesContinueButtonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: Colors.fadedGray2,
        marginTop: vh(20)
    },
    yesContinueTextStyle: {
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vw(16.7),
        color: Colors.fadedRed,
    },
    stepText: {
        color: Colors.fadedGray,
        fontSize: vh(14.7),
        fontFamily: 'SourceSansPro-Regular',
        marginLeft: vw(13.7),
        marginTop: vh(15.3),
    },
    progressBar: {
        marginLeft: vw(13),
        marginRight: vw(13),
        width: vw(388),
        marginTop: vh(8.7)
    },
    dataView: {
        backgroundColor: Colors.white,
        width: vw(414),
        height: vh(344),
        marginTop: vh(13)
    },
    textInputStyle: {
        paddingLeft: vw(14)
    },
    textInputView: {
        marginTop: vh(35.7)
    },
    separator: {
        height: vh(2),
        width: vw(380),
        marginLeft: vw(13),
        backgroundColor: Colors.fadedGray,
        marginTop: vh(-30)
    },
    datePicker: {
        width: vw(380),
        marginLeft: vw(13),
        marginTop: vh(-25),
    },
    timePicker: {
        width: vw(180),
        marginLeft: vw(13),
        marginTop: vh(-25),
    },
    textAnimated: {
        position: 'absolute',
        left: vw(8),
        marginTop: vh(-18)
    },
    rowStyle: {
        flexDirection: 'row'
    },
    Duration: {
        marginLeft: vw(20),
        marginTop: vh(39)
    },
    separator2: {
        height: vh(2),
        width: vw(190),
        backgroundColor: Colors.fadedGray,
    },
    textAnimated2: {
        position: 'absolute',
    },
    pickerStyle: {
        width: vw(DesignWidth),
        marginLeft: vw(-210),
    },
    iconMargin: {
        marginTop: vh(15)
    },
    buttonStyle: {
        marginTop: vh(180),
        marginLeft: vw(320),
        width: vw(66),
        height: vw(66),
        borderRadius: vw(33),
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        marginTop: vh(5)
    },
    textBox: {
        backgroundColor: Colors.white,
        height: vh(131),
        width: vw(DesignWidth),
        marginTop: vh(13)
    },
    textInputBox: {
        marginTop: vh(17),
        height: vh(96.7),
        width: vw(386.7),
        marginLeft: vw(13.7),
        backgroundColor: Colors.darkerButLightGray,
        paddingLeft: vw(10),
        paddingRight: vw(10)
    },
    addPhoto: {
        marginTop: vh(13.7),
        marginLeft: vw(13),
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vh(14.7),
        marginBottom: vh(13.7)
    },
    addPhotoView: {
        backgroundColor: Colors.white,
        width: vw(DesignWidth)
    },
    addPhotoSelect: {
        backgroundColor: Colors.fadedGray,
        marginTop: vh(13),
        marginLeft: vw(13.3),
        width: vw(387.3),
        height: vh(150),
        alignItems: 'center',
        justifyContent: 'center'
    },
    addPhotoButton: {
        borderWidth: vh(2),
        borderColor: Colors.white,
        height: vh(41.7),
        width: vw(126),
        alignItems: 'center',
        justifyContent: 'center'
    },
    addPhotoText: {
        color: Colors.white,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vh(14.7)
    },
    addphotoDescrption: {
        marginTop: vh(6.7),
        color: Colors.verLightGrey,
        paddingLeft: vw(10),
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vh(14.7),
        alignSelf: 'center'
    },
    flatlist: {
        // flexDirection:'row'
        marginTop: vh(10)
    },
    flatlistImage: {
        height: vw(46.7),
        width: vw(46.7),
        marginLeft: vw(13.3)
    },
    delete: {
        height: vw(20),
        width: vw(20),
        position: 'absolute',
        left: vw(40),
        top: vw(-5)
    },
    selectView: {
        height: vh(136.7),
        width: vw(DesignWidth),
        backgroundColor: Colors.white,
    },
    select: {
        marginTop: vh(25),
        marginLeft: vw(15.3),
        color: Colors.fadedGray,
        fontFamily: 'SourceSansPro-Regular'
    },
    select2: {
        marginTop: vh(25),
        color: Colors.fadedGray,
        flexDirection: 'row',
        fontFamily: 'SourceSansPro-Regular',
    },
    separator3: {
        height: vh(2),
        width: vw(380),
        marginLeft: vw(13),
        backgroundColor: Colors.veryVeryLightGray,
        marginTop: vh(12.7)
    },
    category: {
        height: vh(550),
        backgroundColor: Colors.white,
        width: vw(380)
    },
    categoryHeader: {
        height: vh(50),
        backgroundColor: Colors.fadedRed,
        width: vw(380)
    },
    categoryHeaderText: {
        color: Colors.white,
        fontFamily: 'SourceSansPro-Bold',
        fontSize: vh(18),
        justifyContent: 'center',
        marginTop: vh(12),
        marginLeft: vw(5)
    },
    categoryFooter: {
        height: vh(50),
        backgroundColor: Colors.fadedRed,
        width: vw(380),
        alignItems: 'center'
    },
    flatlistMainView: {
        flexDirection: 'row',
        height: vh(55),
        borderBottomWidth: vh(1),
        borderColor: Colors.veryVeryLightGray
    },
    roundBlack: {
        height: vw(30),
        width: vw(30),
        backgroundColor: Colors.tranparentView,
        borderRadius: vw(25),
        marginLeft: vw(10),
        marginTop: vh(15)
    },
    categoryText: {
        marginLeft: vw(10),
        marginTop: vh(20),
        fontSize: vh(14.7),
        color: Colors.fadedGray2
    },
    CheckBox: {
        alignSelf: 'center'
    },
    space: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: vw(320)
    },
    iconStyle: {
        alignSelf: 'center',
        marginTop: vh(22),
    },
    selectedStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: vw(380)
    },
    family: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: vw(390)
    },
    familyText: {
        color: Colors.fadedGray,
        fontFamily: 'SourceSansPro-Regular',
        marginRight: vw(10)
    },
    switch: {
        marginTop: vh(-5)
    },
    buttonStyleGradient: {
        height: vw(66.7),
        width: vw(66.7),
        borderRadius: vw(34),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: vh(660),
        left: vw(320),
    },
    eventType: {
        backgroundColor: Colors.white,
        height: vh(64),
        width: vw(DesignWidth),
        marginBottom: vh(50),
        flexDirection: 'row',
        alignItems: 'center'
    },
    RadioButton: {
        flexDirection: 'row',
        marginLeft: vw(13.3)
    },
    RadioButton2: {
        flexDirection: 'row',
        marginLeft: vw(55)
    },
    radioText: {
        fontFamily: 'SourceSansPro-Semibold'
    },
    infoMain: {
        height: vh(243),
        width: vw(300),
        backgroundColor: Colors.white,
        borderRadius: vh(20)
    },
    infoStyle: {
        position: 'absolute',
        top: vh(-60),
        left: vw(80)
    },
    text1: {
        marginTop: vh(50),
        alignSelf: 'center',
        textAlign: 'center',
        paddingHorizontal: vw(8)
    },
    text2: {
        alignSelf: 'center',
        textAlign: 'center',
        paddingHorizontal: vw(8),
        marginTop: vh(5)
    },
    bottomView: {
        width: vw(DesignWidth),
        backgroundColor: Colors.white,
        marginTop: vh(13),
        marginBottom: vh(122)
    },
    totalParticipantsText: {
        marginLeft: vw(18),
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vh(20),
    },
    margin: {
        marginLeft: 18
    },
    sliderStyle: {
        flexDirection: 'row',
        width: vw(370),
        justifyContent: 'space-between',
        marginTop: vh(-15)
    },
    sliderText: {
        color: Colors.fadedGray,
        fontSize: vh(13)
    }
});