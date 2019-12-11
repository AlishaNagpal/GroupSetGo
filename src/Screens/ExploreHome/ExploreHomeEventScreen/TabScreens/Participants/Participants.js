import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import ParticipantsReview from './ParticipantsReview';

import { Images, vh, vw, VectorIcons, Colors, Strings } from '../../../../../Constants';
import styles from './style';

const colors = [Colors.fadedRed, Colors.darkishPink]
import { connect } from 'react-redux'
import { eventDATA } from '../../../../../Store/Action/Action'
class Participants extends Component {
  state = { data: '', count: 0, textShown: false, }

  componentDidMount() {
    this.getData(this.props.screenProps.id)
  }

  getData = (id) => {
    let temp = this.props.Event_Data
    let indexToEdit = temp.findIndex(item => item.serialNo == id)
    let newData = temp[indexToEdit]
    if (indexToEdit != -1) {
      this.setState({
        data: newData
      })
    }
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={styles.separator}
      />
    );
  }

  renderItems = (rawData) => {
    const { item, id } = rawData
    console.warn('rawData ', rawData)
    return (
      <View style={styles.flatListView}>
        <View style={styles.leftView}>
          <Image
            source={item.pic}
            style={styles.orgPic}
          />
          {item.online &&
            <VectorIcons.MaterialCommunityIcons
              name="checkbox-marked-circle"
              color={Colors.darkGreen}
              size={vh(12.3)}
              style={styles.check}
            />}
          <View style={styles.nameView}>
            <Text style={{ ...styles.orgName }}>{item.name}</Text>
          </View>
        </View>
        <View style={styles.rightView}>
          <View style={{ ...styles.chatView, backgroundColor: item.unseen > 0 ? Colors.darkGreen : 'white', }}>
            {item.unseen > 0 && <Text style={styles.num}>+{item.unseen}</Text>}
          </View>
          <View style={styles.msgView}>
            <VectorIcons.MaterialCommunityIcons
              name="message-text-outline"
              color={Colors.lightGrey}
              size={vh(20.5)}
            />
            <VectorIcons.MaterialCommunityIcons
              name="dots-vertical"
              color={Colors.lightGrey}
              size={vh(20.5)}
              onPress={() => this.delete(id)}
            />
          </View>
        </View>
      </View>
    );
  }

  delete = (key) => {
    console.warn('hii')
    return (
      <View style={styles.deleteChat}>
        <Text>okkk</Text>
      </View>
    );
  }

  renderParticipantslist = (rawData) => {
    const { item, index } = rawData
    if (index < 5) {
      return (
        <View>
          <Image
            source={item.pic}
            style={styles.waitPic}
            toggleText={() => this.toggle(key)}
          />
        </View>
      );
    }
  }

  toggle = (key) => {
    this.setState({
      show: this.state.show === key ? -1 : key,
    })
  }

  listOfParticipants = () => {
    console.warn('press');
    () => { this.props.navigation.navigate('ExploreNoOfParticipants') }
  }

  renderWaitlist = (rawData) => {
    const { item, id } = rawData
    return (
      <View>
        <Image
          source={item.pic}
          style={styles.waitPic}
        />
      </View>
    );
  }

  renderReviewList = (rawData) => {
    const { item, id } = rawData
    return (
      <ParticipantsReview
        myData={item}
        myId={id}
      />

    );
  }

  toggleSettlement(id, value) {
    let index = this.props.Event_Data.findIndex((e) => e.serialNo === id)
    if (index != -1) {
      this.props.Event_Data[index].settlement = value
      this.props.eventDATA()
    }
    console.log(this.props.goToPage)
    this.props.goToPage && this.props.goToPage()
  }


  render() {
    const { navigation } = this.props;
    const { data } = this.state
    console.log("data.ORGANIZER", data.ORGANIZER)
    console.log("PARTICIPANTS", data.PARTICIPANTS)
    return (
      <View style={styles.mainView}>
        {/* -------------- Organizer ----------------- */}
        {this.state.data !== '' &&
          <View style={styles.viewOne}>
            <Text style={{ ...styles.orgHeading }}>{Strings.organizer}</Text>
            <View style={styles.picView}>
              <View style={styles.leaveView}>
                <Image
                  source={data.ORGANIZER.pic}
                  style={styles.orgPic}
                />
                <View style={styles.nameView}>
                  <Text style={{ ...styles.orgName }}>{data.ORGANIZER.organizer}</Text>
                  <View style={styles.ratingView}>
                    <Text style={styles.ratingText}>{data.ORGANIZER.rating}</Text>
                    <VectorIcons.Ionicons
                      name="ios-star"
                      color='white'
                      size={vw(9)}
                    />
                  </View>
                </View>
              </View>
              <View>
                {this.state.data.joined &&
                  <TouchableOpacity style={styles.leave}>
                    <Text style={styles.leaveText}>{Strings.leaveEvent}</Text>
                  </TouchableOpacity>
                }

              </View>
            </View>
          </View>
        }
        {/* -------------- Participants ----------------- */}
        <View style={styles.viewTwo}>
          <Text style={{ ...styles.orgHeading }}>{Strings.participants}</Text>
          <View style={styles.plus}>
            <FlatList
              data={data.PARTICIPANTS}
              keyExtractor={(item, id) => id.toString()}
              renderItem={this.renderParticipantslist}
              horizontal={true}
              scrollEnabled={false}
            />
            {this.state.data !== '' && data.PARTICIPANTS.length > 5 && <TouchableOpacity onPress={this.listOfParticipants}>
              <View style={styles.plusView}>
                <Text style={styles.plusText}>+{data.PARTICIPANTS.length - 5}</Text>
              </View>
            </TouchableOpacity>}
          </View>
        </View>
        {/* -------------- Waitlist ----------------- */}
        <View style={styles.viewThree}>
          <Text style={{ ...styles.orgHeading }}>{Strings.waitlist}</Text>
          <FlatList
            data={data.WAITLIST}
            keyExtractor={(item, id) => id.toString()}
            renderItem={this.renderWaitlist}
            horizontal={true}
            nestedScrollEnabled={true}
            bounces={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.separator2} />
        {/* -------------- Reviews ----------------- */}
        {this.state.data !== '' && data.reviewDATA.length !== 0 && <View>
          <View style={styles.reviewHead}>
            <Text style={styles.reviewText}>{Strings.reviews}</Text>
          </View>
          <View style={styles.flatReview}>
            <FlatList
              data={data.reviewDATA}
              keyExtractor={(item, id) => id.toString()}
              renderItem={this.renderReviewList}
              nestedScrollEnabled={true}
              bounces={false}
            />
          </View>
          {this.state.data !== '' && data.reviewDATA.length > 3 && <TouchableOpacity style={styles.reviewBtn} onPress={() => navigation.navigate('Reviews', { 'allReviews': REVIEWS })}>
            <Text style={styles.readReviewText}>{'read all ' + data.reviewDATA.length + ' Reviews'}</Text>
          </TouchableOpacity>}
        </View>}
        {/* -------------- Settle Account ----------------- */}
        {!data.settlement &&
          <View style={styles.settle}>
            <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.gradientStyle} >
              <TouchableOpacity style={styles.loginButtonStyle}
                onPress={() => this.toggleSettlement(this.props.screenProps.id, true)}
              >
                <Text style={styles.loginButtonTitleStyle}>{Strings.settleAcc}</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>}
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
)(Participants);

const REVIEWS = [
  {
    pic: Images.person3,
    name: 'Nandini',
    date: 'February 2018',
    rating: 4.5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    pic: Images.person2,
    name: 'Emily',
    date: 'February 2018',
    rating: 4.5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    pic: Images.person1,
    name: 'Anna',
    date: 'February 2018',
    rating: 3,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    pic: Images.person3,
    name: 'Nandini',
    date: 'February 2018',
    rating: 4.5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
]