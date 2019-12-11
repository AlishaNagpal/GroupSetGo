import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './style'
import { VectorIcons, vh, Colors } from '../../../../../Constants'
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
          data={this.state.data}
          keyExtractor={(item,index)=> index.toString() }
          renderItem={this.renderData}
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
