import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './style';
import { connect } from 'react-redux';
import { eventDATA, SavedEvents } from '../../../Store/Action/Action';
import { Images, vw, vh, Colors, VectorIcons, strings } from '../../../Constants';
import { ProgressiveImage } from '../../../ReusableComponents'

class HomeScreen extends PureComponent {
  callScreen = id => {
    this.props.navigate('HomeDetails6', {
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
      <View style={styles.flatlistView}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.callScreen(item.serialNo)}>
          <ProgressiveImage
            thumbnailSource={{ uri: item.thumbnail }}
            source={{ uri: item.source }}
            style={styles.flatlistImage}
          />

          <TouchableOpacity
            onPress={() => {
              this.toggle(item.serialNo, item.hearted);
            }}
            style={styles.heart}
            activeOpacity={1}>
            <Image
              source={item.hearted ? Images.heartFilled : Images.heartEmpty}
            />
          </TouchableOpacity>

          <View style={styles.cheersView}>
            <Image source={item.icon} style={styles.cheers} />
          </View>
          <View style={styles.belowImage}>
            <View style={styles.goingView}>
              <Text style={styles.timeText}> {item.time} </Text>
              <View style={styles.goingIcon}>
                <Image source={Images.run} style={styles.runIcon} />
                <Text style={styles.goingText}> {item.going} </Text>
              </View>
            </View>
            <Text style={styles.headingText}> {item.heading} </Text>
            <View style={styles.moneyView}>
              <Text style={styles.place}> {item.place} </Text>
              <View style={styles.elongatedView} />
              <Text style={styles.moneyText}> {item.money} </Text>
              <Text style={styles.moneyPerson}> {strings.perPerson} </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  renderData2 = rowData => {
    let { item } = rowData;
    return (
      <View style={[styles.flatlistView, { width: vw(186.7), height: vh(220) }]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.callScreen(item.serialNo)}>
          <ProgressiveImage
            thumbnailSource={{ uri: item.thumbnail }}
            resizeMode="cover"
            source={{ uri: item.source }}
            style={styles.flatlist2Image}
          />
          <TouchableOpacity
            onPress={() => {
              this.toggle(item.serialNo, item.hearted);
            }}
            style={styles.flatlist2Heart}
            activeOpacity={1}>
            <Image
              source={item.hearted ? Images.heartFilled : Images.heartEmpty}
            />
          </TouchableOpacity>
          <View style={styles.IconView}>
            <Image source={item.icon} style={styles.iconSize} />
          </View>
          <View style={styles.belowImage2}>
            <View style={styles.goingView}>
              <Text style={styles.timeText}> {item.time} </Text>
              <View style={styles.goingIcon}>
                <VectorIcons.MaterialCommunityIcons
                  name="run-fast"
                  size={vh(12)}
                  color={Colors.fadedGray}
                />
                <Text style={styles.goingText}> {item.going} </Text>
              </View>
            </View>
            <Text numberOfLines={1} style={styles.headingText2}>
              {item.heading}
            </Text>
            <Text style={styles.place2} numberOfLines={1} ellipsizeMode='tail' > {item.place} </Text>
            <View style={styles.perPerson}>
              <Text style={styles.moneyText}> {item.money} </Text>
              <Text style={styles.moneyPerson}> {strings.perPerson} </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  verifying = () => {
    if (this.props.Event_Data.length === 0) {
      return (
        <View style={styles.center} >
          <Image
            source={Images.logo}
            style={styles.imageStyle}
          />
          <Text style={styles.text} > {strings.noSaved} </Text>
        </View>
      )
    } else {
      return (
        <>
          <Text style={styles.recommendedText}> {strings.recommended} </Text>
          <View style={styles.flatlistHeight}>
            <FlatList
              keyExtractor={item => item.serialNo.toString()}
              data={this.props.Event_Data}
              renderItem={this.renderData}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <Text style={styles.allEvents}> {strings.allEvents} </Text>
          <FlatList
            keyExtractor={item => item.serialNo.toString()}
            data={this.props.Event_Data}
            renderItem={this.renderData2}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            style={styles.flatlisted}
          />
        </>
      )
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        {this.verifying()}
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    eventDATA: () => dispatch(eventDATA()),
    SavedEvents: (value) => dispatch(SavedEvents(value))
  };
}

function mapStateToProps(state) {
  const { Event_Data, savedEvents } = state.Reducer;
  return {
    Event_Data,
    savedEvents
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
