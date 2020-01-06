import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux'

// custom imports
import styles from './styles';
import { strings, Images, VectorIcons, Colors, vh } from '../../../Constants';
import ProfileTab from './ProfileTab';
import { Toast } from '../../../ReusableComponents'

const colors = [
  Colors.fadedRed,
  Colors.darkViolet,
];

class MyProfile extends PureComponent {

  state = { call: false }

  resetCall = (value) => {
    this.setState({
      call: value
    })
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
          <TouchableOpacity onPress={()=>this.setState({call:true})} >
            <Image source={Images.editProfile} />
          </TouchableOpacity>
        </View>
        <ScrollView bounces={false} >
          <LinearGradient colors={colors} style={styles.gradient}>
            <Image source={{ uri: this.props.profileData.profilePic }} style={styles.picStyle} />
            <Text style={styles.nameTxt}>{this.props.profileData.name}</Text>
            <Text style={styles.addressTxt}>{this.props.profileData.address}</Text>
          </LinearGradient>
          <ProfileTab />
        </ScrollView>
        {this.state.call === true &&
          <Toast top={-30} from={30} to={-30} message={strings.UnderWork} call={(value) => this.resetCall(value)} />
        }
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
)(MyProfile);
