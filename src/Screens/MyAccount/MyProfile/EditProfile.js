import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux'

import styles from './styles';
import { strings, Images, VectorIcons, Colors, vh } from '../../../Constants';

const colors = [
    Colors.fadedRed,
    Colors.darkViolet,
  ];

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  changeDP = () => {
      console.warn('okk')
  }

  render() {
    return (
        <View style={styles.containerView}>
        <View style={styles.arrowView}>
          <VectorIcons.Ionicons
            name='ios-arrow-round-back'
            color={Colors.white}
            size={vh(45)}
            onPress={() => this.props.navigation.pop()}
          />
          <TouchableOpacity onPress={() => this.props.navigation.pop()} >
        <Text style={styles.saveTxt}>SAVE</Text>
          </TouchableOpacity>
        </View>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false} >
          <LinearGradient colors={colors} style={styles.gradient}>
              <Image source={{ uri: this.props.profileData.profilePic }} style={styles.picStyle} />
              <TouchableOpacity activeOpacity={1} onPress={() => this.changeDP}>
              <View style={styles.cameraView}>
                <Image source={Images.camera} />
              </View>
            </TouchableOpacity>
            <Text style={styles.nameTxt}>{this.props.profileData.name}</Text>
            <Text style={styles.addressTxt}>{this.props.profileData.address}</Text>
          </LinearGradient>
        </ScrollView>
      </View>
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
  )(EditProfile);