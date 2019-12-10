import React, {PureComponent} from 'react';
import {
  View,
  Image,
  Animated,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//Custom Imports
import styles from './style';
import {Images, VectorIcons, Colors, vh} from '../../../Constants';
const colors = [
  Colors.moderateRed,
  Colors.moderatePink,
  Colors.darkModeratePink,
  Colors.darkViolet,
  Colors.darkViolet,
  Colors.darkViolet,
];
import HomeScreen from './HomeScreen';
import ExploreMapScreen from './ExploreMapScreen';

export default class ExploreHomeScreen extends PureComponent {
  state = {
    opacityChanged: false,
    opac: 0,
    rotateRight: false,
  };
  rotateValue = new Animated.Value(0);
  constructor() {
    super();
    this.rotateValue.addListener(({value}) => this.setState({opac: value}));
  }

  rotateView = () => {
    Animated.timing(this.rotateValue, {
      toValue: this.state.rotateRight ? 0 : 1,
      duration: 100,
    }).start(() =>
      this.setState({
        rotateRight: !this.state.rotateRight,
      }),
    );
  };

  spin = this.rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  render() {
    return (
      <React.Fragment>
        <View style={styles.mainContainer}>
          <View style={styles.headerView}>
            <Image source={Images.maleImage} style={styles.headerImage} />
            <TouchableOpacity
              style={styles.textInputView}
              onPress={() =>
                this.props.navigation.navigate('ExploreEventsUsers')
              }>
              <VectorIcons.Ionicons
                name="md-search"
                size={vh(15)}
                color={Colors.black}
              />
              <Text style={styles.headerTextInput}> Search event, users </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.rotateView}>
              <VectorIcons.FontAwesome
                name={'map-o'}
                size={vh(18)}
                color={Colors.fadedRed}
                style={styles.map}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <VectorIcons.MaterialCommunityIcons
                name="bell-outline"
                size={vh(22)}
                color={Colors.fadedRed}
                style={styles.notification}
              />
            </TouchableOpacity>
          </View>
          <Animated.View
            style={{
              transform: [
                {
                  rotateY: this.spin,
                },
              ],
            }}>
            {!this.state.rotateRight ? (
              <ScrollView
                contentContainerStyle={{opacity: 1 - this.state.opac}}
                bounces={false}>
                <HomeScreen navigate={this.props.navigation.navigate} />
              </ScrollView>
            ) : (
              <View
                style={{
                  opacity: this.state.opac,
                  position: 'absolute',
                  flexDirection: 'column'
                }}>
                <ExploreMapScreen />
              </View>
            )}
          </Animated.View>
        </View>
        <LinearGradient colors={colors} style={styles.gradient}>
          <TouchableOpacity>
            <Image source={Images.calendar} style={styles.calendar} />
          </TouchableOpacity>
        </LinearGradient>
      </React.Fragment>
    );
  }
}
