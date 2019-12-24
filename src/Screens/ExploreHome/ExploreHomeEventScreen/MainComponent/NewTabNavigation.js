import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import About from '../TabScreens/About/About';
import Participants from '../TabScreens/Participants/Participants';
import Settlement from '../TabScreens/Settlement/Settlement';
import {vh, vw, Colors } from '../../../../Constants';

const tabState = true

const NavTabBar = createMaterialTopTabNavigator({
    About: {
    screen: About, 
  },
  Participants: {
    screen: Participants,
  },
  ...(tabState && { Settlement: Settlement }),
},
  {
    navigationOptions:{
      gesturesEnabled: true,
    },
    initialRouteName: 'About',
    lazy: true,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: Colors.fadedRed,
      inactiveTintColor: Colors.fadedGray2,
      labelStyle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: vw(14.5),
      },
      style: {
        backgroundColor: 'white',
      },
      indicatorStyle: {
        backgroundColor: Colors.fadedRed,
        height: vh(4),
      },
    },
  },
)

export default createAppContainer(NavTabBar);