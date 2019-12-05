import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import MapView, { PROVIDER_GOOGLE, } from 'react-native-maps';

//Custom Imports
const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]
import styles from './style'
import { VectorIcons, Images, vh, Colors } from '../../../Constants'
import LinearGradient from 'react-native-linear-gradient'

export default class ExploreMapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          latlng: {
            latitude: 36.116442, longitude: -115.175079
          },
          title: 'Food Fest',
          description: 'Las Vegas Blvd, Las Vegas',
          id: 1
        },
        {
          latlng: {
            latitude: 36.108311, longitude: -115.172649
          },
          description: 'ARIA Resort & Casino',
          title: 'Casino Games',
          id: 2
        },
        {
          latlng: {
            latitude: 36.130068, longitude: -115.164394
          },
          description: 'Encore At Wynn Las Vegas',
          title: 'Comic Con',
          id: 3
        },
      ],
      cardIsRendered: false
    };
  }

  componentDidMount() {
    this.marker.showCallout()
  }

  Press = () => {
    this.setState({
      cardIsRendered: true
    })
  }

  callScreen() {
    this.props.navigation.navigate('HomeDetails6', {
      data: { DATA3 }
    })
  }

  render() {
    return (
      <View style={styles.mainContainer} >
        <View style={styles.headerView}>
          <Image
            source={Images.maleImage}
            style={styles.headerImage}
          />
          <TouchableOpacity style={styles.textInputView} onPress={() => this.props.navigation.navigate('ExploreEventsUsers')} >
            <VectorIcons.Ionicons name="md-search" size={vh(20)} color={Colors.black} />
            <Text style={styles.headerTextInput} > Search event, users </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeNavigator')}>
            <VectorIcons.SimpleLineIcons name={"calendar"} size={vh(18)} color={Colors.fadedRed} style={styles.map} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={Images.notification}
              style={styles.notification} />
          </TouchableOpacity>
        </View>

        <MapView
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          zoomEnabled={true}
          maxZoomLevel={13.3}
          region={{
            latitude: 36.116442,
            longitude: -115.175079,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          onLayout={() => this.marker.showCallout()}
        >
          {this.state.markers && this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker.latlng}
              ref={marker => (this.marker = marker)}
            >
              <Image
                source={Images.marker}
                style={styles.marker} />
              <MapView.Callout onPress={() => this.Press()} >
                <View style={styles.calloutView} >
                  <Text>{marker.title}</Text>
                  <Text>{marker.description}</Text>
                </View>
              </MapView.Callout>

            </MapView.Marker>

          ))}

        </MapView>
        {
          this.state.cardIsRendered && (
            <View style={styles.mainCardView}>
              <TouchableOpacity onPress={() => this.callScreen()} >
                <Image source={DATA.source} style={styles.flatlistImage} />
                <Image source={Images.heartEmpty} style={styles.heart} />
                <View style={styles.cheersView} >
                  <Image source={Images.cheers} style={styles.cheers} />
                </View>
                <View style={styles.belowImage} >
                  <View style={styles.goingView} >
                    <Text style={styles.timeText} > {DATA.time} </Text>
                    <View style={styles.goingIcon} >
                      <VectorIcons.MaterialCommunityIcons name='run-fast' size={vh(12)} color={Colors.fadedGray} />
                      <Text style={styles.goingText} > {DATA.going} </Text>
                    </View>
                  </View>
                  <Text style={styles.headingText} > {DATA.heading} </Text>
                  <View style={styles.moneyView} >
                    <Text style={styles.place} > {DATA.place} </Text>
                    <View style={styles.elongatedView} />
                    <Text style={styles.moneyText} > {DATA.money} </Text>
                    <Text style={styles.moneyPerson} > per person </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )
        }
        {
          !this.state.cardIsRendered && (
            <LinearGradient colors={colors} style={styles.gradient} >
              <TouchableOpacity>
                <Image source={Images.calendar} style={styles.calendar} />
              </TouchableOpacity>
            </LinearGradient>
          )
        }

      </View>
    );
  }
}

const DATA = {
  source: Images.res1,
  time: 'TODAY,JUL 14 • 7 PM',
  heading: 'Dance Floor Table @ Omnia',
  place: 'Caesars Palace, Las Vegas',
  money: '$600- $800',
  going: 10
}


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
  cancelDate: '06/30/2018'
}


