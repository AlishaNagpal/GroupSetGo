import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux'

import Styles from './Styles';
import { Colors, vh, Images, Strings } from '../../../../Constants';

class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  DATA = [
    { imgSrc: Images.profileBio, head: Strings.biography, text: this.props.profileData.biography },
    { imgSrc: Images.bday, head: Strings.bday, text: this.props.profileData.birthday },
    { imgSrc: Images.gender, head: Strings.gender, text: this.props.profileData.gender },
    { imgSrc: Images.phone, head: Strings.phone, text: this.props.profileData.phone },
  ]

  myList = (myData) => {
    return (
      myData.map((item, i) => {
          return (
            <View style={Styles.cardStyle}>
            <Image source={item.imgSrc} style={Styles.img} />
            <View style={Styles.separator} />
            <View style={Styles.textView}>
              <Text style={Styles.heading}>{item.head}</Text>
              <Text style={Styles.title}>{item.text}</Text>
            </View>
          </View>
          )
      })
  )
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={Styles.mainView}>
          {this.myList(this.DATA)}
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

