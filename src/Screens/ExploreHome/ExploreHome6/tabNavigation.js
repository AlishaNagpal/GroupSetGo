import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

//Custom Imports
import About from './About';
import Participants from './Participants';
import Settlement from './Settlement';
import { VectorIcons, vh, vw, Images, Colors } from '../../../Constants/index';

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
            
            labelStyle: {
                inactiveTintColor: 'black',
                color: Colors.fadedRed,
                fontSize: vh(14.6),
                fontWeight: '600',
            },
            showIcon: false,
            style: {
                backgroundColor: 'white',
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