import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Animated, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux'
import { LoginManager } from 'react-native-fbsdk'
import { StackActions, NavigationActions } from 'react-navigation';

// Custom Imports
import styles from './styles';
import { Strings, Images, VectorIcons, Colors, vh, vw } from '../../../Constants';
import Header from '../Header';
import CustomSwitch from '../../../ReusableComponents/CustomSwitch/CustomSwitch';
import Flatlist from '../Flatlist';
import {Logout} from '../../../Store/Action/Action';

class Settings extends Component {
  state = {
    switchEnabled: false,
    switchPosition: new Animated.ValueXY({ x: vw(0), y: vh(0) }),
    isLoading: false,
  };

  toggleSwitch() {
    this.setState({
      switchEnabled: !this.state.switchEnabled
    })
  };

  myList = (myData) => {
    return (
      myData.map((item, i) => {
        return (
          Flatlist(item, i, this.props.navigation)
        )
      })
    )
  }

  render() {
    return (
      <View style={styles.containerView}>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.pop()} style={styles.headerView} >
          {Header(Strings.settings)}
        </TouchableOpacity>
        <View style={styles.listView} >
          <Text style={styles.listText}>{Strings.touch}</Text>
          <CustomSwitch switchEnabled={this.state.switchEnabled} switchPosition={this.state.switchPosition} toggleSwitch={() => this.toggleSwitch()} />
        </View>
        {this.myList(DATA)}       
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    Logout: () => dispatch(Logout())
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
  mapDispatchToProps
)(Settings);

const DATA = [
  { title: 'Notification Settings', route: 'Notification' },
  { title: 'Privacy Settings', route: 'Privacy' },
  { title: 'Blocked Users', route: 'Blocked' },
]