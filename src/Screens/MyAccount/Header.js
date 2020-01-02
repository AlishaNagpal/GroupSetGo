import React from 'react';
import { View, Text } from 'react-native';
import { vh, VectorIcons, Colors, Strings } from '../../Constants';
import styles from './styles';

export default function Header(headerName) {
    return (
      <View style={styles.headerStyle}>
        <VectorIcons.Ionicons
                        name="ios-arrow-back"
                        size={vh(30)}
                        color={Colors.white}
                        style={styles.backButtonStyle}
                    />
                    <Text style={styles.reviewHeading}>{headerName}</Text>
      </View>
    );
  }

