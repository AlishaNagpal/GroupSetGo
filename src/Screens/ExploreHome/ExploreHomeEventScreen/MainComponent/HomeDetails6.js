import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Platform, SectionList } from 'react-native';

// Custom Imports
import styles from './styles';
import { VectorIcons, vh, vw, Colors, strings } from '../../../../Constants';
import * as Progress from 'react-native-progress';
import { ProgressiveImage, Toast } from '../../../../ReusableComponents'
import { connect } from 'react-redux'
import { eventDATA, SavedEvents } from '../../../../Store/Action/Action'
import NewTabNavigation from './NewTabNavigation';
import { FlatList } from 'react-native-gesture-handler';

class HomeDetails6 extends Component {
    state = {
        data: '',
        id: this.props.navigation.getParam('id'),
        render: false,
        heightTab: null,
        tabNumber: 0,
        aboutTab: null,
        participamntsTab: null,
        toggle: false,
        call: false
    }

    componentDidMount() {
        this.getData(this.props.navigation.getParam('id').id)
        setTimeout(() => {
            this.setState({
                render: true
            });
        }, 0)
    }

    getData = (id) => {
        let temp = this.props.navigation.getParam('data')
        let indexToEdit = temp.findIndex(item => item.serialNo == id)
        let newData = temp[indexToEdit]
        if (indexToEdit != -1) {
            this.setState({
                data: newData
            })
        }
    }

    resetCall = (value) => {
        this.setState({
            call: value
        })
    }

    toggle(id, value) {
        let index = this.props.Event_Data.findIndex((e) => e.serialNo === id.id)
        if (index != -1) {
            this.props.Event_Data[index].hearted = value
            this.props.eventDATA()
        }
        if (value === true) {
            this.props.SavedEvents(this.props.Event_Data[index])
        } else if (value === false) {
            let temporary = this.props.savedEvents
            let indexToDelete = temporary.findIndex(item => item.serialNo === id.id)
            if (indexToDelete !== -1) {
                this.props.savedEvents.splice(indexToDelete, 1)
            }
        }
    }

    joined(id, value) {
        let index = this.props.Event_Data.findIndex((e) => e.serialNo === id.id)
        if (value === false && index != -1) {
            this.props.navigation.navigate('LeaveEvent', { id: this.props.navigation.getParam('id').id })
            setTimeout(() => {
                this.props.Event_Data[index].joined = value
                this.props.eventDATA()
            }, 30000)
        } else if (value === true && index != -1) {
            this.props.navigation.navigate('AddGuests', { id: this.props.navigation.getParam('id').id })
            setTimeout(() => {
                this.props.Event_Data[index].joined = value
                this.props.eventDATA()
            }, 400)
        }
    }

    goingJoin = () => {
        return (
            <TouchableOpacity style={styles.center}
                onPress={() => this.joined(this.state.id, !this.state.data.joined)}
                activeOpacity={1} >
                <VectorIcons.Ionicons
                    name={this.state.data.joined ? "ios-remove-circle-outline" : "ios-add-circle-outline"}
                    color={this.state.data.joined ? Colors.fadedRed : Colors.green}
                    size={vh(26)}
                />
                <Text style={[styles.saveText, { color: this.state.data.joined ? Colors.fadedRed : Colors.green }]}>{this.state.data.joined ? strings.going : strings.join}</Text>
            </TouchableOpacity>
        )
    }

    goingSave = () => {
        if (this.state.data.joined === false) {
            return (
                <TouchableOpacity activeOpacity={1} style={styles.center} onPress={() => { this.toggle(this.state.id, !this.state.data.hearted) }} >
                    <VectorIcons.Ionicons
                        name={this.state.data.hearted ? "ios-heart" : "ios-heart-empty"}
                        color={Colors.fadedRed}
                        size={vh(26)}
                    />
                    <Text style={styles.joinText}>{this.state.data.hearted ? strings.savedIcon : strings.saveIcon}</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={styles.center} activeOpacity={1} >
                    <VectorIcons.AntDesign
                        name="message1"
                        color={Colors.chatBlue}
                        size={vh(22)}
                    />
                    <Text style={styles.chattingText}> {strings.chatIcon} </Text>
                </TouchableOpacity>
            )
        }
    }

    goToPage(pageId) {
        this.tabView.goToPage(pageId);
    }

    renderData = (rowData) => {
        const { item } = rowData
        return (
            <ProgressiveImage
                thumbnailSource={{ uri: this.state.data.thumbnail }}
                source={{ uri: item.pic }}
                style={styles.pic}
            />
        )
    }

    render() {
        const { data } = this.state;
        return (
            <View style={[styles.mainView, { marginTop: Platform.OS === 'ios' ? vh(27) : vh(0) }]}>
                <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                    <View>
                        <FlatList
                            data={data.fullSource}
                            keyExtractor={(item, index) => item + index}
                            renderItem={this.renderData}
                            horizontal
                            bounces={false}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                        />
                        {/* <ProgressiveImage
                            thumbnailSource={{ uri: data.thumbnail }}
                            source={{ uri: data.source }}
                            style={styles.pic}
                        /> */}
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
                            <Image source={{ uri: this.props.profileData.profilePic }} style={styles.imgView} />
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
                        <Text style={styles.progressText}> {data.going} {strings.goingPeople} </Text>
                        <Progress.Bar style={styles.progressBar} progress={10 / 100} width={vw(380)} color={Colors.green} unfilledColor={Colors.lightGray} borderColor={Colors.white} animated={true} />
                        <View style={styles.progressValue}>
                            <Text style={styles.barNumber}> {data.min} ({strings.min}) </Text>
                            <Text style={styles.barNumber2}> {data.max} ({strings.max}) </Text>
                        </View>
                    </View>
                    <View style={styles.viewTwo3}>
                        <View style={styles.location}>
                            <VectorIcons.SimpleLineIcons
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
                        <View style={styles.divide} >
                            {this.goingJoin()}
                        </View>
                        <View style={styles.divide} >
                            {this.goingSave()}
                        </View>
                        <View style={styles.divide} >
                            <TouchableOpacity style={styles.center} activeOpacity={1} onPress={() => this.resetCall(true)} >
                                <VectorIcons.SimpleLineIcons name="share" color={Colors.shareBlue} size={vh(20)} />
                                <Text style={styles.shareText}> {strings.share} </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.separator2} />
                    <View >
                        {this.state.render && <NewTabNavigation
                            screenProps={{ screenProps: this.props.navigation.getParam('id'), navigation: this.props.navigation, goToPage: () => this.goToPage(2) }}
                        />}
                    </View>
                </ScrollView>
                {this.state.call === true &&
                    <Toast top={-30} from={0} to={-30} message={strings.UnderWork} call={(value) => this.resetCall(value)} />
                }
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        eventDATA: () => dispatch(eventDATA()),
        SavedEvents: (value) => dispatch(SavedEvents(value))
    }
}

function mapStateToProps(state) {
    const { Event_Data, profileData, savedEvents } = state.Reducer;
    return {
        Event_Data,
        profileData,
        savedEvents
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeDetails6);