import React, { PureComponent } from 'react';
import {
  View,
  Animated,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
import LinearGradient from 'react-native-linear-gradient';

/**
 * custom imports
 */
import { vh, Colors, Images, strings, vw, VectorIcons } from '../../Constants';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import RadioButton from '../../ReusableComponents/RadioButton';

const colors = [Colors.fadedRed, Colors.darkishPink];

export default class AddGuests extends PureComponent {
  state = {
    switchValue: false,
    switchEnabled: false,
    maleChosen: true,
    femaleChosen: false,
    guestsData: [{ no: 1 }],
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

  constructor() {
    super();
    this.switchPosition = new Animated.ValueXY({ x: vw(0), y: vh(0) });
  }

  toggleSwitch = () => {
    Animated.timing(this.switchPosition, {
      toValue: this.state.switchEnabled
        ? { x: vw(0), y: vh(0) }
        : { x: vw(20), y: vh(0) },
      duration: 200,
    }).start(() => this.setState({ switchEnabled: !this.state.switchEnabled }));
  };

  renderGuestsEntryList = rowData => {
    return (
      <View>
        <Text style={styles.guestStyle}>GUEST {rowData.index + 1}</Text>
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
                buttonSize={25}
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
                buttonSize={25}
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
      <View style={{ flex: 1, backgroundColor: Colors.whitishGray }}>
        <View style={styles.containerStyle}>
          <TouchableOpacity style={styles.crossBtnStyle}>
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
            <TouchableOpacity
              onPress={this.toggleSwitch}
              activeOpacity={1}
              style={{
                width: vw(47.3),
                height: vw(30),
                backgroundColor: this.state.switchEnabled
                  ? 'green'
                  : Colors.lightGray,
                borderRadius: vw(13),
                justifyContent: 'center',
              }}>
              <Animated.View
                style={[
                  styles.switchAnimatedViewStyle,
                  this.switchPosition.getLayout(),
                ]}></Animated.View>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.switchEnabled && (
          <View style={[styles.containerStyle, { flex: 1 }]}>
            <Text style={styles.howManyGuestsStyle}>
              {strings.howManyGuests}
            </Text>
            <Text style={styles.youCanBringStyle}>{strings.youCanBring}</Text>

            <FlatList
              data={this.state.guestsData}
              bounces={false}
              //   scrollEnabled = {false}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.no.toString()}
              renderItem={this.renderGuestsEntryList}
            />
            <LinearGradient
              colors={colors}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.gradientStyle}>
              <TouchableOpacity
                onPress={() => {
                  {
                    this.state.guestsData.length < 4
                      ? this.setState({
                        guestsData: [
                          ...this.state.guestsData,
                          { no: this.state.guestsData.length + 1 },
                        ],
                      })
                      : console.warn('guests limit reached');
                  }
                }}
                style={styles.addMoreGuestsBtnStyle}>
                <VectorIcons.AntDesign
                  name="adduser"
                  color={Colors.white}
                  size={vh(30)}
                />

                {/* <Text style = {{color: Colors.white, fontSize: vw(45) }}>+</Text> */}
              </TouchableOpacity>
            </LinearGradient>
          </View>
        )}
      </View>
    );
  }
}
