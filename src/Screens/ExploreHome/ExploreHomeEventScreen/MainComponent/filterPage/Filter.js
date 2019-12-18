import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Animated } from 'react-native';
import DatePicker from 'react-native-custom-datetimepicker'
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import { Images, vh, vw, VectorIcons, Colors, Strings } from '../../../../../Constants';
import styles from './styles';
import CheckBox from '../../../../../ReusableComponents/CheckBox';
import CustomSwitch from '../../../../../ReusableComponents/CustomSwitch/CustomSwitch';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myDateStart: null,
      myDateEnd: null,
      check: false,
      scrollEnabled: true,
      switchEnabled: false,
      switchPosition: new Animated.ValueXY({ x: vw(0), y: vh(0) }),
      counter: 0,
      nonCollidingMultiSliderValue: [3000, 7000],
      nonCollidingMultiSliderValue2: [20, 80],
    };
  }

  resetAllData = () => {
    this.setState({
      myDateStart: null,
      myDateEnd: null,
      check: false,
      scrollEnabled: true,
      switchEnabled: false,
      switchPosition: new Animated.ValueXY({ x: vw(0), y: vh(0) }),
      counter: 0,
      nonCollidingMultiSliderValue: [3000, 7000],
      nonCollidingMultiSliderValue2: [20, 80],
    })
  }

  getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const c = new Date(year - 18, month, day)
    return (c)
  }

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
          <View style={styles.filterView}>
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <Image source={Images.cancel} />
            </TouchableOpacity>
            <Text style={styles.reviewHeadingFilter}>{Strings.filters}</Text>
          </View>
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
              <DatePicker
                style={styles.datePicker}
                date={this.state.myDateStart}
                placeholder="Start Date"
                format='DD-MM-YYYY'
                iconComponent={<VectorIcons.AntDesign
                  name='calendar'
                  color={Colors.newGray}
                  size={vh(20.3)}
                  style={styles.infoIcon}
                />}
                mode={'date'}
                androidMode={'calendar'}
                minDate={new Date()}
                maxDate={this.getDate()}
                onDateChange={(date) => { this.setState({ myDateStart: date }) }}
              />
              <DatePicker
                style={styles.datePicker}
                date={this.state.myDateEnd}
                placeholder="End Date"
                format='DD-MM-YYYY'
                iconComponent={<VectorIcons.AntDesign
                  name='calendar'
                  color={Colors.newGray}
                  size={vh(20.3)}
                  style={styles.infoIcon}
                />}
                mode={'date'}
                androidMode={'calendar'}
                minDate={new Date()}
                maxDate={this.getDate()}
                onDateChange={(date) => { this.setState({ myDateEnd: date }) }}
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
            <View>
              <Text style={styles.dateText}>{Strings.availableSlot}</Text>
            </View>
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
          <View style={styles.category}>
            <Text style={styles.dateText}>{Strings.eventCategory}</Text>
          </View>
          <View style={styles.availableOuterView} />
          <View style={styles.family}>
            <View>
              <Text style={styles.dateText}>{Strings.familyFriends}</Text>
            </View>
            <View style={styles.familyBtnView}>
              <Text style={styles.familyYes}>{Strings.Yes}</Text>
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
