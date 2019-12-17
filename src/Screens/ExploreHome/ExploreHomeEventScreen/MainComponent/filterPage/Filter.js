import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import DatePicker from 'react-native-custom-datetimepicker'
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import { Images, vh, vw, VectorIcons, Colors, Strings } from '../../../../../Constants';
import styles from './styles';
import CheckBox from '../../../../../ReusableComponents/CheckBox';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myDateStart: null,
      myDateEnd: null,
      check: false,
      scrollEnabled: true,
    };
  }

  resetCheckBox = (value) => {
    this.setState({
      check: value
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

  enableScroll = () => this.setState({ scrollEnabled: true });
  disableScroll = () => this.setState({ scrollEnabled: false });

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
              <Image source={Images.info} />
            </TouchableOpacity>
            <Text style={styles.reviewHeadingReset}>{Strings.reset}</Text>
          </View>
        </View>
        <ScrollView bounces={false} scrollEnabled={this.state.scrollEnabled}>
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
              />
              <Text style={styles.checkText}>{Strings.freeEvent}</Text>
              <CheckBox
                isCheck={this.state.check}
                clicked={(value) => this.resetCheckBox(value)}
                id={2}
              />
              <Text style={styles.checkText}>{Strings.paidEvent}</Text>
            </View>
            <View style={styles.slider}>
            <MultiSlider
              enabledOne={true}
              enabledTwo={true}
              allowOverlap={false}
              sliderLength={300}
              min={0}
              max={10000}
              onValuesChangeStart={this.disableScroll}
              onValuesChangeFinish={this.enableScroll}
            />
            </View>
          </View>
          <View style={styles.availableOuterView} />
          <View style={styles.availableView}>
            <Text style={styles.dateText}>{Strings.availableSlot}</Text>
          </View>
          <View style={styles.percent}>
          <Text style={styles.dateText}>{Strings.percent}</Text>
            </View>
            <View style={styles.slider}>
            <MultiSlider
              enabledOne={true}
              enabledTwo={true}
              allowOverlap={false}
              sliderLength={300}
              min={0}
              max={10000}
              onValuesChangeStart={this.disableScroll}
              onValuesChangeFinish={this.enableScroll}
            />
              </View>
              <View style={styles.availableOuterView} />
              <View style={styles.category}>
              <Text style={styles.dateText}>{Strings.eventCategory}</Text>
                </View>
        </ScrollView>
      </View>
    );
  }
}
