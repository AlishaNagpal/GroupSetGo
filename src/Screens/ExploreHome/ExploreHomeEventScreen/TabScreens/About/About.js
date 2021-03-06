import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Linking, Platform } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';

//custom imports
import styles from './style'
import { vh, strings } from '../../../../../Constants'
import { connect } from 'react-redux'
import { eventDATA } from '../../../../../Store/Action/Action'


const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
const latLng = `${36.116442},${-115.175079}`;
const label = 'Your Location';
const url = Platform.select({
  ios: `${scheme}${label}@${latLng}`,
  android: `${scheme}${latLng}(${label})`
});
class About extends Component {
  state = {
    data: '',
  }

  componentDidMount() {
    this.getData(this.props.screenProps.screenProps.id);
  }

  getData = (id) => {
    let temp = this.props.Event_Data
    let indexToEdit = temp.findIndex(item => item.serialNo == id)
    let newData = temp[indexToEdit]
    if (indexToEdit != -1) {
      this.setState({
        data: newData
      })
    }
  }

  render() {
    const { data } = this.state
    return (
      <View style={styles.mainContainer} >
        <View style={styles.detailView} >
          <Text style={styles.detailsTextHead} > {strings.details} </Text>
          <Text style={styles.detailsText} > {data.details} </Text>
        </View>
        <View style={styles.line} />
        <View style={styles.detailView} >
          <Text style={styles.detailsTextHead} > {strings.eventId} </Text>
          <Text style={styles.detailsText} > {data.eventID} </Text>
        </View>
        <View style={styles.line} />
        <View style={styles.row} >
          <View style={styles.detailView} >
            <Text style={styles.detailsTextHead} > {strings.verified} </Text>
            <Text style={styles.detailsText} > {data.usersVerified} </Text>
          </View>
          <View style={styles.detailView} >
            <Text style={styles.detailsTextHead} > {strings.ageGroup} </Text>
            <Text style={styles.detailsText} > {data.ageGroup} </Text>
          </View>
        </View>
        <View style={styles.row} >
          <View style={styles.detailView} >
            <Text style={styles.detailsTextHead} > {strings.genderMix} </Text>
            <Text style={styles.detailsText} > {strings.maleMix} {data.Male} </Text>
          </View>
          <View style={styles.detailView} >
            <Text style={styles.detailsTextHead} > </Text>
            <Text style={styles.detailsText} > {strings.femaleMix} {data.female} </Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.detailView} >
          <Text style={styles.detailsTextHead} > {strings.priceDetails} </Text>
        </View>
        <View style={[styles.row, { marginBottom: vh(10) }]} >
          <Text style={styles.detailsText} > {strings.totalBudget} </Text>
          <TouchableOpacity activeOpacity={1} style={styles.buttonStyle} >
            <Text style={styles.money} > {data.moneyTotal} </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <View style={styles.row2} >
          <Text style={styles.detailsTextHead} > {strings.venue} </Text>
          <TouchableOpacity onPress={() => this.props.screenProps.navigation.navigate('VenueReviews', { id: this.props.screenProps.screenProps.id })} >
            <Text style={styles.viewMoreText} > {data.reviews} {strings.reviews} </Text>
          </TouchableOpacity>
        </View>

       <View style={styles.mapStyleContainer} >
       <MapView
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          scrollEnabled={false}
          maxZoomLevel={13.3}
          showsCompass={true}
          region={{
            latitude: 36.116442,
            longitude: -115.175079,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            coordinate={{
              latitude: 36.116442,
              longitude: -115.175079
            }}
          >
            <Callout onPress={() => Linking.openURL(url)} >
              <View style={styles.calloutView} >
                <Text>{data.location}</Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
       </View>
      </View>
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
)(About);