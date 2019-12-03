import React, { Component } from 'react';
import { View, Text, Image, TextInput, FlatList, ImageBackground, TouchableOpacity, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'

//Custom Imports
import styles from './style'
import { Images, VectorIcons, Colors, vh } from '../../../Constants'
import ExploreHomeScreen02 from '../ExploreHomeScreen02/ExploreHomeScreen02'

const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]
class ExploreHomeScreen01 extends Component {

  callScreen() {
    this.props.navigation.navigate('ExploreHomeScreen02', {
      data: { DATA3 }
    })
  }


  renderData = (rowData) => {
    let { item } = rowData
    return (
      <View style={styles.flatlistView} >
        <TouchableOpacity onPress={() => this.callScreen()} >
          <ImageBackground source={item.source} style={styles.flatlistImage} >
            <Image source={Images.heartEmpty} style={styles.heart} />
            <Image source={Images.heartFilled} style={styles.heart} />
            <View style={styles.cheersView} >
              <Image source={Images.cheers} style={styles.cheers} />
            </View>
          </ImageBackground>
          <View style={styles.belowImage} >
            <View style={styles.goingView} >
              <Text style={styles.timeText} > {item.time} </Text>
              <View style={styles.goingIcon} >
                <VectorIcons.MaterialCommunityIcons name='run-fast' size={vh(12)} color={Colors.fadedGray} />
                <Text style={styles.goingText} > {item.going} </Text>
              </View>
            </View>
            <Text style={styles.headingText} > {item.heading} </Text>
            <View style={styles.moneyView} >
              <Text style={styles.place} > {item.place} </Text>
              <View style={styles.elongatedView} />
              <Text style={styles.moneyText} > {item.money} </Text>
              <Text style={styles.moneyPerson} > per person </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  renderData2 = (rowData) => {
    let { item } = rowData
    return (
      <View style={[styles.flatlistView, { width: vh(187), height: vh(198), }]} >
        <TouchableOpacity>
          <ImageBackground source={item.source} style={styles.flatlist2Image} >
            <Image source={Images.heartEmpty} style={styles.flatlist2Heart} />
            <View style={styles.IconView} >
              <Image source={item.icon} style={styles.iconSize} />
            </View>
          </ImageBackground>
          <View style={[styles.belowImage, { width: vh(187) }]} >
            <View style={styles.goingView} >
              <Text style={styles.timeText} > {item.time} </Text>
              <View style={styles.goingIcon} >
                <VectorIcons.MaterialCommunityIcons name='run-fast' size={vh(12)} color={Colors.fadedGray} />
                <Text style={styles.goingText} > {item.going} </Text>
              </View>
            </View>
            <Text style={[styles.headingText, { fontSize: vh(16.7) }]} > {item.heading} </Text>
            <Text style={styles.place} > {item.place} </Text>
            <View style={styles.perPerson} >
              <Text style={styles.moneyText} > {item.money} </Text>
              <Text style={styles.moneyPerson} > per person </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.mainContainer} >
        <View style={styles.headerView}>
          <Image
            source={Images.maleImage}
            style={styles.headerImage}
          />
          <View style={styles.textInputView} >
            <VectorIcons.Ionicons name="md-search" size={vh(20)} color={Colors.black} />
            <TextInput
              placeholder={'Search event, users'}
              placeholderTextColor={Colors.black}
              style={styles.headerTextInput}
            />
          </View>

          <TouchableOpacity>
            <VectorIcons.FontAwesome name={"map-o"} size={vh(18)} color={Colors.fadedRed} style={styles.map} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={Images.notification}
              style={styles.notification} />
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
            keyExtractor={(item, index) => { index.toString() }}
            data={DATA}
            renderItem={this.renderData}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text style={styles.allEvents} > All Events </Text>
        <View style={styles.flatlistHeight2} >
          <FlatList
            keyExtractor={(item, index) => { index.toString() }}
            data={DATA2}
            renderItem={this.renderData2}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <LinearGradient colors={colors} style={styles.gradient} >
          <TouchableOpacity>
            <Image source={Images.calendar} style={styles.calendar} />
          </TouchableOpacity>
        </LinearGradient>

      </View>
    );
  }
}

const Explore = createStackNavigator({ Explore: ExploreHomeScreen01 },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
);
const Saved = createStackNavigator({ Saved: ExploreHomeScreen01, },
  {
    defaultNavigationOptions: {
      header: null,
    },
  });
const MyEvents = createStackNavigator({ MyEvents: ExploreHomeScreen01 },
  {
    defaultNavigationOptions: {
      header: null,
    },
  });
const Chat = createStackNavigator({ Chat: ExploreHomeScreen01 },
  {
    defaultNavigationOptions: {
      header: null,
    },
  });


const TabNavigator = createAppContainer(
  createBottomTabNavigator(
    {
      Explore: {
        screen: Explore,
        navigationOptions: ({ navigation }) => ({
          title: "EXPLORE"
        })
      },
      Saved: {
        screen: Saved,
        navigationOptions: ({ navigation }) => ({
          title: "SAVED"
        })
      },
      MyEvents: {
        screen: MyEvents,
        navigationOptions: ({ navigation }) => ({
          title: "MY EVENTS"
        })
      },
      Chat: {
        screen: Chat,
        navigationOptions: ({ navigation }) => ({
          title: "CHAT"
        })
      },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          if (routeName === 'Explore') {
            return (
              <VectorIcons.Ionicons name={'md-search'} size={vh(25)} color={tintColor} style={styles.iconTab} />
            )
          } else if (routeName === 'Saved') {
            return (
              <VectorIcons.Ionicons name={'ios-heart-empty'} size={vh(25)} color={tintColor} style={styles.iconTab} />
            )
          } else if (routeName === 'MyEvents') {
            return (
              <Image
                source={Images.logoIcon}
                style={[styles.iconTab, { tintColor: tintColor }]}
              />
            )
          } else if (routeName === 'Chat') {
            return (
              <VectorIcons.AntDesign name={'message1'} size={vh(25)} color={tintColor} style={styles.iconTab} />
            )
          }
        },
      }),
      tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      },
    }
  ),
  {
    initialRouteName: 'Explore'
  },
);

