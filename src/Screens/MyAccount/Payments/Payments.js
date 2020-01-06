import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';
import { strings, Images, VectorIcons, Colors, vh } from '../../../Constants';

export default class Payments extends Component {

renderItems = (rawData) => {
const {item, index} = rawData
return(
  <View>
    <Text style={{fontSize: 30}}>{item.title}</Text>
    </View>
)
}

  render() {
    return (
      <View style={styles.containerView}>
        <TouchableOpacity style={styles.backIcon} onPress={() => this.props.navigation.goBack()}>
          <VectorIcons.Ionicons name='ios-arrow-back' color={Colors.fadedRed} size={vh(30)} />
        </TouchableOpacity>
        <View style={styles.center} >
          <Image
            source={Images.logo}
            style={styles.imageStyle}
          />
          <Text style={styles.text} > {strings.UnderWork} </Text>
        </View>
      </View>
    );
  }
}

const DATA = [
  {title: 'Sameer'},
  {title: 'Sameer'},
  {title: 'Sameer'},
  {title: 'Sameer'},
]
const DATA2 = [
  {title: 'Sameerji'},
  {title: 'Sameerji'},
  {title: 'Sameerji'},
  {title: 'Sameerji'},
]
 