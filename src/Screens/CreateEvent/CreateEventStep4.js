import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { strings, Images, VectorIcons, Colors, vh, vw } from '../../Constants';

export default class CreateEventStep4 extends Component {
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
          <TouchableOpacity activeOpacity={1} onPress={()=>this.props.navigation.navigate('HomeNavigator')} style={styles.buttonCode} >
            <Text style={{color:Colors.white}} > Exit </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: vh(200)
    },
    imageStyle: {
        height: vw(100),
        width: vw(100)
    },
    text: {
        marginTop: vh(30),
        color: Colors.fadedGray
    },
    backIcon:{
        marginTop:vh(30),
        marginLeft:vw(20)
    },
    buttonCode:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:vh(30),
      padding:vw(10),
      borderRadius:vw(5),
      backgroundColor:Colors.fadedRed
    }
})