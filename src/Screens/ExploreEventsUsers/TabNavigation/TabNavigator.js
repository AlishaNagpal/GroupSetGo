import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

//Custom Imports
import ExploreUsers from '../ExploreUsers/ExploreUsers';
import ExploreEvents from '../ExploreEvents/ExploreEvents';
import {vh, vw, Colors } from '../../../Constants/index';

const NavTabBar = createMaterialTopTabNavigator({

    Event: {
        screen: ExploreEvents,
    },
    User: {
        screen: ExploreUsers
    }
},
    {
        initialRouteName: 'Event',
        tabBarOptions: {
            activeTintColor: Colors.white,
            inactiveTintColor: Colors.fadedGray,
            style: {
                backgroundColor: Colors.fadedRed,
            },
            labelStyle : {
                color: Colors.white,
                fontFamily: 'SourceSansPro-Regular',
                fontSize: vw(16.7)
            },
            indicatorStyle: {
                backgroundColor: Colors.white,
                height: vh(3)
            },
        },
        swipeEnabled: true,
    },
)

export default createAppContainer(NavTabBar);