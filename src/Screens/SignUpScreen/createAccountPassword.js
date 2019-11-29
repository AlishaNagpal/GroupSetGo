
import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

//Custom Imports
import styles from './styles'
import {Colors} from '../../Constants';

const colors = [Colors.moderateRed,Colors.moderatePink, '#9B2F60',Colors.darkViolet,Colors.darkViolet,Colors.darkViolet]

export const createAccountPassword = React.memo(function pureFunction() {
    return (
        <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={colors} style = {styles.gradient}  >
        <Text> SignUpScreen </Text>
        </LinearGradient>
    );
})
