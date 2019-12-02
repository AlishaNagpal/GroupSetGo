import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';

// Custom Imports
import styles from './styles';
import images from '../../Constants/images';
import VectorIcons from '../../Constants/VectorIcons';
import { vh, vw } from '../../Constants';

export default class HomeDetails6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.mainView}>
                <ScrollView>
                    <View style={styles.viewOne}>
                        <Image
                        source={images.party}
                        style={styles.pic}
                        />
                        <VectorIcons.MaterialCommunityIcons 
                        name= 'keyboard-backspace'
                        style={styles.backBtn}
                        color= 'white'
                        size={vh(30)}
                        />
                        <VectorIcons.MaterialCommunityIcons 
                        name= 'flag-outline'
                        style={styles.flagBtn}
                        color= 'white'
                        size={vh(30)}
                        />
                    </View>
                    <View style={styles.viewTwo}>
                    </View>
                    <View style={styles.viewThree}>
                    </View>

                </ScrollView>
            </View>
        );
    }
}
