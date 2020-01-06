import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

// custom imports
import Basic from './Basic/Basic';
import Followers from './Followers/Followers';
import Following from './Following/Following';
import { vw, vh, Colors } from '../../../Constants';

const NavTabBar = createMaterialTopTabNavigator({
  
    Basic: {
      screen: Basic,
    },
    Followers: {
      screen: Followers
    },
    Following: {
      screen: Following
    },
  },
    {
      initialRouteName: 'Basic',
      tabBarOptions: {
        labelStyle: {
          fontFamily: 'SourceSansPro-Bold',
          fontSize: vw(17.7),
        },
        showIcon: false,
        style: {
          backgroundColor: Colors.darkishViolet,
        },
        indicatorStyle: {
          backgroundColor: 'white',
          height: vh(2.7),
        },
      },
      swipeEnabled: true,
    },
  )
  
  export default createAppContainer(NavTabBar);