import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import ParticipantsReview from './ParticipantsReview';
import { vw, VectorIcons, Colors, Strings } from '../../../../../Constants';
import styles from './style';
import { connect } from 'react-redux'
import { eventDATA } from '../../../../../Store/Action/Action'
const colors = [Colors.fadedRed, Colors.darkishPink]

class Participants extends Component {
  state = { data: '', count: 0, textShown: false, height: null }

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
    const { item, index } = rawData
    if (index < 3) {
      return (
        <ParticipantsReview
          myData={item}
          myId={index}
        />

      );
    }
  }

  toggleSettlement(id, value) {
    let index = this.props.Event_Data.findIndex((e) => e.serialNo === id)
    if (index != -1) {
      this.props.Event_Data[index].settlement = value
      this.props.eventDATA()
    }
    setTimeout(() => {
      this.callTab()
    }, 200)
  }

  callTab() {
    this.props.goToPage()
  }

  calculateDimensions = () => {
    this.refs.innerView.measureLayout(findNodeHandle(this.refs.containerView), (xPos, yPos, Width, Height) => {
      this.setState({ height: Height });
    });
  }

  render() {
    const { navigation, goToPage } = this.props;
    const { data } = this.state
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
            {this.state.data !== '' && data.PARTICIPANTS.length > 5 && <TouchableOpacity onPress={() => this.props.navigation.navigate("ExploreNoOfParticipants")}>
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
          {this.state.data !== '' && data.reviewDATA.length > 3 && <TouchableOpacity style={styles.reviewBtn} onPress={() => navigation.navigate('Reviews', { 'allReviews': this.state.data.reviewDATA })}>
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