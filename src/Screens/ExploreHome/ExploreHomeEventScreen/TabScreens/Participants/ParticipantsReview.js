import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
  } from 'react-native';
  import {vw, VectorIcons, } from '../../../../../Constants';
import styles from './style';

const numOfLine = 3;

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
        textShow: true,
        num: 0,
      };
  }

  toggle=()=>{
    this.setState({
      textShow: !this.state.textShow
    })
}

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
          <Text 
          style={styles.rwText} 
          // onTextLayout={({ nativeEvent: { lines } }) => this.setState({textShow: lines.length > numOfLine })}
          numberOfLines={this.state.textShow ? numOfLine : null}
          >{item.review}
          </Text>
          <Text style={styles.readMore} onPress = {this.toggle}>{this.state.textShow ? 'show more' : 'show less'}</Text>
        </View>
      </View>
    );
  }
}
