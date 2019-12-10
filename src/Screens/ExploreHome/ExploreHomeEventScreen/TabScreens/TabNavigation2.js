var ScrollableTabView = require('react-native-scrollable-tab-view');
import React, { Component } from 'react';
import { View, Text } from 'react-native';

//Custom Imports
import About from './About/About';
import Participants from './Participants/Participants';
import Settlement from './Settlement/Settlement';
import { vh, Colors, vw } from '../../../../Constants/index';

export default class TabNavigation2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollableTabView>
        <About tabLabel="About" navigation={this.props.navigation}/>
        <Participants tabLabel="Participants" navigation={this.props.navigation} />
        <Settlement tabLabel="Settlement" navigation={this.props.navigation} />
      </ScrollableTabView>
    );
  }
}
