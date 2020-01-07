import React from 'react';
import { View, Text, Image } from 'react-native';

import Styles from './Styles';

export default class ListData extends React.Component {
  
  render(){
    const {item, i} = this.props;
    return (
        <View key={i} style={Styles.cardStyle}>
        <Image source={item.imgSrc} style={Styles.img} />
        <View style={Styles.separator} />
        <View style={Styles.textView}>
          <Text style={Styles.heading}>{item.head}</Text>
          <Text style={Styles.title}>{item.text}</Text>
        </View>
      </View>
    );
  }
}
