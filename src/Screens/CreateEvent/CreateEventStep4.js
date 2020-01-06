import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated, FlatList } from 'react-native';
import { VectorIcons, vh, Colors, strings, vw, Images } from '../../Constants'
import * as Progress from 'react-native-progress';
import styles from './styles'
import { CustomSwitch, DatePicker, RadioButton, Toast } from '../../ReusableComponents'
import LinearGradient from 'react-native-linear-gradient'
import { TextInput } from 'react-native-gesture-handler';
const colors = [Colors.fadedRed, Colors.darkishPink]

export default class CreateEventStep4 extends Component {

  state = {
    shareCostPosition: new Animated.ValueXY({ x: vw(0), y: vh(0) }),
    shareCost: false,
    cancelByDate: null,
    costTotal: true,
    totalCostValue: '',
    minPersonCost: '',
    maxPersonCost: '',
    guestsData: [{ no: 1 }],
    breakDown1: '',
    addingMore: false,
    call: false,
  }

  toggleSwitch() {
    this.setState({
      shareCost: !this.state.shareCost
    })
  };

  _updateMasterState = (attrName, value) => {
    this.setState({ [attrName]: value });
  }

  clicked(id) {
    if (id === 1) {
      this.setState({
        costTotal: true
      })
    } else {
      this.setState({
        costTotal: false
      })
    }
  }

  settingDynamicStates = (value, text) => {
    this.state['breakDown_' + value] = text
  }

  callAlert = () => {
    if (this.state.cancelByDate === null || this.state.totalCostValue === '' || this.state.minPersonCost === '' || this.state.maxPersonCost === '' || this.state.breakDown1 === '') {
      this.resetCall(true)
    } else {
      let payload = {
        cancelDate: this.state.cancelByDate,
        moneyTotal: '$' + this.state.totalCostValue,
        money: '$' + this.state.minPersonCost + '-' + '$' + this.state.maxPersonCost,
      }
      let data = this.props.navigation.getParam('payloadPassed')
      let mergedData = { ...data, ...payload }
      let mergedData2 = { ...mergedData, ...DATA }
      this.props.navigation.navigate('AddGuests', { payloadPassed: mergedData2 })
    }
  }

  resetCall = (value) => {
    this.setState({
      call: value
    })
  }

  submitInput = (type) => {
    switch (type) {
      case 1:
        this.input2.focus();
        break;
      case 2:
        this.input3.focus();
        break;
      case 3:
        this.input4.focus();
        break;
    }
  }

  renderGuestCards = (rowData) => {
    return (
      <View style={styles.breakdownText} >
        <View style={styles.breakdown} >
          <TextInput
            placeholder={'e.g. Drinks'}
            placeholderTextColor={Colors.newFadedgreyOpacity}
            style={styles.breakdownTextInput}
            onChangeText={(text) => this.settingDynamicStates(text, text)}
          />
          <View style={styles.halfSeparator} />
        </View>
        <View style={styles.select4} >
          <Text style={styles.dollarText} > $ </Text>
          <TextInput
            style={[styles.totalCostTextInput, { backgroundColor: Colors.darkerButLightGray }]}
            keyboardType={'number-pad'}
            onChangeText={(text) => this.settingDynamicStates(text, text)}
            placeholder='10'
          />
        </View>
      </View>
    )
  }

