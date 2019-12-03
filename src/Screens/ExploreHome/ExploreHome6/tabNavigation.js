import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

//Custom Imports
import About from './About';
import Participants from './Participants';
import { VectorIcons, vh, vw, Images, Colors } from '../../../Constants/index';

const NavTabBar = createMaterialTopTabNavigator({

    About: {
        screen: About,
    },
    Participants: {
        screen: Participants
    },
},
    {
        initialRouteName: 'Participants',
        tabBarOptions: {
            
            labelStyle: {
                inactiveTintColor: 'black',
                color: Colors.fadedRed,
                fontSize: vh(15.3),
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