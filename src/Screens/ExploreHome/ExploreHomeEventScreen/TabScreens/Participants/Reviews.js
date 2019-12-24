import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Images, vh, vw, VectorIcons, Colors, Strings } from '../../../../../Constants';
import ReviewFlatList from './ReviewFlatList';
import styles from './ReviewStyle';

export default class ParticipantReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderReviewList = (rawData) => {
    const { item, id } = rawData
    return (
      <ReviewFlatList
        myData={item}
        myId={id}
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
        <TouchableOpacity onPress={() => this.props.navigation.pop()} style={styles.headerView} >
          <VectorIcons.Ionicons
            name="ios-arrow-back"
            size={vh(30)}
            color={Colors.white}
            style={styles.backButtonStyle}
          />

          <Text style={styles.reviewHeading}>Reviews ({navigation.getParam('allReviews').length})</Text>
        </TouchableOpacity>
        <FlatList
          data={navigation.getParam('allReviews')}
          keyExtractor={(item, id) => id.toString()}
          renderItem={this.renderReviewList}
          nestedScrollEnabled={true}
          bounces={false}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
