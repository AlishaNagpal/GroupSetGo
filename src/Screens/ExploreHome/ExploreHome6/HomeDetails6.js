import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

// Custom Imports
import styles from './styles';
import { VectorIcons, vh, vw, Images } from '../../../Constants/index';
import MyTab from './tabNavigation';

Icon.loadFont()

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
                            source={Images.party}
                            style={styles.pic}
                        />
                        <VectorIcons.MaterialCommunityIcons
                            name='keyboard-backspace'
                            style={styles.backBtn}
                            color='white'
                            size={vh(30)}
                        />
                        <VectorIcons.MaterialCommunityIcons
                            name='flag-outline'
                            style={styles.flagBtn}
                            color='white'
                            size={vh(30)}
                        />
                        <View style={styles.cheersView}>
                            <VectorIcons.MaterialCommunityIcons
                                name="glass-cocktail"
                                style={styles.cheersIcon}
                                color='white'
                                size={vh(20)}
                            />
                        </View>
                    </View>
                    <View style={styles.viewTwo}>
                        <View style={styles.viewTwo1}>
                            <View style={{ width: '75%' }}>
                                <Text style={styles.redText}>sat, apr 14 • 9 pm </Text>
                                <Text style={styles.titleText}>Culture Collective x Beat League Live at Beauty Bar</Text>
                                <Text style={styles.tagText}>#unlimitedcarnival</Text>
                            </View>
                            <View style={{ width: '25%', alignItems: 'flex-end' }}>
                                <View style={styles.imgView}>
                                </View>
                                <View style={styles.ratingView}>
                                    <Text style={styles.ratingText}>4.5</Text>
                                    <VectorIcons.Ionicons
                                        name="ios-star"
                                        color='white'
                                        size={vh(11)}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewTwo2}>
                            <Text style={styles.progressText}>21 Going</Text>
                            <View style={styles.progressBar}>
                                <View style={{ ...styles.progress }}></View>
                            </View>
                            <View style={styles.progressValue}>
                                <Text style={{ color: 'rgba(123, 123, 123, 1)', fontSize: vh(12) }}>60</Text>
                                <Text style={{ marginLeft: vw(100), color: 'rgba(123, 123, 123, 1)', fontSize: vh(12) }}>100</Text>
                            </View>
                        </View>
                        <View style={styles.viewTwo3}>
                            <View style={{ flexDirection: 'row', paddingBottom: vh(15.3) }}>
                                <Icon
                                    name='location-pin'
                                    color='rgb(72, 72, 72)'
                                    size={vh(17.3)}
                                />
                                <Text style={{ fontSize: vw(15.3), color: 'rgb(72, 72, 72)' }}>200 N Columbus Dr, Chicago, IL 60601, USA</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <VectorIcons.MaterialCommunityIcons
                                        name='coin'
                                        color='rgb(72, 72, 72)'
                                        size={vh(20)}
                                    />
                                    <Text style={{ fontSize: vw(15.3), color: 'rgb(72, 72, 72)' }}>$45 - 90 per person</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <VectorIcons.MaterialCommunityIcons
                                        name='calendar-month-outline'
                                        color='rgb(72, 72, 72)'
                                        size={vh(20)}
                                    />
                                    <Text style={{ fontSize: vw(15.3) }}>Cancel By: 7/4/2018</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewTwo4}>
                            <View>
                                <TouchableOpacity style={{ alignItems: 'center' }}>
                                    <VectorIcons.Ionicons
                                        name="ios-add-circle-outline"
                                        color='rgb(34, 138, 51)'
                                        size={vh(25)}
                                    />
                                    <Text style={{ fontSize: vh(15), color: 'rgb(34, 138, 51)' }}>Join</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={{ alignItems: 'center' }}>
                                    <VectorIcons.MaterialCommunityIcons
                                        name="heart-outline"
                                        color='rgb(220, 71, 94)'
                                        size={vh(25)}
                                    />
                                    <Text style={{ fontSize: vh(15), color: 'rgb(220, 71, 94)' }}>Save</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={{ alignItems: 'center' }}>
                                    <Icon
                                        name="share"
                                        color='rgb(60, 117, 151)'
                                        size={vh(25)}
                                    />
                                    <Text style={{ fontSize: vh(15), color: 'rgb(60, 117, 151)' }}>Share</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'rgb(245, 245, 245)', padding: vh(6) }}>
                    </View>
                    <View style={styles.viewThree}>
                        <MyTab />
                    </View>

                </ScrollView>
            </View>
        );
    }
}