  scroll = () => {
    scrollView.scrollTo({ x: 0, y: 200, animated: true })
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButtonStyle} activeOpacity={1} >
            <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} />
            <Text style={styles.headerText} > {strings.createEvent} </Text>
          </TouchableOpacity>
          <View style={styles.skipView} >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SaveModal')} >
              <Text style={styles.skipText} > {strings.save} </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.stepText} > {strings.createEventStep4} </Text>
        <Progress.Bar style={styles.progressBar} progress={1} width={vw(388)} color={Colors.green} unfilledColor={Colors.progressBarColor} borderColor={Colors.progressBarColor} animated={true} />
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          ref={ref => scrollView = ref}
        >
          <View style={styles.bottomView2}>
            <View style={styles.family}>
              <Text style={styles.select} > {strings.shareCost} </Text>
              <View style={styles.select2} >
                <Text style={[styles.familyText, { color: this.state.shareCost ? Colors.black : Colors.fadedGray }]} > {this.state.shareCost ? strings.Yes : strings.No} </Text>
                <View style={styles.switch} >
                  <CustomSwitch switchEnabled={this.state.shareCost} switchPosition={this.state.shareCostPosition} toggleSwitch={() => this.toggleSwitch()} />
                </View>
              </View>
            </View>
            <View style={styles.separator3} />
            <View style={styles.settingMargin} >
              <DatePicker
                container={styles.cancelByDate}
                textStyle={styles.dateText}
                mode={'date'}
                updateMasterState={this._updateMasterState}
                attrName={'cancelByDate'}
                title={'Cancel By Date'}
                value={this.state.cancelByDate}
              />
            </View>
            <View style={styles.costSegregation} >
              <View style={styles.RadioButton} >
                <TouchableOpacity onPress={() => { this.clicked(1) }}>
                  <RadioButton innerCircleDimension={12} outerCircleDimension={20} buttonSize={25} outColor={this.state.costTotal ? Colors.green : Colors.fadedGray} inColor={Colors.green} isCheck={this.state.costTotal} />
                </TouchableOpacity>
                <Text style={[styles.radioText, { color: Colors.fadedGray }]} > {strings.fixedCost} </Text>
              </View>

              <View style={styles.RadioButton2} >
                <TouchableOpacity onPress={() => { this.clicked(2) }} >
                  <RadioButton innerCircleDimension={12} outerCircleDimension={20} outColor={!this.state.costTotal ? Colors.green : Colors.fadedGray} inColor={Colors.green} isCheck={!this.state.costTotal} />
                </TouchableOpacity>
                <Text style={[styles.radioText, { color: Colors.fadedGray }]} > {strings.fixedPerson} </Text>
              </View>
            </View>
            <View style={styles.separator3} />
            <View style={styles.family}>
              <Text style={styles.select} > {this.state.costTotal ? strings.totalCost : strings.perPersonCost} </Text>
              <View style={styles.select3} >
                <Text style={styles.dollarText} > $ </Text>
                <TextInput
                  style={[styles.totalCostTextInput, { backgroundColor: this.state.totalCostValue === '' ? Colors.white : Colors.darkerButLightGray }]}
                  value={this.state.totalCostValue}
                  onChangeText={(text) => this.setState({ totalCostValue: text })}
                  keyboardType={'number-pad'}
                  ref={ref => this.input1 = ref}
                  onSubmitEditing={() => this.submitInput(1)}
                />
              </View>
            </View>
            <View style={styles.separator3} />
            <View style={styles.family}>
              <Text style={styles.select} > {!this.state.costTotal ? strings.totalCost : strings.perPersonCost} </Text>
              <View style={styles.select3} >
                <Text style={styles.dollarText} > $ </Text>
                <View style={[styles.totalCostTextInput, { width: vw(105), backgroundColor: Colors.darkerButLightGray }]} >
                  <TextInput
                    style={styles.perPersonTextInput}
                    value={this.state.minPersonCost}
                    onChangeText={(text) => this.setState({ minPersonCost: text })}
                    keyboardType={'number-pad'}
                    ref={ref => this.input2 = ref}
                    onSubmitEditing={() => this.submitInput(2)}
                    placeholder={'50'}
                  />
                  <VectorIcons.Octicons name='dash' color={Colors.black} size={vw(15)} />
                  <TextInput
                    style={[styles.perPersonTextInput, { marginLeft: vw(5) }]}
                    value={this.state.maxPersonCost}
                    onChangeText={(text) => this.setState({ maxPersonCost: text })}
                    keyboardType={'number-pad'}
                    ref={ref => this.input3 = ref}
                    onSubmitEditing={() => this.submitInput(3)}
                    placeholder={'100'}
                  />
                </View>
              </View>
            </View>
            <View style={styles.separator3} />
            <Text style={styles.budgetBreak} > {strings.budgetBreak} </Text>
            <View style={styles.breakdownText} >
              <View style={styles.breakdown} >
                <TextInput
                  placeholder={'e.g. Food'}
                  placeholderTextColor={Colors.newFadedgreyOpacity}
                  style={styles.breakdownTextInput}
                  ref={ref => this.input6 = ref}
                  onSubmitEditing={() => this.submitInput(6)}
                />
                <View style={styles.halfSeparator} />
              </View>
              <View style={styles.select4} >
                <Text style={styles.dollarText} > $ </Text>
                <TextInput
                  style={[styles.totalCostTextInput, { backgroundColor: Colors.darkerButLightGray }]}
                  value={this.state.breakDown1}
                  placeholder='10'
                  onChangeText={(text) => this.setState({ breakDown1: text })}
                  keyboardType={'number-pad'}
                  ref={ref => this.input4 = ref}
                  onSubmitEditing={() => this.submitInput(4)}
                />
              </View>
            </View>
            <FlatList
              data={this.state.guestsData}
              bounces={false}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.no.toString()}
              renderItem={this.renderGuestCards}
            />

            <View style={[styles.rowStyle, { left: this.state.addingMore ? vw(330) : vw(370) }]} >
              {this.state.addingMore &&
                <TouchableOpacity style={styles.addButton} activeOpacity={1}
                  onPress={() => {
                    if (this.state.guestsData.length > 1) {
                      let array = this.state.guestsData.splice(this.state.guestsData.length - 1, 1)
                      this.setState({
                        guestsData: this.state.guestsData
                      })
                      this.scroll()
                      if (this.state.guestsData.length === 1) {
                        this.setState({
                          addingMore: false
                        })
                      }
                    }
                  }} >
                  <VectorIcons.Ionicons name='ios-remove' size={vw(30)} color={Colors.white} />
                </TouchableOpacity>
              }
              <TouchableOpacity style={styles.addButton} activeOpacity={1}
                onPress={() => {
                  {
                    this.state.guestsData.length < 4
                      ? this.setState({
                        guestsData: [
                          ...this.state.guestsData,
                          { no: this.state.guestsData.length + 1 },
                        ],
                      }, () => {
                        this.setState({ addingMore: true })
                        this.scroll()
                      })
                      : console.log('Limits have been reached');
                  }
                }} >
                <VectorIcons.Ionicons name='ios-add' size={vw(30)} color={Colors.white} />
              </TouchableOpacity>
            </View>

          </View>

          <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.publishButton}  >
            <TouchableOpacity
              onPress={this.callAlert}
              activeOpacity={1}
            >
              <Text style={styles.publishText} > {strings.publish} </Text>
            </TouchableOpacity>
          </LinearGradient>
        </ScrollView>
        {this.state.call === true &&
          <Toast top={-15} from={0} to={-60} message={strings.fillAll} call={(value) => this.resetCall(value)} />
        }
      </View>
    );
  }
}


