import React, { Component } from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import styles from './styles';
import { vh } from '../../../Constants';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.containerView}>
        <Text> Under Development </Text>
        <TouchableOpacity style={{paddingTop: vh(50)}} onPress={() => this.props.navigation.goBack()}> 
          <Text style={{padding: vh(10), borderWidth: vh(1)}}>Go Back</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
