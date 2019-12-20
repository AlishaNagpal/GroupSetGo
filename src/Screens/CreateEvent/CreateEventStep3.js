import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Image, Animated } from 'react-native';
import { VectorIcons, vh, Colors, strings, vw } from '../../Constants'
import * as Progress from 'react-native-progress';
import styles from './styles'
import { CustomSwitch } from '../../ReusableComponents'
import LinearGradient from 'react-native-linear-gradient'
const colors = [Colors.fadedRed, Colors.darkishPink]
import MultiSlider from '@ptomasroos/react-native-multi-slider';
export default class CreateEventStep3 extends Component {

  state = {
    switchPosition: new Animated.ValueXY({ x: vw(0), y: vh(0) }),
    verifiedUsers: false,
    totalParticipants: [10, 50],
    ageRestrict: [25, 50],
    ageRestriction: false,
    switchPositionAge: new Animated.ValueXY({ x: vw(0), y: vh(0) }),
    genderMix: false,
    switchPositionMaleFemale: new Animated.ValueXY({ x: vw(0), y: vh(0) }),
    femaleSlider: false,
    femaleSliderValue: [5],
    maleSlider: false,
    maleSliderValue: [5],
  }

  femaleSliderChangeStart = () => {
    this.setState({
      femaleSlider: true,
    });
  };

  femaleSliderValuesChange = values => {
    let newValues = [0];
    newValues[0] = values[0];
    this.setState({
      femaleSliderValue: newValues,
    });
  };

  femaleSliderChangeFinish = () => {
    this.setState({
      femaleSlider: false,
    });
  };
  maleSliderChangeStart = () => {
    this.setState({
      maleSlider: true,
    });
  };

  maleSliderValuesChange = values => {
    let newValues = [0];
    newValues[0] = values[0];
    this.setState({
      maleSliderValue: newValues,
    });
  };

  maleSliderChangeFinish = () => {
    this.setState({
      maleSlider: false,
    });
  };

  totalParticipantsvalues = values => {
    this.setState({
      totalParticipants: values,
    });
  };

  ageRestrictvalues = values => {
    this.setState({
      ageRestrict: values,
    });
  };

  toggleSwitch() {
    this.setState({
      verifiedUsers: !this.state.verifiedUsers
    })
  };

  toggleAgeRestriction() {
    this.setState({
      ageRestriction: !this.state.ageRestriction
    })
  }

