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
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import MyTab from '../TabScreens/tabNavigation';
import * as Progress from 'react-native-progress';
Icon.loadFont()

export default class HomeDetails6 extends Component {
    state = {
        data: this.props.navigation.getParam('data'),
        id: this.props.navigation.getParam('id'),
        going: false,
        waitlisted: false
    }

    componentDidMount() {
        this.getData(this.props.navigation.getParam('id').id)
    }

    getData = (id) => {
        let temp = this.state.data
        let indexToEdit = temp.findIndex(item => item.serialNo == id)
        let newData = temp[indexToEdit]
        if (indexToEdit != -1) {
            this.setState({
                data: newData
            })
        }
    }

    goingJoin = () => {
        if (this.state.going === false) {
            return (
                <TouchableOpacity style={styles.center} onPress={() => this.setState({ going: true })} >
                    <VectorIcons.Ionicons
                        name="ios-add-circle-outline"
                        color={Colors.green}
                        size={vh(20)}
                    />
                    <Text style={styles.saveText}>Join</Text>
                </TouchableOpacity>
            )
        } else if (this.state.waitlisted == true) {
            return (
                <TouchableOpacity style={styles.center} onPress={() => this.setState({ going: true })} >
                    <VectorIcons.Ionicons
                        name="ios-add-circle-outline"
                        color={Colors.orange}
                        size={vh(20)}
                    />
                    <Text style={styles.waitlisted}>Waitlist</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={styles.center}>
                    <VectorIcons.Ionicons
                        name="ios-checkmark-circle-outline"
                        color={Colors.green}
                        size={vh(20)}
                    />
                    <Text style={styles.goingText}> Going </Text>
                </TouchableOpacity>
            )
        }
    }

    goingSave = () => {
        if (this.state.going === false) {
            return (
                <TouchableOpacity style={styles.center} >
                    <VectorIcons.Ionicons
                        name="ios-heart-empty"
                        color={Colors.fadedRed}
                        size={vh(20)}
                    />
                    <Text style={styles.joinText}>Save</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={styles.center}>
                    <VectorIcons.AntDesign
                        name="message1"
                        color={Colors.chatBlue}
                        size={vh(20)}
                    />
                    <Text style={styles.chattingText}> Chat </Text>
                </TouchableOpacity>
            )
        }
    }

    render() {
        const { data } = this.state;
        return (
            <View style={styles.mainView}>
                <ScrollView bounces={false}>
                    <View style={styles.viewOne}>
                        <Image
                            source={data.source}
                            style={styles.pic}
                        />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeNavigator')} style={styles.backButton} >
                            <VectorIcons.MaterialCommunityIcons
                                name='keyboard-backspace'
                                color={Colors.white}
                                size={vh(24.3)}
                            />
                        </TouchableOpacity>
                        <VectorIcons.MaterialCommunityIcons
                            name='flag-outline'
                            style={styles.flagBtn}
                            color='white'
                            size={vh(19.3)}
                        />
                        <View style={styles.cheersView}>
                            <Image source={data.icon} style={styles.cheersIcon} />
                        </View>
                    </View>
                    <View style={styles.belowImage}>
                        <View>
                            <Text style={styles.redText}> {data.time} </Text>
                            <Text style={styles.titleText}>{data.heading}</Text>
                            <Text style={styles.tagText}> {data.hashtag} </Text>
                        </View>
                        <View style={styles.profilePicture}>
                            <Image source={data.profile} style={styles.imgView} />
                            <View style={styles.ratingView}>
                                <Text style={styles.ratingText}> {data.reviewRating} </Text>
                                <VectorIcons.Ionicons
                                    name="ios-star"
                                    color={Colors.white}
                                    size={vw(11)}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewTwo2}>
                        <Text style={styles.progressText}> {data.going} Going</Text>
                        <Progress.Bar style={styles.progressBar} progress={10 / 100} width={vw(380)} color={Colors.green} unfilledColor={Colors.lightGray} borderColor={Colors.white} animated={true} />
                        <View style={styles.progressValue}>
                            <Text style={styles.barNumber}>60</Text>
                            <Text style={styles.barNumber2}>100</Text>
                        </View>
                    </View>
                    <View style={styles.viewTwo3}>
                        <View style={styles.location}>
                            <Icon
                                name='location-pin'
                                color={Colors.darkGray2}
                                size={vh(17.3)}
                            />
                            <Text style={styles.locationText}> {data.location} </Text>
                        </View>
                        <View style={styles.moneyView}>
                            <View style={styles.iconPlace}>
                                <VectorIcons.MaterialCommunityIcons
                                    name='coin'
                                    color={Colors.darkGray2}
                                    size={vh(20)}
                                />
                                <Text style={styles.money}>{data.money} per person</Text>
                            </View>
                            <View style={styles.iconPlace}>
                                <VectorIcons.MaterialCommunityIcons
                                    name='calendar-month-outline'
                                    color={Colors.darkGray2}
                                    size={vh(20)}
                                />
                                <Text style={styles.cancel}>Cancel By: {data.cancelDate} </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewTwo4}>
                        {this.goingJoin()}
                        {this.goingSave()}
                        <TouchableOpacity style={styles.center} >
                            <Icon
                                name="share"
                                color={Colors.shareBlue}
                                size={vh(20)}
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
