import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

//Custom Imports
import About from './About/About';
import Participants from './Participants/Participants';
import Settlement from './Settlement/Settlement';
import { vh, Colors } from '../../../../Constants/index';

const NavTabBar = createMaterialTopTabNavigator({

    About: {
        screen: About,
    },
    Participants: {
        screen: Participants
    },
    Settlement: {
        screen: Settlement
    },
},
    {
        initialRouteName: 'Participants',
        tabBarOptions: {
            activeTintColor: Colors.fadedRed,
            inactiveTintColor: Colors.gray,
            style: {
                backgroundColor: Colors.white
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