import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient'

//custom imports
import styles from './style'
const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]
import {VectorIcons, Colors, vh} from '../../../../../Constants'

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [{
        latlng: {
          latitude: 36.116442, longitude: -115.175079
        },
        title: DATA.location,
      }],
    };
  }

  render() {
    return (
      <View style={styles.mainContainer} >
        <View style={styles.detailView} >
          <Text style={styles.detailsTextHead} > Details </Text>
          <Text style={styles.detailsText} > {DATA.details} </Text>
        </View>
        <View style={styles.line} />
        <View style={styles.detailView} >
          <Text style={styles.detailsTextHead} > Event ID </Text>
          <Text style={styles.detailsText} > {DATA.eventID} </Text>
        </View>
        <View style={styles.line} /> 
        <View style={styles.row} >
          <View style={styles.detailView} >
            <Text style={styles.detailsTextHead} > Verified Users Only </Text>
            <Text style={styles.detailsText} > {DATA.usersVerified} </Text>
          </View>
          <View style={styles.detailView} >
            <Text style={styles.detailsTextHead} > Age Group </Text>
            <Text style={styles.detailsText} > {DATA.ageGroup} </Text>
          </View>
        </View>
        <View style={styles.row} >
          <View style={styles.detailView} >
            <Text style={styles.detailsTextHead} > Gender Mix </Text>
            <Text style={styles.detailsText} > Min. Male: {DATA.Male} </Text>
          </View>
          <View style={styles.detailView} >
            <Text style={styles.detailsTextHead} > </Text>
            <Text style={styles.detailsText} > Min. Female: {DATA.female} </Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.detailView} >
          <Text style={styles.detailsTextHead} > Price Details </Text>
        </View>
        <View style={styles.row} >
          <Text style={styles.detailsText} > Total Budget: </Text>
          <TouchableOpacity style={styles.buttonStyle} >
            <Text style={styles.money} > {DATA.money} </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line2} />
        <View style={styles.viewMore} >
          <TouchableOpacity>
            <Text style={styles.viewMoreText} > View More Details </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />

        <View style={styles.row2} >
          <Text style={styles.detailsTextHead} > Venue Location </Text>
          <TouchableOpacity>
            <Text style={styles.viewMoreText} > {DATA.reviews} reviews </Text>
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
        >
          {this.state.markers.map(marker => (
            <Marker
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
        <LinearGradient colors={colors} style={styles.gradient} >
          <TouchableOpacity>
            <VectorIcons.AntDesign name = "adduser" color = {Colors.white} size={vh(25) } />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

const DATA = {
  details: 'In town for the weekend and would love to meet some new people and party to Calvin Harris beats!! Below is the budget breakdown for a table on Main Room Dance Floor...',
  eventID: 'GSG0123456',
  usersVerified: 'Yes',
  ageGroup: '21 - 40 years',
  Male: '5',
  female: '5',
  money: '$9,600',
  location: '3570 S Las Vegas Blvd, Las Vegas, NV 89109',
  reviews: '222'
}
