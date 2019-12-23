import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Animated } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker'
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import { Images, vh, vw, VectorIcons, Colors, Strings } from '../../../../../Constants';
import styles from './styles';
import CheckBox from '../../../../../ReusableComponents/CheckBox';
import CustomSwitch from '../../../../../ReusableComponents/CustomSwitch/CustomSwitch';
import moment from 'moment';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      minimumDate:null,
      isDateTimePickerVisibleStart: false,
      isDateTimePickerVisibleEnd: false,
      isDateVisibleStart: false,
      isDateVisibleend: false,
      check: false,
      scrollEnabled: true,
      switchEnabled: false,
      switchPosition: new Animated.ValueXY({ x: vw(0), y: vh(0) }),
      counter: 0,
      nonCollidingMultiSliderValue: [3000, 7000],
      nonCollidingMultiSliderValue2: [20, 80],
    };
  }

  showDateTimePickerStart = () => {
    this.setState({ isDateTimePickerVisibleStart: true });
  };

  hideDateTimePickerStart = () => {
    this.setState({ isDateTimePickerVisibleStart: false });
  };

  handleDatePickedStart = date => {
    var data = moment(date).format("DD-MMM-YYYY")
    this.setState({
      startDate:data,
      isDateVisibleStart: true,
      minimumDate: date
    })
    this.hideDateTimePickerStart();
  };

  showDateTimePickerEnd = () => {
    this.setState({ isDateTimePickerVisibleEnd: true });
  };

  hideDateTimePickerEnd = () => {
    this.setState({ isDateTimePickerVisibleEnd: false });
  };

  handleDatePickedEnd = date => {
    var data = moment(date).format("DD-MMM-YYYY")
    this.setState({
      endDate: data,
      isDateVisibleend: true
    })
    this.hideDateTimePickerEnd();
  };

  resetCheckBox = (value) => {
    this.setState({
      check: value
    })
  }

  nonCollidingMultiSliderValuesChange = values => {
    this.setState({
      nonCollidingMultiSliderValue: values,
    });
  };

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter > 0 ? this.state.counter - 1 : 0
    })
  }

  nonCollidingMultiSliderValues2Change = values => {
    this.setState({
      nonCollidingMultiSliderValue2: values,
    });
  };

  toggleSwitch() {
    this.setState({
      switchEnabled: !this.state.switchEnabled
    })
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => this.props.navigation.pop()} style={styles.filterView} >
            <Image source={Images.cancel} />
            <Text style={styles.reviewHeadingFilter}>{Strings.filters}</Text>
          </TouchableOpacity>
          <View style={styles.filterView}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('InfoDialog')}>
              <Image source={Images.smallInfo} />
            </TouchableOpacity>
            <Text style={styles.reviewHeadingReset} onPress={() => this.props.navigation.navigate('ResetDialog')}>{Strings.reset}</Text>
          </View>
        </View>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={styles.dateHead}>
            <Text style={styles.dateText}>{Strings.dateRange}</Text>
          </View>
          <View style={styles.dateView}>
            <View style={styles.dateInnerView}>
              <TouchableOpacity style={styles.dateTimePicker} onPress={this.showDateTimePickerStart} activeOpacity={1} >
                <Text style={styles.startDateText} > {this.state.isDateVisibleStart ? (this.state.startDate) : 'Start Date'} </Text>
                <VectorIcons.EvilIcons name="calendar" color={Colors.white} size={25} style={styles.calendar} />
              </TouchableOpacity>
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisibleStart}
                onConfirm={this.handleDatePickedStart}
                onCancel={this.hideDateTimePickerStart}
                minimumDate={new Date()}
                mode={'date'}
              />

              <TouchableOpacity style={styles.dateTimePicker} onPress={this.showDateTimePickerEnd} activeOpacity={1} >
                <Text style={styles.startDateText} > {this.state.isDateVisibleend ? (this.state.endDate) : 'End Date'} </Text>
                <VectorIcons.EvilIcons name="calendar" color={Colors.white} size={25} style={styles.calendar} />
              </TouchableOpacity>
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisibleEnd}
                onConfirm={this.handleDatePickedEnd}
                onCancel={this.hideDateTimePickerEnd}
                minimumDate={this.state.minimumDate}
                mode={'date'}
              />
            </View>
          </View>
          <View style={styles.percent}>
            <Text style={styles.dateText}>{Strings.perPersonCost}</Text>
          </View>
          <View style={styles.dateView}>
            <View style={styles.personCheckView}>
              <CheckBox
                isCheck={this.state.check}
                clicked={(value) => this.resetCheckBox(value)}
                id={1}
                outerColor={Colors.fadedGray}
                innerColor={Colors.fadedGray}
                outerSize={vh(24)}
                innerSize={vh(20)}
              />
              <Text style={styles.checkText}>{Strings.freeEvent}</Text>
              <CheckBox
                isCheck={this.state.check}
                clicked={(value) => this.resetCheckBox(value)}
                id={2}
                outerColor={Colors.fadedGray}
                innerColor={Colors.fadedGray}
                outerSize={vh(24)}
                innerSize={vh(20)}
              />
              <Text style={styles.checkText}>{Strings.paidEvent}</Text>
            </View>
            <View style={styles.costTextView}>
              <Text style={styles.costText}>${this.state.nonCollidingMultiSliderValue[0]} - </Text>
              <Text style={styles.costText}>${this.state.nonCollidingMultiSliderValue[1]}</Text>
            </View>
            <View style={styles.slider}>
              <MultiSlider
                values={[
                  this.state.nonCollidingMultiSliderValue[0],
                  this.state.nonCollidingMultiSliderValue[1],
                ]}
                allowOverlap={false}
                sliderLength={vw(385)}
                step={500}
                min={0}
                max={10000}
                minMarkerOverlapDistance={500}
                onValuesChange={this.nonCollidingMultiSliderValuesChange}
              />
            </View>
            <View style={styles.dateInnerView}>
              <Text style={styles.costText}>0</Text>
              <Text style={styles.costText}>$10,000</Text>
            </View>
          </View>
          <View style={styles.availableOuterView} />
          <View style={styles.availableView}>
            <Text style={styles.dateText}>{Strings.availableSlot}</Text>
            <View style={styles.plusMinusView}>
              <VectorIcons.AntDesign
                name='minuscircleo'
                color={Colors.fadedRed}
                size={vh(23.3)}
                onPress={() => { this.decrementCounter() }}
              />
              <View style={styles.slotNumView}>
                <Text style={styles.familyYes}>{this.state.counter}</Text>
              </View>
              <VectorIcons.AntDesign
                name='pluscircleo'
                color={Colors.fadedRed}
                size={vh(23.3)}
                onPress={() => { this.incrementCounter() }}
              />
            </View>
          </View>
          <View style={styles.percent}>
            <Text style={styles.dateText}>{Strings.percent}</Text>
          </View>
          <View style={styles.percentSliderView}>
            <View style={styles.costTextView}>
              <Text style={styles.costText}>{this.state.nonCollidingMultiSliderValue2[0]} - </Text>
              <Text style={styles.costText}>{this.state.nonCollidingMultiSliderValue2[1]}</Text>
            </View>
            <View style={styles.slider}>
              <MultiSlider
                values={[
                  this.state.nonCollidingMultiSliderValue2[0],
                  this.state.nonCollidingMultiSliderValue2[1],
                ]}
                allowOverlap={false}
                sliderLength={vw(385)}
                step={5}
                min={0}
                max={100}
                minMarkerOverlapDistance={20}
                onValuesChange={this.nonCollidingMultiSliderValues2Change}
              />
            </View>
            <View style={styles.dateInnerView}>
              <Text style={styles.costText}>0</Text>
              <Text style={styles.costText}>100</Text>
            </View>
          </View>
          <View style={styles.availableOuterView} />
          <TouchableOpacity style={styles.category} onPress={() => this.props.navigation.navigate('CategorySelectModalPart2')} >
            <Text style={styles.dateText}>{Strings.eventCategory}</Text>
          </TouchableOpacity>
          <View style={styles.availableOuterView} />
          <View style={styles.family}>
            <View>
              <Text style={styles.dateText}>{Strings.familyFriends}</Text>
            </View>
            <View style={styles.familyBtnView}>
              <Text style={styles.familyYes}>{this.state.switchEnabled ? Strings.Yes : Strings.No}</Text>
              <CustomSwitch switchEnabled={this.state.switchEnabled} switchPosition={this.state.switchPosition} toggleSwitch={() => this.toggleSwitch()} />
            </View>
          </View>
          <View style={styles.availableOuterView} />
          <TouchableOpacity style={styles.applyView} activeOpacity={1} onPress={() => this.props.navigation.pop()}>
            <Text style={styles.applyText}>{Strings.apply}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
