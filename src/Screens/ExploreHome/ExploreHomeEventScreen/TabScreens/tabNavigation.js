import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

//Custom Imports
import About from './About/About';
import Participants from './Participants/Participants';
import Settlement from './Settlement/Settlement';
import { vh, Colors, vw } from '../../../../Constants/index';

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
            inactiveTintColor: Colors.gray,
            activeTintColor: Colors.fadedRed,
            labelStyle: {
                fontSize: vw(14.6),
                fontWeight: '600',
            },
            showIcon: false,
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