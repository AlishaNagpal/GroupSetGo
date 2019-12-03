import React, { Component } from 'react';
import { 
  View, 
  Text,
  Image 
} from 'react-native';

// Custom imports
import {Images} from '../../../../Constants';

export default class Participants extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View>
          <Image
          source={ORGANIZER.pic}
          style={{}}
          />
          </View>
      </View>
    );
  }
}

const ORGANIZER = [
  {
    pic: Images.person1,
    organizer: 'John Doe',
    rating: 4.5,
},

]

const PARTICIPANTS = [
  {
    pic: Images.person2,
    name: 'Scarlet Tindle',
    unseen: 2,
    online: true,
  },
  {
    pic: Images.person3,
    name: 'Sonia Bevis',
    unseen: 2,
    online: true,
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