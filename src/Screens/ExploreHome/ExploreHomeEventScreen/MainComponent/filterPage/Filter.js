import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { Images, vh, vw, VectorIcons, Colors, Strings } from '../../../../../Constants';
import styles from './styles';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.containerStyle}>
        <View style={styles.headerView}>
            <View style={styles.filterView}>
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                <Image source={Images.cancel} />
                </TouchableOpacity>
            <Text style={styles.reviewHeadingFilter}>{Strings.filters}</Text>
            </View>
            <View style={styles.filterView}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('InfoDialog')}>
                <Image source={Images.info} />
                </TouchableOpacity>
            <Text style={styles.reviewHeadingReset}>{Strings.reset}</Text>
            </View>
        </View> 
        <View>
            </View>
      </View>
    );
  }
}
