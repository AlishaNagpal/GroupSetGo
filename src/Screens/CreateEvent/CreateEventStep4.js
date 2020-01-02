import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated, FlatList } from 'react-native';
import { VectorIcons, vh, Colors, strings, vw } from '../../Constants'
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
    minPersonCost: '50',
    maxPersonCost: '100',
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
    console.log("checking states", this.state['breakDown_' + value])
  }

  callAlert = () => {
    if (this.state.cancelByDate === null || this.props.totalCostValue === '' || this.state.minPersonCost === '' || this.state.maxPersonCost === '' || this.state.breakDown1 === '') {
      this.resetCall(true)
    } else {
      this.props.navigation.navigate('PublishModel')
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
                  />
                  <VectorIcons.Octicons name='dash' color={Colors.black} size={vw(15)} />
                  <TextInput
                    style={[styles.perPersonTextInput, { marginLeft: vw(5) }]}
                    value={this.state.maxPersonCost}
                    onChangeText={(text) => this.setState({ maxPersonCost: text })}
                    keyboardType={'number-pad'}
                    ref={ref => this.input3 = ref}
                    onSubmitEditing={() => this.submitInput(3)}
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