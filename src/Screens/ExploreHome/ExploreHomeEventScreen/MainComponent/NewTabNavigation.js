import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import About from '../TabScreens/About/About';
import Participants from '../TabScreens/Participants/Participants';
import Settlement from '../TabScreens/Settlement/Settlement';
import { VectorIcons, vh, vw, Colors, strings } from '../../../../Constants';

const tabState = false

const NavTabBar = createMaterialTopTabNavigator({
  
    About: {
    screen: About,
  },
  Participants: {
    screen: Participants
  },
  ...(tabState && { Settlement: Settlement }),
},
  {
    initialRouteName: 'About',
    tabBarOptions: {
      labelStyle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: vw(16.3),
        color: Colors.fadedRed
      },
      showIcon: false,
      style: {
        backgroundColor: 'white',
       paddingVertical: vw(4.7)
      },
      indicatorStyle: {
        backgroundColor: Colors.fadedRed,
        height: vh(3),
      },
    },
    swipeEnabled: true,
  },
)

export default createAppContainer(NavTabBar);