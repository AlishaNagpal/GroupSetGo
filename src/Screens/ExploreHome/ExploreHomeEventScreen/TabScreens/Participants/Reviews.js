import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
  } from 'react-native';
  import { Images, vh, vw, VectorIcons, Colors } from '../../../../../Constants';
import styles from './style';

const numOfLine = 3;

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
        textShow: false,
        num: 0,
        show: -1
      };
  }



  render() {
      const item = this.props.myData 
      const id = this.props.myId 
    return (
        <View style={styles.rwView}>
        <View style={styles.imgView}>
          <View style={styles.imgView2}>
            <Image
              source={item.pic}
              style={styles.rwPic}
            />
            <View style={styles.rwNameView}>
              <Text style={styles.rwName}>{item.name}</Text>
              <Text style={styles.rwDate}>{item.date}</Text>
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
        <View style={{ paddingTop: vw(9.9) }}>
          <Text 
          style={styles.rwText} 
          onTextLayout={({ nativeEvent: { lines } }) => this.setState({num: lines.length })}
          numberOfLines={this.state.show === id ? null : numOfLine}
          >{item.text}
          </Text>
          {this.state.num >= 3 ? <Text >{this.state.textShow ? 'show less' : 'show more'}</Text> : null} 
        </View>
        {/* <Text  onPress = {() => this.props.toggleText(id)}>
        {console.warn(this.state.num )}
        {this.state.num > numOfLine ? (this.state.show === id ? 'show less' : 'show more') : null}
        </Text> */}
      </View>
    );
  }
}
