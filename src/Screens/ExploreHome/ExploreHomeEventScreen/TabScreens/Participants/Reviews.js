import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Images, vh, vw, VectorIcons, Colors, Strings } from '../../../../../Constants';
import ParticipantsReview from './ParticipantsReview';
import styles from './ReviewStyle';

export default class ParticipantReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderReviewList = (rawData) =>{
    const { item, id } = rawData
    return (
      <ParticipantsReview 
      myData = {item}
      myId = {id}
      />
      
    );
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={styles.separator}
      />
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.containerStyle}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => this.props.navigation.pop()} >
            <VectorIcons.MaterialCommunityIcons
              name="keyboard-backspace"
              size={vh(30)}
              color={Colors.white}
              style={styles.backButtonStyle}
            />
          </TouchableOpacity>
          <Text style={styles.reviewHeading}>Reviews ({navigation.getParam('allReviews').length})</Text>
        </View>
        <FlatList
            data={navigation.getParam('allReviews')}
            keyExtractor={(item, id) => id.toString()}
            renderItem={this.renderReviewList}
            nestedScrollEnabled={true}
            bounces={false}
            ItemSeparatorComponent = {this.FlatListItemSeparator}
          />
      </View>
    );
  }
}
