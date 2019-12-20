import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './style'
import { VectorIcons, vh, Colors, vw } from '../../../../../Constants'
import { connect } from 'react-redux'
import { eventDATA } from '../../../../../Store/Action/Action'

class VenueReviews extends Component {
  state = { data: this.props.Event_Data }

  componentDidMount() {
    this.getData(this.props.navigation.getParam('id'))
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

  renderData = (rowData) => {
    const { item } = rowData
    return (
      <View>
        <View style={styles.reviewFLMainView}>
          <View style={styles.imageHeaderView}>
            <View style={styles.imgView2}>
              <Image
                source={{ uri: item.image }}
                style={styles.rwPic}
              />
              <View style={styles.rwNameView}>
                <Text style={styles.rwName}>{item.name}</Text>
                <Text style={styles.rwDate}>{item.time}</Text>
              </View>
            </View>
            <View style={styles.reviewRatingView}>
              <Text style={styles.reviewRatingText}>{item.rating}</Text>
              <VectorIcons.Ionicons
                name="ios-star"
                color='white'
                size={vw(12)}
              />
            </View>
          </View>
          <View style={styles.reviewView}>
            <Text style={styles.rwText}>{item.review} </Text>
          </View>
        </View>
        <View style={styles.seperator} />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDetails6')} style={styles.headerStyle} >
            <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.backButtonStyle} />
            <Text style={styles.headerReview} >Reviews ({this.state.data.reviews})</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.data.reviewDATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderData}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal={false}
          bounces={false}
        />
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
)(VenueReviews);