  toggleGender() {
    this.setState({
      genderMix: !this.state.genderMix
    })
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButtonStyle}>
            <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} />
            <Text style={styles.headerText} > {strings.createEvent} </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SaveModal')} style={styles.skipView}  >
            <Text style={styles.skipText} > {strings.save} </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.stepText} > {strings.createEventStep3} </Text>
        <Progress.Bar style={styles.progressBar} progress={75 / 100} width={vw(388)} color={Colors.green} unfilledColor={Colors.progressBarColor} borderColor={Colors.progressBarColor} animated={true} />
        <ScrollView bounces={false} showsVerticalScrollIndicator={false} >
          <View style={styles.bottomView}>
            <View style={styles.family}>
              <Text style={styles.select} > {strings.verified} </Text>
              <View style={styles.select2} >
                <Text style={styles.familyText} > {this.state.verifiedUsers ? strings.Yes : strings.No} </Text>
                <View style={styles.switch} >
                  <CustomSwitch switchEnabled={this.state.verifiedUsers} switchPosition={this.state.switchPosition} toggleSwitch={() => this.toggleSwitch()} />
                </View>
              </View>
            </View>
            <View style={styles.separator3} />
            <Text style={[styles.select, { marginTop: vh(18.7) }]}> {strings.totalParticipants} </Text>
            <Text style={styles.totalParticipantsText} >{this.state.totalParticipants[0]}{'-'}{this.state.totalParticipants[1]} </Text>
            <View style={styles.margin} >
              <MultiSlider
                values={[
                  this.state.totalParticipants[0],
                  this.state.totalParticipants[1],
                ]}
                sliderLength={vw(370)}
                onValuesChange={this.totalParticipantsvalues}
                min={2}
                max={100}
                step={1}
                allowOverlap={false}
                snapped
                minMarkerOverlapDistance={40}
                selectedStyle={{
                  backgroundColor: Colors.brightGreen,
                }}
                trackStyle={{
                  height: vh(4),
                }}
              />
              <View style={styles.sliderStyle}>
                <Text style={styles.sliderText} >2</Text>
                <Text style={styles.sliderText} >100</Text>
              </View>
            </View>
            <View style={styles.separator3} />
            <View style={styles.family} >
              <Text style={styles.select} > {strings.ageRestriction} </Text>
              <View style={styles.select2} >
                <Text style={styles.familyText} > {this.state.ageRestriction ? strings.Yes : strings.No} </Text>
                <View style={styles.switch} >
                  <CustomSwitch switchEnabled={this.state.ageRestriction} switchPosition={this.state.switchPositionAge} toggleSwitch={() => this.toggleAgeRestriction()} />
                </View>
              </View>
            </View>
            <View style={styles.separator3} />
            {this.state.ageRestriction &&
              <View>
                <Text style={[styles.select, { marginTop: vh(18.7) }]}> {strings.age} </Text>
                <Text style={styles.totalParticipantsText} >{this.state.ageRestrict[0]}{'-'}{this.state.ageRestrict[1]} </Text>
                <View style={styles.margin} >
                  <MultiSlider
                    values={[
                      this.state.ageRestrict[0],
                      this.state.ageRestrict[1],
                    ]}
                    sliderLength={vw(370)}
                    onValuesChange={this.ageRestrictvalues}
                    min={18}
                    max={100}
                    step={1}
                    allowOverlap={false}
                    snapped
                    minMarkerOverlapDistance={40}
                    selectedStyle={{
                      backgroundColor: Colors.brightGreen,
                    }}
                    trackStyle={{
                      height: vh(4),
                    }}
                  />
                  <View style={styles.sliderStyle}>
                    <Text style={styles.sliderText} >18</Text>
                    <Text style={styles.sliderText} >100</Text>
                  </View>
                </View>
                <View style={styles.separator3} />
              </View>
            }
            <View style={styles.family} >
              <Text style={styles.select} > {strings.genderMix} </Text>
              <View style={styles.select2} >
                <Text style={styles.familyText} > {this.state.genderMix ? strings.Yes : strings.No} </Text>
                <View style={styles.switch} >
                  <CustomSwitch switchEnabled={this.state.genderMix} switchPosition={this.state.switchPositionMaleFemale} toggleSwitch={() => this.toggleGender()} />
                </View>
              </View>
            </View>

            {this.state.genderMix &&
              <View>
                <Text style={[styles.select, { marginTop: vh(18.7) }]}> {strings.femaleMix} </Text>
                <Text style={styles.totalParticipantsText} >{this.state.femaleSliderValue} </Text>
                <View style={styles.margin} >
                  <MultiSlider
                    values={this.state.femaleSliderValue}
                    sliderLength={340}
                    onValuesChangeStart={this.femaleSliderChangeStart}
                    onValuesChange={this.femaleSliderValuesChange}
                    onValuesChangeFinish={this.femaleSliderChangeFinish}
                    selectedStyle={{
                      backgroundColor: Colors.brightGreen,
                    }}
                    trackStyle={{
                      height: vh(4),
                    }}
                    max={100}
                  />
                  <View style={styles.sliderStyle}>
                    <Text style={styles.sliderText} >0</Text>
                    <Text style={styles.sliderText} >100</Text>
                  </View>
                </View>
                <View style={styles.separator3} />
                <Text style={[styles.select, { marginTop: vh(18.7) }]}> {strings.maleMix} </Text>
                <Text style={styles.totalParticipantsText} >{this.state.maleSliderValue} </Text>
                <View style={styles.margin} >
                  <MultiSlider
                    values={this.state.maleSliderValue}
                    sliderLength={340}
                    onValuesChangeStart={this.maleSliderChangeStart}
                    onValuesChange={this.maleSliderValuesChange}
                    onValuesChangeFinish={this.maleSliderChangeFinish}
                    selectedStyle={{
                      backgroundColor: Colors.brightGreen,
                    }}
                    trackStyle={{
                      height: vh(4),
                    }}
                    max={100}
                  />
                  <View style={styles.sliderStyle}>
                    <Text style={styles.sliderText} >0</Text>
                    <Text style={styles.sliderText} >100</Text>
                  </View>
                </View>
              </View>
            }
            <View style={styles.separator3} />

          </View>
        </ScrollView>



        <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.buttonStyleGradient}  >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CreateEventStep4')}
            activeOpacity={1}
          >
            <VectorIcons.Ionicons name='ios-arrow-round-forward' size={vh(55)} color={Colors.white} style={styles.icon} />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}
