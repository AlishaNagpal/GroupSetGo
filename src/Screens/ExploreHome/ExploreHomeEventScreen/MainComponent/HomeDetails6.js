import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

// Custom Imports
import styles from './styles';
import { VectorIcons, vh, vw, Colors } from '../../../../Constants';
import MyTab from '../TabScreens/tabNavigation';
import * as Progress from 'react-native-progress';

export default class HomeDetails6 extends Component {
    state = {
        data: this.props.navigation.getParam('data'),
        going: false
    }

    goingJoin = () => {
        if (this.state.going === false) {
            return (
                <TouchableOpacity style={styles.center} onPress={() => this.setState({ going: true })} >
                    <VectorIcons.Ionicons
                        name="ios-add-circle-outline"
                        color={Colors.orange}
                        size={vh(25)}
                    />
                    <Text style={styles.saveText}>Waitlist</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={styles.center}>
                    <VectorIcons.Ionicons
                        name="ios-checkmark-circle-outline"
                        color={Colors.green}
                        size={vh(25)}
                    />
                    <Text style={styles.goingText}> Going </Text>
                </TouchableOpacity>
            )
        }
    }

    goingSave = () => {
        if (this.state.going === false) {
            return (
                <TouchableOpacity style={styles.center}>
                    <VectorIcons.Ionicons
                        name="ios-add-circle-outline"
                        color={Colors.green}
                        size={vh(25)}
                    />
                    <Text style={styles.joinText}>Join</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={styles.center}>
                    <VectorIcons.AntDesign
                        name="message1"
                        color={Colors.chatBlue}
                        size={vh(25)}
                    />
                    <Text style={styles.chattingText}> Chat </Text>
                </TouchableOpacity>
            )
        }
    }
    render() {
        const { DATA3 } = this.state.data;
        return (
            <View style={styles.mainView}>
                <ScrollView bounces={false} >
                    <View style={styles.viewOne}>
                        <Image
                            source={DATA3.image}
                            style={styles.pic}
                        />
                        <View style={styles.shade} />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeNavigator')} style={styles.backButton} >
                            <VectorIcons.MaterialCommunityIcons
                                name='keyboard-backspace'
                                color={Colors.white}
                                size={vh(30)}
                            />
                        </TouchableOpacity>
                        <VectorIcons.MaterialCommunityIcons
                            name='flag-outline'
                            style={styles.flagBtn}
                            color='white'
                            size={vh(30)}
                        />
                        <View style={styles.cheersView}>
                            <Image source={DATA3.iconImage} style={styles.cheersIcon} />
                        </View>
                    </View>
                    <View style={styles.belowImage}>
                        <View style={{ width: vw(280) }}>
                            <Text style={styles.redText}> {DATA3.time} </Text>
                            <Text style={styles.titleText}>{DATA3.heading}</Text>
                            <Text style={styles.tagText}> {DATA3.hashtag} </Text>
                        </View>
                        <View style={styles.profilePicture}>
                            <Image source={DATA3.profile} style={styles.imgView} />
                            <View style={styles.ratingView}>
                                <Text style={styles.ratingText}> {DATA3.reviewRating} </Text>
                                <VectorIcons.Ionicons
                                    name="ios-star"
                                    color='white'
                                    size={vh(11)}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewTwo2}>
                        <Text style={styles.progressText}> {DATA3.going} Going</Text>
                        <Progress.Bar style={styles.progressBar} progress={DATA3.going / 100} width={vw(380)} color={Colors.green} unfilledColor={Colors.lightGray} borderColor={Colors.white} animated={true} />
                        <View style={styles.progressValue}>
                            <Text style={styles.barNumber}>60</Text>
                            <Text style={styles.barNumber2}>100</Text>
                        </View>
                    </View>
                    <View style={styles.viewTwo3}>
                        <View style={styles.location}>
                            <VectorIcons.SimpleLineIcons
                                name='location-pin'
                                color={Colors.darkGray2}
                                size={vh(17.3)}
                            />
                            <Text style={styles.locationText}> {DATA3.location} </Text>
                        </View>
                        <View style={styles.moneyView}>
                            <View style={styles.iconPlace}>
                                <VectorIcons.MaterialCommunityIcons
                                    name='coin'
                                    color={Colors.darkGray2}
                                    size={vh(20)}
                                />
                                <Text style={styles.money}>{DATA3.money} per person</Text>
                            </View>
                            <View style={styles.iconPlace}>
                                <VectorIcons.MaterialCommunityIcons
                                    name='calendar-month-outline'
                                    color={Colors.darkGray2}
                                    size={vh(20)}
                                />
                                <Text style={styles.cancel}>Cancel By: {DATA3.cancelDate} </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewTwo4}>
                        {this.goingJoin()}
                        {this.goingSave()}
                        <TouchableOpacity style={styles.center} >
                            <VectorIcons.SimpleLineIcons
                                name="share"
                                color={Colors.shareBlue}
                                size={vh(25)}
                            />
                            <Text style={styles.shareText}>Share</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.separator} />
                    <MyTab />
                </ScrollView>
            </View>
        );
    }
}
