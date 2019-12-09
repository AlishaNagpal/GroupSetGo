import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient'

//custom imports
import styles from './style'
const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]
import { VectorIcons, Colors, vh, strings } from '../../../../../Constants'
import { connect } from 'react-redux'
import { eventDATA } from '../../../../../Store/Action/Action'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [{
        latlng: {
          latitude: 36.116442, longitude: -115.175079
        },
      }],
      data: this.props.Event_Data
    };
  }

  componentDidMount(){
    this.getData(this.props.screenProps.id)
  }

  getData = (id) => {
    let temp = this.state.data
    let indexToEdit = temp.findIndex(item => item.serialNo == id)
    let newData = temp[indexToEdit]
    if (indexToEdit != -1) {
      this.setState({
        data: newData
      })
    }
  }

  render() {
    const {data} = this.state
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
        <View style={styles.row} >
          <Text style={styles.detailsText} > {strings.totalBudget} </Text>
          <TouchableOpacity style={styles.buttonStyle} >
            <Text style={styles.money} > {data.moneyTotal} </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line2} />
        <View style={styles.viewMore} >
          
          <TouchableOpacity onPress={()=> this.props.viewMore()} >
            <Text style={styles.viewMoreText} > {strings.viewMore} </Text>
          </TouchableOpacity>
        
        </View>
        <View style={styles.separator} />

        <View style={styles.row2} >
          <Text style={styles.detailsTextHead} > {strings.venue} </Text>
          <TouchableOpacity>
            <Text style={styles.viewMoreText} > {data.reviews} {strings.reviews} </Text>
          </TouchableOpacity>
        </View>

        <MapView
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          scrollEnabled={false}
          // zoomEnabled={true}
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
              title={data.location}
              description={marker.description}
            />
          ))}
        </MapView>
        <LinearGradient colors={colors} style={styles.gradient} >
          <TouchableOpacity>
            <VectorIcons.AntDesign name="adduser" color={Colors.white} size={vh(25)} />
          </TouchableOpacity>
        </LinearGradient>
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