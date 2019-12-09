import React, { PureComponent } from 'react';
import { View, Image, TouchableOpacity, Text, FlatList, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'

//Custom Imports
import styles from './style'
import { Images, VectorIcons, Colors, vh, vw } from '../../../Constants'
const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]
import { eventDATA } from '../../../Store/Action/Action'

class ExploreHomeScreen extends PureComponent {
  callScreen(id) {
    this.props.navigation.navigate('HomeDetails6', {
      data: this.props.Event_Data, 
      id: {id}
    })
  }

  toggle(id, value) {
    let index = this.props.Event_Data.findIndex((e) => e.serialNo === id)
    if (index != -1) {
      this.props.Event_Data[index].hearted = !value
      this.props.eventDATA()
    }
  }

  renderData = (rowData) => {
    let { item } = rowData
    return (
      <View style={styles.flatlistView} >
        <TouchableOpacity activeOpacity={1} onPress={() => this.callScreen(item.serialNo)} >
          <Image source={item.source} style={styles.flatlistImage} />
          <TouchableOpacity onPress={() => { this.toggle(item.serialNo, item.hearted) }} style={styles.heart} activeOpacity={1}  >
            <Image source={item.hearted ? Images.heartFilled : Images.heartEmpty} />
          </TouchableOpacity>
          <View style={styles.cheersView} >
            <Image source={Images.cheers} style={styles.cheers} />
          </View>
          <View style={styles.belowImage} >
            <View style={styles.goingView} >
              <Text style={styles.timeText} > {item.time} </Text>
              <View style={styles.goingIcon} >
                <Image source={Images.run} style={styles.runIcon} />
                <Text style={styles.goingText} > {item.going} </Text>
              </View>
            </View>
            <Text style={styles.headingText}> {item.heading} </Text>
            <View style={styles.moneyView}>
              <Text style={styles.place}> {item.place} </Text>
              <View style={styles.elongatedView} />
              <Text style={styles.moneyText}> {item.money} </Text>
              <Text style={styles.moneyPerson}> per person </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  renderData2 = rowData => {
    let {item} = rowData;
    return (
      <View style={[styles.flatlistView, { width: vw(186.7), height: vw(106.7), }]} >
        <TouchableOpacity activeOpacity={1} onPress={() => this.callScreen()} >
          <Image source={item.source} style={styles.flatlist2Image} />
          <TouchableOpacity onPress={() => { this.toggle(item.serialNo, item.hearted) }} style={styles.flatlist2Heart} activeOpacity={1}  >
            <Image source={item.hearted ? Images.heartFilled : Images.heartEmpty} />
          </TouchableOpacity>
          <View style={styles.IconView} >
            <Image source={item.icon} style={styles.iconSize} />
          </View>
          <View style={styles.belowImage2} >
            <View style={styles.goingView} >
              <Text style={styles.timeText} > {item.time} </Text>
              <View style={styles.goingIcon} >
                <VectorIcons.MaterialCommunityIcons name='run-fast' size={vh(12)} color={Colors.fadedGray} />
                <Text style={styles.goingText} > {item.going} </Text>
              </View>
            </View>
            <Text numberOfLines = {1}  style={styles.headingText2} > {item.heading} </Text>
            <Text style={styles.place2} > {item.place} </Text>
            <View style={styles.perPerson} >
              <Text style={styles.moneyText} > {item.money} </Text>
              <Text style={styles.moneyPerson} > per person </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <React.Fragment>
        <ScrollView bounces = {false}>
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
            <View style={styles.sortFilterView} >
              <TouchableOpacity style={styles.sortStyle} >
                <Text style={styles.sortText} > Sort </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sortStyle} >
                <Text style={styles.sortText} > Filter </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.recommendedText} > Recommended </Text>
            <View style={styles.flatlistHeight} >
              <FlatList
                keyExtractor={(item) => item.serialNo.toString()}
                data={this.props.Event_Data}
                renderItem={this.renderData}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <Text style={styles.allEvents} > All Events </Text>
            <View style={styles.flatlistHeight2} >
              <FlatList
                keyExtractor={(item) => item.serialNo.toString()}
                data={this.props.Event_Data}
                renderItem={this.renderData2}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </ScrollView>
        <LinearGradient colors={colors} style={styles.gradient} >
          <TouchableOpacity>
            <Image source={Images.calendar} style={styles.calendar} />
          </TouchableOpacity>
        </LinearGradient>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    eventDATA: () => dispatch(eventDATA())
  }
}

function mapStateToProps(state) {
  const { Event_Data } = state.Reducer;
  return {
    Event_Data
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreHomeScreen);
