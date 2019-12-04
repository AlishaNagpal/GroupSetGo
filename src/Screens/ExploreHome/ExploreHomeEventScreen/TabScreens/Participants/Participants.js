import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { Images, vh, vw, VectorIcons, Colors } from '../../../../../Constants';
import styles from './style';

export default class Participants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
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
          />
        </View>
      );
    }
  }

listOfParticipants = () => {
  console.warn('press');
  () => {this.props.navigation.navigate('ExploreNoOfParticipants')}
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

  render() {
    return (
      <View style={styles.mainView}>
        {/* -------------- Organizer ----------------- */} 
        <View style={styles.viewOne}>
          <Text style={{ ...styles.orgHeading }}>Organizer</Text>
          <View style={styles.picView}>
            <View style={styles.leaveView}>
            <Image
              source={ORGANIZER.pic}
              style={styles.orgPic}
            />
            <View style={styles.nameView}>
              <Text style={{ ...styles.orgName }}>{ORGANIZER.organizer}</Text>
              <View style={styles.ratingView}>
                <Text style={styles.ratingText}>{ORGANIZER.rating}</Text>
                <VectorIcons.Ionicons
                  name="ios-star"
                  color='white'
                  size={vw(9)}
                />
              </View>
            </View>
            </View>
            <View>
            <TouchableOpacity style={styles.leave}>
              <Text style={styles.leaveText}>Leave Event</Text>
              </TouchableOpacity>
              </View>
          </View>
        </View>
        {/* -------------- Participants ----------------- */}
        <View style={styles.viewTwo}>
          <Text style={{ ...styles.orgHeading }}>Participants</Text>
          {/* <FlatList 
          style={styles.myFlatList}
          data = {PARTICIPANTS}
          keyExtractor = {(item, id) => id.toString()}
          renderItem = {this.renderItems}
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled= {true}
          /> */}
          <View style={styles.plus}>
            <FlatList
              data={PARTICIPANTS2}
              keyExtractor={(item, id) => id.toString()}
              renderItem={this.renderParticipantslist}
              horizontal={true}
              scrollEnabled={false}
            />
            {PARTICIPANTS2.length > 5 && <TouchableOpacity onPress={this.listOfParticipants}>
              <View style={styles.plusView}>
                <Text style={styles.plusText}>+{PARTICIPANTS2.length - 5}</Text>
              </View>
            </TouchableOpacity>}
          </View>
        </View>
        {/* -------------- Waitlist ----------------- */}
        <View style={styles.viewThree}>
          <Text style={{ ...styles.orgHeading }}>Waitlist</Text>
          <FlatList
            data={WAITLIST}
            keyExtractor={(item, id) => id.toString()}
            renderItem={this.renderWaitlist}
            horizontal={true}
            nestedScrollEnabled={true}
            bounces={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}

const ORGANIZER = {
  pic: Images.person1,
  organizer: 'John Doe',
  rating: 4.5,
}

const PARTICIPANTS = [
  {
    pic: Images.person2,
    name: 'Scarlet Tindle',
    unseen: 0,
    online: true,
  },
  {
    pic: Images.person3,
    name: 'Sonia Bevis',
    unseen: 2,
    online: false,
  },
  {
    pic: Images.person2,
    name: 'Scarlet Tindle',
    unseen: 5,
    online: false,
  },
  {
    pic: Images.person3,
    name: 'Sonia Bevis',
    unseen: 0,
    online: true,
  },
  {
    pic: Images.person2,
    name: 'Scarlet Tindle',
    unseen: 10,
    online: true,
  },
  {
    pic: Images.person3,
    name: 'Sonia Bevis',
    unseen: 2,
    online: false,
  },
  {
    pic: Images.person2,
    name: 'Scarlet Tindle',
    unseen: 0,
    online: true,
  },
  {
    pic: Images.person3,
    name: 'Sonia Bevis',
    unseen: 1,
    online: true,
  },
]

const PARTICIPANTS2 = [
  { pic: Images.person1 },
  { pic: Images.person2 },
  { pic: Images.person3 },
  { pic: Images.person1 },
  { pic: Images.person2 },
  { pic: Images.person3 },
  { pic: Images.person1 },
  { pic: Images.person2 },
  { pic: Images.person3 },
]

const WAITLIST = [
  { pic: Images.person1 },
  { pic: Images.person2 },
  { pic: Images.person3 },
  { pic: Images.person1 },
  { pic: Images.person2 },
  { pic: Images.person3 },
  { pic: Images.person1 },
  { pic: Images.person2 },
  { pic: Images.person3 },
  { pic: Images.person1 },
  { pic: Images.person2 },
  { pic: Images.person3 },
]