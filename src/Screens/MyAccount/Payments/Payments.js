import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Animated, } from 'react-native';
import styles from './styles';
import { strings, Images, VectorIcons, Colors, vh } from '../../../Constants';

export default class Payments extends Component {


  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0)
  }

// renderItems = (rawData) => {
// const {item, index} = rawData
// return(
//   <View>
//     <Text style={{fontSize: 30}}>{item.title}</Text>
//     </View>
// )
// }

animateMove = () => {
Animated.timing(this.animatedValue, {
  toValue: 1,
  duration: 1000,
}).start()
}

handlePress(evt){
  console.warn(`x coord = ${evt.nativeEvent.locationX}`);
  console.warn(`y coord = ${evt.nativeEvent.locationY}`);
}

  render() {
    const textSize = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 500]
    })
    return ( 
      <View style={styles.containerView}>
        <TouchableOpacity style={{backgroundColor: 'blue', height: '100%', width: '100%'}} onPress={(evt) => this.handlePress(evt)}>
        <Animated.View style={{ backgroundColor: 'red', height: vh(200), width: textSize}} />
          <TouchableOpacity onPress={() => this.animateMove()}>
            <Text> Click </Text>
            </TouchableOpacity>

        {/* <TouchableOpacity style={styles.backIcon} onPress={() => this.props.navigation.goBack()}>
          <VectorIcons.Ionicons name='ios-arrow-back' color={Colors.fadedRed} size={vh(30)} />
        </TouchableOpacity>
        <View style={styles.center} >
          <Image
            source={Images.logo}
            style={styles.imageStyle}
          />
          <Text style={styles.text} > {strings.UnderWork} </Text>
        </View> */}
        </TouchableOpacity>
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
 