import React, { PureComponent } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'


//Custom Imports
import styles from './style'
import { Images, VectorIcons, Colors, vh } from '../../../Constants'
const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]
import HomeScreen from './HomeScreen'

export default class ExploreHomeScreen extends PureComponent {

  render() {
    return (
      <React.Fragment>

        <View style={styles.mainContainer} >
          <View style={styles.headerView}>
            <Image
              source={Images.maleImage}
              style={styles.headerImage}
            />
            <TouchableOpacity style={styles.textInputView} onPress={() => this.props.navigation.navigate('ExploreEventsUsers')} >
              <VectorIcons.Ionicons name="md-search" size={vh(15)} color={Colors.black} />
              <Text style={styles.headerTextInput} > Search event, users </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Map')} >
              <VectorIcons.FontAwesome name={"map-o"} size={vh(18)} color={Colors.fadedRed} style={styles.map} />
            </TouchableOpacity>

            <TouchableOpacity>
              <VectorIcons.MaterialCommunityIcons name="bell-outline" size={vh(22)} color={Colors.fadedRed} style={styles.notification} />
            </TouchableOpacity>
          </View>
          <ScrollView bounces = {false} >
            <HomeScreen />
          </ScrollView>
        </View>
        <LinearGradient colors={colors} style={styles.gradient} >
          <TouchableOpacity>
            <Image source={Images.calendar} style={styles.calendar} />
          </TouchableOpacity>
        </LinearGradient>
      </React.Fragment>
    );
  }
}
