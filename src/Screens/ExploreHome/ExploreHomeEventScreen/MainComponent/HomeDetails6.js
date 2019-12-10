import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from 'react-native';

// Custom Imports
import styles from './styles';
import { VectorIcons, vh, vw, Colors, strings } from '../../../../Constants';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import * as Progress from 'react-native-progress';
import { connect } from 'react-redux'
import { eventDATA } from '../../../../Store/Action/Action'
import About from '../TabScreens/About/About';
import Participants from '../TabScreens/Participants/Participants';
import Settlement from '../TabScreens/Settlement/Settlement';
Icon.loadFont()
var ScrollableTabView = require('react-native-scrollable-tab-view');

const scene = true;
class HomeDetails6 extends Component {
    state = {
        data: this.props.navigation.getParam('data'),
        id: this.props.navigation.getParam('id'),
        going: false,
        hearted: false,
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

    toggle(id, value) {
        let index = this.props.Event_Data.findIndex((e) => e.serialNo === id.id)
        if (index != -1) {
            this.props.Event_Data[index].hearted = value
            this.props.eventDATA()
        }
        this.setState({
            hearted: value
        })
    }

    joined(id, value) {
        let index = this.props.Event_Data.findIndex((e) => e.serialNo === id.id)
        if (index != -1) {
            this.props.Event_Data[index].joined = value
            this.props.eventDATA()
        }
        this.setState({
            going: value
        })
    }

    goingJoin = () => {
        return (
            <TouchableOpacity style={styles.center} onPress={() => this.joined(this.state.id, !this.state.going)} >
                <VectorIcons.Ionicons
                    name={this.state.going ? "ios-checkmark-circle-outline" : "ios-add-circle-outline"}
                    color={Colors.green}
                    size={vh(20)}
                />
                <Text style={styles.saveText}>{this.state.going ? strings.going : strings.join}</Text>
            </TouchableOpacity>
        )
    }

    goingSave = () => {
        if (this.state.going === false) {
            return (
                <TouchableOpacity style={styles.center} onPress={() => { this.toggle(this.state.id, !this.state.hearted) }} >
                    <VectorIcons.Ionicons
                        name={this.state.hearted ? "ios-heart" : "ios-heart-empty"}
                        color={Colors.fadedRed}
                        size={vh(20)}
                    />
                    <Text style={styles.joinText}>{this.state.hearted ? strings.savedIcon : strings.saveIcon}</Text>
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
                    <Text style={styles.chattingText}> {strings.chatIcon} </Text>
                </TouchableOpacity>
            )
        }
    }

    render() {
        const { data } = this.state;
        return (
            <View style={styles.mainView}>
                <ScrollView bounces={false}>
                    <View>
                        <Image
                            source={{ uri: data.source }}
                            style={styles.pic}
                        />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeNavigator')} style={styles.backButton} >
                            <VectorIcons.MaterialCommunityIcons
                                name='keyboard-backspace'
                                color={Colors.white}
                                size={vh(24.3)}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Flag')} style={styles.flagBtn} >
                            <VectorIcons.MaterialCommunityIcons
                                name='flag-outline'
                                color={Colors.white}
                                size={vh(19.3)}
                            />
                        </TouchableOpacity>
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
                        <Text style={styles.progressText}> {data.going} {strings.going} </Text>
                        <Progress.Bar style={styles.progressBar} progress={ 10/100 } width={vw(380)} color={Colors.green} unfilledColor={Colors.lightGray} borderColor={Colors.white} animated={true} />
                        <View style={styles.progressValue}>
                            <Text style={styles.barNumber}> {data.min} ({strings.min}) </Text>
                            <Text style={styles.barNumber2}> {data.max} ({strings.max}) </Text>
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
                                <Text style={styles.money}>{data.money} {strings.perPersonSmall} </Text>
                            </View>
                            <View style={styles.iconPlace}>
                                <VectorIcons.MaterialCommunityIcons
                                    name='calendar-month-outline'
                                    color={Colors.darkGray2}
                                    size={vh(20)}
                                />
                                <Text style={styles.cancel}> {strings.cancel} {data.cancelDate} </Text>
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
                            <Text style={styles.shareText}> {strings.share} </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollableTabView>
                        <About tabLabel="About" navigation={this.props.navigation} screenProps={this.props.navigation.getParam('id')} />
                        <Participants tabLabel="Participants" navigation={this.props.navigation} />
                        {scene && <Settlement tabLabel="Settlement" navigation={this.props.navigation} />}
                    </ScrollableTabView>
                </ScrollView>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        eventDATA: () => dispatch(eventDATA())
    }
}

function mapStateToProps(state) {
    const { Event_Data } = state.Reducer;
    return {
        Event_Data
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeDetails6);