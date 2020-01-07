import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux'

import Styles from './Styles';
import { Colors, vh, Images, Strings, VectorIcons, vw } from '../../../../Constants';
import ListData from './ListData';

class Basic extends Component {

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
          <ListData
            item={item}
            i={i}
          />
        )
      })
    )
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={Styles.mainView}>
          {this.myList(this.DATA)}
          <View style={Styles.cardStyle}>
            <VectorIcons.FontAwesome name='smile-o' color={Colors.fadedRed} size={vw(48)} style={Styles.img} />
            <View style={Styles.separator} />
            <View style={Styles.textView}>
              <Text style={Styles.heading}>{Strings.hobies}</Text>
              <Text style={Styles.title}>{this.props.profileData.hobbies[0]}</Text>
            </View>
          </View>
          <View style={Styles.cardStyle}>
            <VectorIcons.SimpleLineIcons name='heart' color={Colors.fadedRed} size={vw(43)} style={Styles.img} />
            <View style={Styles.separator} />
            <View style={Styles.textView}>
              <Text style={Styles.heading}>{Strings.interest}</Text>
              <Text style={Styles.title}>{this.props.profileData.interest[0]}</Text>
            </View>
          </View>
          <View style={Styles.cardStyle}>
            <VectorIcons.AntDesign name='idcard' color={Colors.fadedRed} size={vw(43)} style={Styles.img} />
            <View style={Styles.separator} />
            <View style={Styles.idView}>
              <View style={Styles.textView}>
                <Text style={Styles.heading}>{Strings.personalID}</Text>
                <Text style={Styles.title}>DL.jpg</Text>
              </View>
              <Image source={Images.delete} style={Styles.img} />
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