TabNavigator.navigationOptions = {
  headerShown: false,
};

export default TabNavigator;


const DATA = [
  {
    source: Images.res1,
    time: 'TODAY,JUL 14 • 7 PM',
    heading: 'Dance Floor Table @ Omnia',
    place: 'Caesars Palace, Las Vegas',
    money: '$600- $800',
    going: 10
  },
  {
    source: Images.res2,
    time: 'SAT,JUL 19 • 3 PM',
    heading: 'Tea Time Party @ Resolutions',
    place: 'Coffee Palace, Las Vegas',
    money: '$800- $1000',
    going: 7
  }
]

const DATA2 = [
  {
    source: Images.travel,
    time: 'MON,JUL 16 • 7 AM',
    heading: 'Backpacking & Hiking...',
    place: 'Lake Havasu',
    money: '$200 - 250',
    going: 4,
    icon: Images.trekIcon
  },
  {
    source: Images.music,
    time: 'WED, Jul 18 • 7 pm ',
    heading: 'Chicago Music Fest...',
    place: 'Randolph St, Chicago',
    money: '$45- $90',
    going: 35,
    icon: Images.musicIcon
  }
]

const DATA3 = [
  {
    image: Images.res1,
    iconImage: Images.cheers,
    time: 'TODAY,JUL 14 • 7 PM',
    heading: 'Dance Floor Table @ Omnia',
    hashtag: '#Dancefloortable',
    reviewRating: '4.5',
    going: '8',
    place: 'Caesars Palace, Las Vegas',
    money: '$600- $800',
    going: 10
  }
]


