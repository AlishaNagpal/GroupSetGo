import React, { PureComponent } from 'react';
import {
  View,
  Animated,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

/**
 * custom imports
 */
import { vh, Colors, Images, strings, vw, VectorIcons, DesignHeight } from '../../Constants';
import styles from './styles';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import RadioButton from '../../ReusableComponents/RadioButton';
import CustomSwitch from '../../ReusableComponents/CustomSwitch/CustomSwitch';

import TextField from '../../ReusableComponents/customInput/TextField'
const colors = [Colors.fadedRed, Colors.darkishPink];

export default class AddGuests extends PureComponent {
  state = {
    switchEnabled: false,
    maleChosen: true,
    femaleChosen: false,
    guestsData: [{ no: 1 }],
    switchPosition: new Animated.ValueXY({ x: vw(0), y: vh(0) }),
    scrollViewHeight: vh(DesignHeight)
  };

  clicked(check, id) {
    if (id === 1) {
      this.setState({
        maleChosen: check,
        femaleChosen: !check,
      });
    } else {
      this.setState({
        maleChosen: !check,
        femaleChosen: check,
      });
    }
  }

  toggleSwitch() {
    this.setState({
      switchEnabled: !this.state.switchEnabled
    })
  };

  deleteGuestCard = (index) => {
    index > 0 &&
      this.state.guestsData.splice(index, 1);
    this.setState({
      guestsData: [...this.state.guestsData]
    }, () => { this.setState({ scrollViewHeight: this.state.scrollViewHeight - vh(300) }) })
  }

  // reAssignScrollViewHeight = () => {
  //   console.warn("asdasds")
  //   newHeight = this.scrollViewHeight + ((this.state.guestsData.length - 1) * 230)
  //   this.setState({
  //     scrollViewHeight: newHeight
  //   })
  // }

  renderGuestCards = rowData => {
    return (
      <View style={styles.cardContainerStyle}>
        <View style={styles.guestDeleteViewStyle}>
          <Text style={styles.guestStyle}>GUEST {rowData.index + 1}</Text>
          {rowData.index > 0 && <TouchableOpacity onPress={() => { this.deleteGuestCard(rowData.index) }} style={{ padding: vw(5), alignItems: 'center', justifyContent: 'center' }}>
            <VectorIcons.AntDesign name='delete' size={vw(20)} color={Colors.fadedRed} />
          </TouchableOpacity>}
        </View>
        <View style={[styles.separatorStyle, { marginTop: vh(16.7) }]} />
        <TextInput
          style={styles.nameTextInputStyle}
          placeholder="Name"
          value={this.state.nameOfGuest}
          onChangeText={text => this.setState({ nameOfGuest: text })}
        />
        <TextInput
          style={styles.ageTextInputStyle}
          placeholder="Age"
          value={this.state.ageOfGuest}
          onChangeText={text => this.setState({ ageOfGuest: text })}
        />
        <Text style={styles.genderTextStyle}>Gender</Text>
        <View style={styles.radioButtonStyle}>
          <View style={styles.radioButtonView}>
            <TouchableOpacity
              onPress={() => {
                this.clicked(true, 1);
              }}
              style={styles.radioButton}>
              <RadioButton
                innerCircleDimension={12}
                outerCircleDimension={20}
                outColor={Colors.fadedRed}
                inColor={Colors.fadedRed}
                isCheck={this.state.maleChosen}
              />
            </TouchableOpacity>
            <Text style={styles.radioText}> {strings.male} </Text>
          </View>
          <View style={styles.radioButtonView}>
            <TouchableOpacity
              onPress={() => {
                this.clicked(true, 2);
              }}
              style={styles.radioButton}>
              <RadioButton
                innerCircleDimension={12}
                outerCircleDimension={20}
                outColor={Colors.fadedRed}
                inColor={Colors.fadedRed}
                isCheck={this.state.femaleChosen}
              />
            </TouchableOpacity>
            <Text style={styles.radioText}> {strings.female} </Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <>
        <ScrollView
          scrollEnabled={this.state.guestsData.length > 1}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ height: this.state.scrollViewHeight, backgroundColor: Colors.whitishGray }}
        >
          <View style={styles.containerStyle}>
            <TouchableOpacity onPress = {()=>this.props.navigation.goBack()} style={styles.crossBtnStyle}>
              <Image
                source={Images.cancelImage}
                style={styles.crossBtnImageStyle}
              />
            </TouchableOpacity>
            <Text style={styles.letsStartStyle}>
              {strings.letsStartWithEvent}
            </Text>
            <Text style={styles.justAMinuteStyle}>{strings.justAMinute}</Text>
            <View style={styles.separatorStyle} />
            <View style={styles.switchViewStyle}>
              <Text style={styles.doYouWantAccomopanyStyle}>
                {strings.doYouWantAccompany}
              </Text>
              <CustomSwitch switchEnabled={this.state.switchEnabled} switchPosition={this.state.switchPosition} toggleSwitch={() => this.toggleSwitch()} />
            </View>
          </View>
          {this.state.switchEnabled && (
            <View style={[styles.containerStyle, { height: this.state.scrollViewHeight }]}>
              <Text style={styles.howManyGuestsStyle}>
                {strings.howManyGuests}
              </Text>
              <Text style={styles.youCanBringStyle}>{strings.youCanBring}</Text>

              <FlatList
                data={this.state.guestsData}
                bounces={false}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.no.toString()}
                renderItem={this.renderGuestCards}
              />
            </View>
          )}
        </ScrollView >

        {this.state.switchEnabled && <LinearGradient
          colors={colors}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientStyleAddUser}>
          <TouchableOpacity
            onPress={() => {
              {
                this.state.guestsData.length < 4
                  ? this.setState({
                    guestsData: [
                      ...this.state.guestsData,
                      { no: this.state.guestsData.length + 1 },
                    ],
                  }, () => { this.setState({ scrollViewHeight: this.state.scrollViewHeight + vh(300) }) })
                  : console.warn('guests limit reached');
              }
            }}
            style={styles.addMoreGuestsBtnStyle}>
            <VectorIcons.AntDesign
              name="adduser"
              color={Colors.white}
              size={vh(30)}
            />
          </TouchableOpacity>
        </LinearGradient>}
        {
          <LinearGradient
          colors={colors}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientStyleNextArrow}>
          <TouchableOpacity
            onPress={() => {
              // this.props.navigation.navigate("Review","K")
              this.props.navigation.push('Review')
            }}
            style={styles.addMoreGuestsBtnStyle}>
            <VectorIcons.FontAwesome
              name="long-arrow-right"
              color={Colors.white}
              size={vh(30)}
            />
          </TouchableOpacity>
        </LinearGradient>
        }
      </>
    );
  }
}
