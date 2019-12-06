import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

//Custom Imports
import About from './About/About';
import Participants from './Participants/Participants';
import Settlement from './Settlement/Settlement';
import { vh, Colors, vw } from '../../../../Constants/index';
import { createStackNavigator } from 'react-navigation-stack';

let scene = false;

const NavTabBar = createMaterialTopTabNavigator({

    About: {
        screen: About
    },
    Participants: {
        screen: Participants
    },
    ...(scene === true ? { Settlement: { screen: Settlement } } : {}),
},
    {
        initialRouteName: 'About',
        tabBarOptions: {
            inactiveTintColor: Colors.gray,
            activeTintColor: Colors.fadedRed,
            labelStyle: {
                fontSize: (scene === true) ? vw(13.6): vw(15.3),
                fontWeight: '600',
            },
            showIcon: false,
            style: {
                backgroundColor: Colors.white,
            },
            indicatorStyle: {
                backgroundColor: Colors.fadedRed,
                height: vh(3)
            },
        },
        swipeEnabled: true,
    },
)

export default createAppContainer(NavTabBar);