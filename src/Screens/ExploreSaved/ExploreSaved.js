import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Images, strings } from '../../Constants';
import styling from './styles';
import { connect } from 'react-redux'
import { SavedEvents, GetSavedEvents, eventDATA } from '../../Store/Action/Action'
import { ProgressiveImage } from '../../ReusableComponents'

class ExploreSaved extends Component {

  state = { isFetching: false }

  onRefresh = () => {
    this.setState({
      isFetching: true
    })
    setTimeout(() => {
      this.setState({
        isFetching: false
      })
    }, 1000);
  }

  verifying = () => {
    this.props.GetSavedEvents
    if (this.props.savedEvents.length === 0) {
      return (
        <View style={styling.center} >
          <Image
            source={Images.logo}
            style={styling.imageStyle}
          />
          <Text style={styling.text} > {strings.noSaved} </Text>
        </View>
      )
    } else {
      return (
        <FlatList
          keyExtractor={item => item.serialNo.toString()}
          data={this.props.savedEvents}
          renderItem={this.renderData}
          showsVerticalScrollIndicator={false}
          onRefresh={this.onRefresh}
          refreshing={this.state.isFetching}
        />
      )
    }
  }

  callScreen = id => {
    this.props.navigation.navigate('HomeDetails6', {
      data: this.props.Event_Data,
      id: { id },
    });
  };

  toggle = (id, value) => {
    let index = this.props.Event_Data.findIndex(e => e.serialNo === id);
    if (index != -1) {
      this.props.Event_Data[index].hearted = !value;
      this.props.eventDATA();
    }
    if (value === false) {
      this.props.SavedEvents(this.props.Event_Data[index])
    } else if (value === true) {
      let temporary = this.props.savedEvents
      let indexToDelete = temporary.findIndex(item => item.serialNo === id)
      if (indexToDelete !== -1) {
        this.props.savedEvents.splice(indexToDelete, 1)
      }
    }
    setTimeout(() => {
      console.log(this.props.savedEvents)
    }, 1000);
  };


  renderData = rowData => {
    let { item } = rowData;
    return (
      <View style={styling.flatlistView}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.callScreen(item.serialNo)}>
          <ProgressiveImage
            thumbnailSource={{ uri: item.thumbnail }}
            source={{ uri: item.source }}
            style={styling.flatlistImage}
          />

          <TouchableOpacity
            onPress={() => {
              this.toggle(item.serialNo, item.hearted);
            }}
            style={styling.heart}
            activeOpacity={1}>
            <Image
              source={item.hearted ? Images.heartFilled : Images.heartEmpty}
            />
          </TouchableOpacity>

          <View style={styling.cheersView}>
            <Image source={item.icon} style={styling.cheers} />
          </View>
          <View style={styling.belowImage}>
            <View style={styling.goingView}>
              <Text style={styling.timeText}> {item.time} </Text>
              <View style={styling.goingIcon}>
                <Image source={Images.run} style={styling.runIcon} />
                <Text style={styling.goingText}> {item.going} </Text>
              </View>
            </View>
            <Text style={styling.headingText}> {item.heading} </Text>
            <View style={styling.moneyView}>
              <Text style={styling.place}> {item.place} </Text>
              <View style={styling.elongatedView} />
              <Text style={styling.moneyText}> {item.money} </Text>
              <Text style={styling.moneyPerson}> {strings.perPerson} </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styling.main}>
        <TouchableOpacity style={styling.header} onPress={() => this.props.navigation.navigate('MyAccount')} activeOpacity={1} >
          <Image
            source={{uri: this.props.profileData.profilePic}}
            style={styling.profile}
          />
          <Text style={styling.saveText} > {strings.savedIcon} </Text>
        </TouchableOpacity>
        {this.verifying()}
      </View>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    SavedEvents: (value) => dispatch(SavedEvents(value)),
    GetSavedEvents: () => dispatch(GetSavedEvents()),
    eventDATA: () => dispatch(eventDATA()),
  }
}

function mapStateToProps(state) {
  const { savedEvents, Event_Data, profileData } = state.Reducer;
  return {
    savedEvents,
    Event_Data,
    profileData
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreSaved);