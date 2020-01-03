import { StyleSheet, Platform } from 'react-native'
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
        paddingTop: vh(30),
        height: vh(90)
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
    },
    skipText: {
        color: Colors.white,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: vh(15.3),
        marginLeft: vw(5)
    },
    skipView: {
        right: vw(20),
        flexDirection: 'row',
        alignItems: 'center'
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
        height: vw(420),
        marginTop: vh(13)
    },
    AddressStyle: {
        width: vw(380),
        color: Colors.verLightGrey,
        left:vw(-3),
        marginBottom: Platform.OS === 'ios' ? vw(0) : vw(10)
    },
    textInputStyle: {

    },
    textInputView: {
        marginTop: vw(20),
    },
    timePicker: {
        width: vw(180),
        marginTop: vh(5),
        borderColor: Colors.verLightGrey,
        borderBottomWidth: vw(1),
        marginLeft: vw(13.3),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textAnimated: {
        position: 'absolute',
        left: vw(8),
        marginTop: vh(-18)
    },
    rowStyle: {
        flexDirection: 'row',
    },
    Duration: {
        width: '100%'
    },
    DurationAndroid: {
        marginLeft: vw(20),
        width: vw(170),
        borderBottomColor: Colors.verLightGrey,
        borderBottomWidth: vh(1),
        height: vw(52)
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
        // marginLeft: vw(-210),
    },
    iconMargin: {
        marginTop: vh(15)
    },
    buttonStyle: {
        right: vw(10),
        position: 'absolute',
        bottom: vh(60),
        width: vw(66),
        height: vw(66),
        borderRadius: vw(33),
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        // marginTop: vh(5)
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
        fontFamily: 'SourceSansPro-Regular',
        textTransform: 'capitalize',
        fontSize: vh(15.3)
    },
    select2: {
        marginTop: vh(25),
        color: Colors.fadedGray,
        flexDirection: 'row',
        fontFamily: 'SourceSansPro-Regular',
    },
    select3: {
        marginTop: vh(15),
        color: Colors.fadedGray,
        flexDirection: 'row',
        fontFamily: 'SourceSansPro-Regular',
        alignItems: 'center'
    },
    select4: {
        color: Colors.fadedGray,
        flexDirection: 'row',
        fontFamily: 'SourceSansPro-Regular',
        alignItems: 'center',
        right: vw(13)
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
    dollarText: {
        fontFamily: 'SourceSansPro-Regular',
        marginRight: vw(10),
        color: Colors.black,
        fontSize: vh(15.3)
    },
    switch: {
        marginTop: vh(-5),
        alignSelf: 'center'
    },
    buttonStyleGradient: {
        height: vw(66.7),
        width: vw(66.7),
        borderRadius: vw(34),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: vh(60),
        right: vw(10),
    },
    eventType: {
        backgroundColor: Colors.white,
        height: vh(64),
        width: vw(DesignWidth),
        marginBottom: vh(50),
        flexDirection: 'row',
        alignItems: 'center'
    },
    costSegregation: {
        backgroundColor: Colors.white,
        width: vw(DesignWidth),
        marginTop: vh(28),
        flexDirection: 'row',
        alignItems: 'center',
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
    bottomView2: {
        width: vw(DesignWidth),
        backgroundColor: Colors.white,
        marginTop: vh(13),
        marginBottom: vh(40)
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
    },
    placeholderStyle: {
        // fontFamily: 'SourceSansPro-Regular',
        // position: 'absolute',
        // marginLeft: 10,
        // marginRight: 10,
        // backgroundColor: '#fff',
        // alignSelf: 'flex-start',
        // fontSize: 11,
    },
    dateText: {
        bottom: Platform.OS === 'ios' ? vw(-5) : vw(-10),
        position: 'absolute'
    },
    dateTimePicker: {
        borderColor: Colors.verLightGrey,
        borderBottomWidth: vw(1),
        width: vw(372),
        marginLeft: vw(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Platform.OS === 'ios' ? vw(30) : vw(28),
        marginBottom: Platform.OS === 'ios' ? vw(0) : vw(28)
    },
    addressButton: {
        borderColor: Colors.verLightGrey,
        borderBottomWidth: vw(1),
        width: vw(372),
        marginLeft: vw(20),
        marginTop: Platform.OS === 'ios' ? vw(15) : vw(28),
    },
    cancelByDate: {
        borderColor: Colors.veryVeryLightGray,
        borderBottomWidth: vw(2),
        width: vw(380),
        marginLeft: vw(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: Platform.OS === 'ios' ? vw(10) : vw(28),
        marginBottom: Platform.OS === 'ios' ? vw(0) : vw(28)
    },
    dateText2: {
        // left: vw(-6),
        bottom: Platform.OS === 'ios' ? vw(0) : vw(5),
        position: 'absolute'
    },
    durationSelect: {
        // left: vw(-6),
        bottom: Platform.OS === 'ios' ? vw(-6) : vw(5),
    },
    containerStylePicker: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    cancelConfirm: {
        backgroundColor: Colors.white,
        height: vw(50),
        flexDirection: 'row',
        paddingHorizontal: vw(20),
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: vh(1),
        borderBottomColor: Colors.veryVeryLightGray
    },
    cancelText: {
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: vh(17.3),
    },
    confirmText: {
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: vh(17.3),
        textTransform: 'capitalize',
        right: vw(10),
        color: Colors.green
    },
    cancelButton: {
        flex: 1
    },
    bottomIcon: {
        bottom: Platform.OS === 'ios' ? vh(0) : vh(5)
    },
    publishButton: {
        height: vw(53.3),
        width: vw(374),
        borderRadius: vw(34),
        alignItems: 'center',
        justifyContent: 'center',
        bottom: vh(20),
        left: vw(20)
    },
    publishText: {
        textTransform: 'uppercase',
        color: Colors.white,
        fontFamily: 'SourceSansPro-Semibold',
        fontSize: vh(16.7)
    },
    settingMargin: {
        marginTop: 40,
        marginBottom: 10
    },
    totalCostTextInput: {
        height: vh(43.3),
        width: vw(80),
        borderRadius: vw(3.3),
        borderColor: Colors.veryVeryLightGray,
        borderWidth: vw(2),
        padding: vw(8),
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        color: Colors.fadedGray,
    },
    perPersonTextInput: {
        height: vw(40),
        width: vw(40),
        color: Colors.fadedGray,
        textAlign: 'center'
    },
    budgetBreak: {
        color: Colors.fadedGray,
        marginTop: vh(22.3),
        marginLeft: vw(14.7),
        fontSize: vw(16),
        fontFamily: 'SourceSansPro-Regular',
    },
    breakdownText: {
        flexDirection: 'row',
        marginTop: vh(20.7)
    },
    breakdownTextInput: {
        flex: 1,
        width: vw(100),
        marginLeft: vw(13.7),
    },
    halfSeparator: {
        height: vh(2),
        width: vw(250),
        marginLeft: vw(13),
        backgroundColor: Colors.veryVeryLightGray,
        marginTop: vh(8)
    },
    breakdown: {
        flexDirection: 'column',
        flex: 1
    },
    addButton: {
        backgroundColor: Colors.fadedRed,
        height: vw(31),
        width: vw(31),
        marginTop: vh(17.3),
        marginBottom: vh(16.3),
        borderRadius: vw(15.5),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: vw(10)
    },
    searchView:{
        backgroundColor:Colors.white,
        width:vw(DesignWidth),
        height:vh(450)
    }
});