import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux'

import Styles from './Styles';
import {Colors, vh, Images, Strings} from '../../../../Constants';

class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={Styles.mainView}>
          <View style={Styles.cardStyle}>
            <Image source={Images.profileBio} style={Styles.img} />
            <View style={Styles.separator} />
            <View style={Styles.textView}>
              <Text style={Styles.heading}>Biography</Text>
              <Text style={Styles.title}>{this.props.profileData.biography}</Text>
              </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
      
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
)(Basic);
