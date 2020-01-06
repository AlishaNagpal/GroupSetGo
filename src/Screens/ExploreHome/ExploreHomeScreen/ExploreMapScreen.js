import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import MapView, { PROVIDER_GOOGLE, } from 'react-native-maps';

//Custom Imports
import styles from './style'
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
      cardIsRendered: false,
      data: '',
    };
  }


  Press(id) {
    this.props.navigate('RenderCard', { id: id })
  }

  render() {
    return (
      <View>
        <MapView
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          zoomEnabled={true}
          showsUserLocation={true}
          scrollEnabled={true}
          maxZoomLevel={13.3}
          region={{
            latitude: 36.116442,
            longitude: -115.175079,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          {this.state.markers && this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker.latlng}
              ref={marker => (this.marker = marker)}
            >
              <MapView.Callout onPress={() => this.Press(marker.id)}  >
                <View style={styles.calloutView} >
                  <Text>{marker.title}</Text>
                  <Text>{marker.description}</Text>
                </View>
              </MapView.Callout>
            </MapView.Marker>
          ))}

        </MapView>
      </View >
    );
  }
}