const DATA = {
  serialNo:  Math.random(),
  hashtagEvent: 'Dance Floor Table',
  location: '3570 S Las Vegas Blvd, Las Vegas, NV 89109',
  going: 10,
  icon: Images.cheers,
  profile: Images.maleImage,
  reviewRating: '4.5',
  venueRating: '4.4',
  hearted: false,
  joined: true,
  waitlisted: false,
  eventID: 'GSG01234561',
  reviews: '5',
  latitude: 36.116442,
  longitude: -115.175079,
  personalBudget: '$1000',
  finalBudget: '$800',
  refund: '$200',
  min: 4,
  max: 40,
  settlement: false,
  eventDate: 'August 10, 2018',
  leaveEventBy: 'July 30, 2018',
  totalCost: '$46',
  thumbnail: 'https://x.kinja-static.com/assets/images/logos/placeholders/default.png',
  reviewDATA: [
    {
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Eric',
      time: 'February, 2018',
      rating: '4.5',
      review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      image: 'https://static4.fashionbeans.com/wp-content/uploads/2015/10/hairmistakes3.jpg',
      name: 'Samael',
      time: 'February, 2018',
      rating: '4.4',
      review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2015/11/18/12/18/woman-1049070_960_720.jpg',
      name: 'Ananya',
      time: 'February, 2018',
      rating: '4.9',
      review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      image: 'https://www.menshairstyletrends.com/wp-content/uploads/2018/06/tombaxter_hair-mens-short-haircuts-for-fine-hair-e1528391903501-768x768.jpg',
      name: 'Daniel',
      time: 'February, 2018',
      rating: '4.3',
      review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.'
    },
    {
      image: 'https://i1.wp.com/gentlehair.com/wp-content/uploads/2015/08/mens-haircut-diamond-shape.png?fit=498%2C800&ssl=1',
      name: 'Ronald',
      time: 'February, 2018',
      rating: '4.2',
      review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
  ],
  ORGANIZER: {
    pic: Images.person1,
    organizer: 'John Doe',
    rating: 4.5,
  },

  PARTICIPANTS: [
    { pic: Images.person1 },
    { pic: Images.person2 },
    { pic: Images.person3 },
    { pic: Images.person1 },
    { pic: Images.person2 },
    { pic: Images.person3 },
    { pic: Images.person1 },
    { pic: Images.person2 },
    { pic: Images.person3 },
  ],

  WAITLIST: [
    { pic: Images.person1 },
    { pic: Images.person2 },
    { pic: Images.person3 },
    { pic: Images.person1 },
    { pic: Images.person2 },
    { pic: Images.person3 },
    { pic: Images.person1 },
    { pic: Images.person2 },
    { pic: Images.person3 },
    { pic: Images.person1 },
    { pic: Images.person2 },
    { pic: Images.person3 },
  ],
  priceDetailsData: [
    {
      serialNumber: 1,
      iconUri: require('../../Assets/Images/icTable.png'),
      title: 'Table',
      amount: '$100',
    },
    {
      serialNumber: 2,
      iconUri: require('../../Assets/Images/icFood.png'),
      title: 'Food',
      amount: '$550',
    },
    {
      serialNumber: 3,
      iconUri: require('../../Assets/Images/icDrinks.png'),
      title: 'Drinks',
      amount: '$100',
    },
    {
      serialNumber: 4,
      iconUri: require('../../Assets/Images/icMiscellaneous.png'),
      title: 'Miscellaneous',
      amount: '$50',
    },
  ],
  costBreakdownData: [
    { serialNo: 1, typeOfCost: 'Per Person Cost', amount: '$20', personCount: 'x2', totalAmount: '$40' },
    { serialNo: 2, typeOfCost: 'Payment Gateway Fee', amount: '$2', personCount: 'x2', totalAmount: '$4' },
    { serialNo: 3, typeOfCost: 'GroupSetGo Fee', amount: '$1', personCount: 'x2', totalAmount: '$2' },
  ]
}