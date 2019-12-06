import React from 'react';
import { Image, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'

//Custom Imports
import {VectorIcons, vh, Images} from '../../Constants'

import SplashScreen from '../SplashScreen/SplashScreen'
import createAccountName from '../SignUpScreen/createAccountName.js'
import createAccountEmail from '../SignUpScreen/createAccountEmail.js'
import createAccountGender from '../SignUpScreen/createAccountGender.js'
import createAccountPassword from '../SignUpScreen/createAccountPassword.js'
import createAccountBirth from '../SignUpScreen/CreateAccountBirth.js'
import OnboardingLogin from '../OnboardingLogin/OnboardingLogin'
import ForgotPassword from '../ForgotPassword/ForgotPassword'
import LoginWithEmail from '../LoginScreen/LoginWithEmail'
import ResetPassword from '../ResetPassword/ResetPassword'
import ExploreNoOfParticipants from '../ExploreNoOfParticipants/ExploreNoOfParticipants'
import HomeDetails6 from '../ExploreHome/ExploreHomeEventScreen/MainComponent/HomeDetails6';
import ExploreEventsUsers from '../ExploreEventsUsers/ExploreEventsUsers'
import ExploreHomeScreen from '../ExploreHome/ExploreHomeScreen/ExploreHomeScreen'
import ExploreMapScreen from '../ExploreHome/ExploreHomeScreen/ExploreMapScreen'

console.ignoredYellowBox = true;

const Explore = createStackNavigator({ Explore: ExploreHomeScreen, Map: ExploreMapScreen },
    { defaultNavigationOptions: { header: null } });
const Saved = createStackNavigator({ Saved: ExploreHomeScreen, },
    { defaultNavigationOptions: { header: null } });
const MyEvents = createStackNavigator({ MyEvents: ExploreHomeScreen },
    { defaultNavigationOptions: { header: null } });
const Chat = createStackNavigator({ Chat: ExploreHomeScreen },
    { defaultNavigationOptions: { header: null } });


const TabNavigator = createAppContainer(
    createBottomTabNavigator(
        {
            Explore: {
                screen: Explore,
                navigationOptions: { title: "EXPLORE" }
            },
            Saved: {
                screen: Saved,
                navigationOptions: { title: "SAVED" }
            },
            MyEvents: {
                screen: MyEvents,
                navigationOptions: { title: "MY EVENTS" }
            },
            Chat: {
                screen: Chat,
                navigationOptions: { title: "CHAT" }
            },
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    const { routeName } = navigation.state;
                    if (routeName === 'Explore') {
                        return (
                            <VectorIcons.Ionicons name={'md-search'} size={vh(25)} color={tintColor} style={styles.iconTab} />
                        )
                    } else if (routeName === 'Saved') {
                        return (
                            <VectorIcons.Ionicons name={'ios-heart-empty'} size={vh(25)} color={tintColor} style={styles.iconTab} />
                        )
                    } else if (routeName === 'MyEvents') {
                        return (
                            <Image
                                source={Images.logoIcon}
                                style={[styles.iconTab, { tintColor: tintColor }]}
                            />
                        )
                    } else if (routeName === 'Chat') {
                        return (
                            <VectorIcons.AntDesign name={'message1'} size={vh(25)} color={tintColor} style={styles.iconTab} />
                        )
                    }
                },
            }),
            tabBarOptions: {
                activeTintColor: 'red',
                inactiveTintColor: 'gray',
            },                                        
        }
    ),
    {
        initialRouteName: 'Explore'
    },
)

const AppNavigator = createStackNavigator({
    createAccountName: { screen: createAccountName, navigationOptions: { header: null } },
    createAccountEmail: { screen: createAccountEmail, navigationOptions: { header: null } },
    createAccountGender: { screen: createAccountGender, navigationOptions: { header: null } },
    createAccountBirth: { screen: createAccountBirth, navigationOptions: { header: null } },
    createAccountPassword: { screen: createAccountPassword, navigationOptions: { header: null } },
    HomeDetails6: { screen: HomeDetails6, navigationOptions: { header: null, } },
    SplashScreen: { screen: SplashScreen, navigationOptions: { header: null, } },
    ExploreMapScreen: { screen: ExploreMapScreen, navigationOptions: { header: null } },
    OnboardingLogin: { screen: OnboardingLogin, navigationOptions: () => ({ header: null }) },
    ForgotPassword: { screen: ForgotPassword, navigationOptions: () => ({ header: null }) },
    ExploreEventsUsers: { screen: ExploreEventsUsers, navigationOptions: () => ({ header: null }) },
    LoginWithEmail: { screen: LoginWithEmail, navigationOptions: () => ({ header: null }) },
    ExploreNoOfParticipants: { screen: ExploreNoOfParticipants, navigationOptions: () => ({ header: null }) },
    ResetPassword: { screen: ResetPassword, navigationOptions: () => ({ header: null }) },
    HomeNavigator: { screen: TabNavigator, navigationOptions: { header: null } },
},
    {
        initialRouteName: 'OnboardingLogin',
        defaultNavigationOptions: ({ navigation }) => ({
            headerBackTitle: null,
        }),
    },
    {
        mode: 'modal',
        headerMode: 'none',
      }
);
export default createAppContainer(AppNavigator);