import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { vh, vw, VectorIcons, Colors, Strings, Images } from '../../Constants';

export default class Flatlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { item, index, navigation } = this.props
        return (
            <TouchableOpacity style={styles.listView} onPress={() => navigation.navigate(item.route)}>
                <Text style={styles.listText}>{item.title}</Text>
                <Image source={Images.listArrow} />
            </TouchableOpacity>
        );
    }
}
