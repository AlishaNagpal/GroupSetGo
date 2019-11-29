import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

//Custom Imports
import Colors from './Colors';

const colors = [Colors.moderateRed,Colors.moderatePink, '#9B2F60',Colors.darkViolet,Colors.darkViolet,Colors.darkViolet]

export const Gradient = React.memo(function pureFunction() {
    return (
        <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={colors} style = {styles.gradient}  />
    );
})

const styles = StyleSheet.create({
    gradient: {
        flex: 1
    }
})