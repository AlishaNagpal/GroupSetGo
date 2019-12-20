import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
  } from 'react-native';
  import {vw, VectorIcons, } from '../../../../../Constants';
import styles from './style';
export default class Reviews extends Component {

  render() {
      const item = this.props.myData 
    return (
        <View style={styles.rwView}>
        <View style={styles.imgView}>
          <View style={styles.imgView2}>
            <Image
              source={{uri: item.image}}
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
          <Text style={styles.rwText} >{item.review} </Text>
          {/* <Text style={styles.readMore} onPress = {this.toggle}>{this.state.textShow ? 'Show More' : 'Show Less'}</Text> */}
        </View>
      </View>
    );
  }
}
