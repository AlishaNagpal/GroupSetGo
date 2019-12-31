import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Images } from '../../Constants';

export default function Flatlist(item, i, navigation) {
        return (
            <TouchableOpacity key={i} style={styles.listView} onPress={() => navigation.navigate(item.route)}>
                <Text style={styles.listText}>{item.title}</Text>
                <Image source={Images.listArrow} />
            </TouchableOpacity>
        );
    }

