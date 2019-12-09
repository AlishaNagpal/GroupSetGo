import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//Custom Imports
import styles from './style';
import {Images, VectorIcons, Colors, vh, vw} from '../../../Constants';

const colors = [
  Colors.moderateRed,
  Colors.moderatePink,
  Colors.darkModeratePink,
  Colors.darkViolet,
  Colors.darkViolet,
  Colors.darkViolet,
];
export default class ExploreHomeScreen extends Component {
  callScreen() {
    this.props.navigation.navigate('HomeDetails6', {
      data: {DATA3},
    });
  }

  renderData = rowData => {
    let {item} = rowData;
    return (
      <View style={styles.flatlistView}>
        <TouchableOpacity activeOpacity={1} onPress={() => this.callScreen()}>
          <Image source={item.source} style={styles.flatlistImage} />
          <Image source={Images.heartEmpty} style={styles.heart} />
          <Image source={Images.heartFilled} style={styles.heart2} />
          <View style={styles.cheersView}>
            <Image source={Images.cheers} style={styles.cheers} />
          </View>
          <View style={styles.belowImage}>
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
      <View style={[styles.flatlistView, {width: vw(187), height: vw(220)}]}>
        <TouchableOpacity activeOpacity={1} onPress={() => this.callScreen()}>
          <Image source={item.source} style={styles.flatlist2Image} />
          <Image source={Images.heartEmpty} style={styles.flatlist2Heart} />
          <View style={styles.IconView}>
            <Image source={item.icon} style={styles.iconSize} />
          </View>
          <View style={styles.belowImage}>
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
            <Text style={[styles.headingText, {fontSize: vw(16.7)}]}>
              {' '}
              {item.heading}{' '}
            </Text>
            <Text style={styles.place}> {item.place} </Text>
            <View style={styles.perPerson}>
              <Text style={styles.moneyText}> {item.money} </Text>
              <Text style={styles.moneyPerson}> per person </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerView}>
          <Image source={Images.maleImage} style={styles.headerImage} />
          <TouchableOpacity
            style={styles.textInputView}
            onPress={() =>
              this.props.navigation.navigate('ExploreEventsUsers')
            }>
            <VectorIcons.Ionicons
              name="md-search"
              size={vh(20)}
              color={Colors.black}
            />
            <Text style={styles.headerTextInput}> Search event, users </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Map')}>
            <VectorIcons.FontAwesome
              name={'map-o'}
              size={vh(18)}
              color={Colors.fadedRed}
              style={styles.map}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={Images.notification} style={styles.notification} />
          </TouchableOpacity>
        </View>
        <View style={styles.sortFilterView}>
          <TouchableOpacity style={styles.sortStyle}>
            <Text style={styles.sortText}> Sort </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortStyle}>
            <Text style={styles.sortText}> Filter </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.recommendedText}> Recommended </Text>
        <View style={styles.flatlistHeight}>
          <FlatList
            keyExtractor={item => item.serialNo.toString()}
            data={DATA}
            renderItem={this.renderData}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text style={styles.allEvents}> All Events </Text>
        <FlatList
          keyExtractor={item => item.serialNo.toString()}
          data={DATA2}
          renderItem={this.renderData2}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <LinearGradient colors={colors} style={styles.gradient}>
          <TouchableOpacity>
            <Image source={Images.calendar} style={styles.calendar} />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

const DATA = [
  {
    serialNo: 1,
    source: Images.res1,
    time: 'TODAY,JUL 14 • 7 PM',
    heading: 'Dance Floor Table @ Omnia',
    place: 'Caesars Palace, Las Vegas',
    money: '$600- $800',
    going: 10,
  },
  {
    serialNo: 2,
    source: Images.res2,
    time: 'SAT,JUL 19 • 3 PM',
    heading: 'Tea Time Party @ Resolutions',
    place: 'Coffee Palace, Las Vegas',
    money: '$800- $1000',
    going: 7,
  },
  {
    serialNo: 3,
    source: Images.res1,
    time: 'TODAY,JUL 14 • 7 PM',
    heading: 'Dance Floor Table @ Omnia',
    place: 'Caesars Palace, Las Vegas',
    money: '$600- $800',
    going: 10,
  },
  {
    serialNo: 4,
    source: Images.res2,
    time: 'SAT,JUL 19 • 3 PM',
    heading: 'Tea Time Party @ Resolutions',
    place: 'Coffee Palace, Las Vegas',
    money: '$800- $1000',
    going: 7,
  },
];

const DATA2 = [
  {
    serialNo: 1,
    source: Images.travel,
    time: 'MON,JUL 16 • 7 AM',
    heading: 'Backpacking & Hiking...',
    place: 'Lake Havasu',
    money: '$200 - 250',
    going: 4,
    icon: Images.trekIcon,
  },
  {
    serialNo: 2,
    source: Images.music,
    time: 'WED, Jul 18 • 7 pm ',
    heading: 'Chicago Music Fest...',
    place: 'Randolph St, Chicago',
    money: '$45- $90',
    going: 35,
    icon: Images.musicIcon,
  },
  {
    serialNo: 3,
    source: Images.travel,
    time: 'MON,JUL 16 • 7 AM',
    heading: 'Backpacking & Hiking...',
    place: 'Lake Havasu',
    money: '$200 - 250',
    going: 4,
    icon: Images.trekIcon,
  },
  {
    serialNo: 4,
    source: Images.music,
    time: 'WED, Jul 18 • 7 pm ',
    heading: 'Chicago Music Fest...',
    place: 'Randolph St, Chicago',
    money: '$45- $90',
    going: 35,
    icon: Images.musicIcon,
  },
];

const DATA3 = {
  image: Images.res1,
  iconImage: Images.cheers,
  profile: Images.maleImage,
  time: 'TODAY,JUL 14 • 7 PM',
  heading: 'Dance Floor Table @ Omnia',
  hashtag: '#Dancefloortable',
  reviewRating: '4.5',
  going: '8',
  location: '3570 S Las Vegas Blvd, Las Vegas, NV 89109',
  money: '$600- $800',
  cancelDate: '06/30/2018',
};
