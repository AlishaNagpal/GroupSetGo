import React, { PureComponent } from 'react';
import {
  View,
  Image,
  Animated,
  TouchableOpacity,
  Text,
  ScrollView,
  RefreshControl,
  Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux'

//Custom Imports
import styles from './style';
import { Images, VectorIcons, Colors, vh, strings } from '../../../Constants';
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
import { Toast } from '../../../ReusableComponents'
class ExploreHomeScreen extends PureComponent {
  state = {
    opacityChanged: false,
    opac: 0,
    rotateRight: false,
    refresh: false,
    call: false
  };
  rotateValue = new Animated.Value(0);
  constructor() {
    super();
    this.rotateValue.addListener(({ value }) => this.setState({ opac: value }));
  }

  componentDidMount(){
    
  }

  onRefresh = () => {
    this.setState({
      refresh: true
    })
    setTimeout(() => {
      this.setState({ refresh: false })
    }, 2000)
  }

  resetCall = (value) => {
    this.setState({
      call: value
    })
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
        <View style={[styles.mainContainer, { marginTop: Platform.OS === 'ios' ? vh(27) : vh(0) }]}>
          <View style={styles.headerView}>
            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('MyAccount')} >
            <Image source={this.props.profileData.type === 'normal' ? this.props.profileData.profilePic : {uri : this.props.profileData.profilePic}} style={styles.headerImage} />
            </TouchableOpacity>

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

            <TouchableOpacity onPress={() => this.resetCall(true)} >
              <VectorIcons.MaterialCommunityIcons
                name="bell-outline"
                size={vh(22)}
                color={Colors.fadedRed}
                style={styles.notification}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.sortFilterView}>
            <TouchableOpacity style={styles.sortStyle} onPress={() => this.props.navigation.navigate('SortDialog')}>
              <Text style={styles.sortText}> {strings.sort} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortStyle} onPress={() => this.props.navigation.navigate('Filter')}>
              <Text style={styles.sortText}> {strings.filter} </Text>
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
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ opacity: 1 - this.state.opac, paddingBottom: vh(60) }}
                refreshControl={
                  <RefreshControl refreshing={this.state.refresh} onRefresh={this.onRefresh} />
                }
              >
                <HomeScreen navigate={this.props.navigation.navigate} />
              </ScrollView>
            ) : (
                <View
                  style={{
                    opacity: this.state.opac,
                    position: 'absolute',
                    flexDirection: 'column'
                  }}>
                  <ExploreMapScreen navigate={this.props.navigation.navigate} />
                </View>
              )}
          </Animated.View>
        </View>
        <LinearGradient colors={colors} style={styles.gradient}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateEventStep1')} >
            <Image source={Images.calendar} style={styles.calendar} />
          </TouchableOpacity>
        </LinearGradient>
        {this.state.call === true &&
          <Toast top={-30} from={30} to={-30} message={strings.UnderWork} call={(value) => this.resetCall(value)} />
        }
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { profileData } = state.Reducer;
  return {
    profileData
  }
}

export default connect(
  mapStateToProps,
)(ExploreHomeScreen);