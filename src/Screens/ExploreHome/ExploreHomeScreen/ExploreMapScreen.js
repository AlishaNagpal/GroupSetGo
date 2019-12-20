import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import MapView, { PROVIDER_GOOGLE, } from 'react-native-maps';

//Custom Imports
import styles from './style'
import { VectorIcons, Images, vh, Colors } from '../../../Constants'
import { connect } from 'react-redux'
import { eventDATA } from '../../../Store/Action/Action'

class ExploreMapScreen extends Component {
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
      data: this.props.Event_Data,
    };
  }


  Press = (id) => {
    let temp = this.state.data
    let indexToEdit = temp.findIndex(item => item.serialNo == id)
    let newData = temp[indexToEdit]
    if (indexToEdit != -1) {
      this.setState({
        data: newData,
        cardIsRendered: true
      })
    }
  }

  callScreen = (id) => {
    this.props.navigate('HomeDetails6', {
      data: this.props.Event_Data,
      id: { id }
    })
  }

  toggle = (id, value) => {
    let index = this.props.Event_Data.findIndex((e) => e.serialNo === id)
    if (index != -1) {
      this.props.Event_Data[index].hearted = !value
      this.props.eventDATA()
    }
  }

  render() {
    const { data } = this.state
    return (
      <View style={styles.mainContainer} >
        <MapView
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          zoomEnabled={true}
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
        {
          this.state.cardIsRendered && (
            <View style={styles.mainCardView}>
              <TouchableOpacity onPress={() => this.callScreen(data.serialNo)} >
                <Image source={{ uri: data.source }} style={styles.flatlistImage} />
                <TouchableOpacity onPress={() => { this.toggle(data.serialNo, data.hearted) }} style={styles.heart} activeOpacity={1}  >
                  <Image source={data.hearted ? Images.heartFilled : Images.heartEmpty} />
                </TouchableOpacity>
                <View style={styles.cheersView} >
                  <Image source={Images.cheers} style={styles.cheers} />
                </View>
                <View style={styles.belowImage} >
                  <View style={styles.goingView} >
                    <Text style={styles.timeText} > {data.time} </Text>
                    <View style={styles.goingIcon} >
                      <VectorIcons.MaterialCommunityIcons name='run-fast' size={vh(12)} color={Colors.fadedGray} />
                      <Text style={styles.goingText} > {data.going} </Text>
                    </View>
                  </View>
                  <Text style={styles.headingText} > {data.heading} </Text>
                  <View style={styles.moneyView} >
                    <Text style={styles.place} > {data.place} </Text>
                    <View style={styles.elongatedView} />
                    <Text style={styles.moneyText} > {data.money} </Text>
                    <Text style={styles.moneyPerson} > per person </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )
        }
      </View >
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
)(ExploreMapScreen);

