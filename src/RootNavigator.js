import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'

/**
 * custom imports
 */
import { VectorIcons, vh, Images } from './Constants'
import SplashScreen from './Screens/SplashScreen/SplashScreen'
import OnboardingLogin from './Screens/OnboardingLogin/OnboardingLogin'
import LoginWithEmail from './Screens/LoginScreen/LoginWithEmail'
import createAccountName from './Screens/SignUpScreen/createAccountName.js'
import createAccountEmail from './Screens/SignUpScreen/createAccountEmail.js'
import createAccountGender from './Screens/SignUpScreen/createAccountGender.js'
import createAccountPassword from './Screens/SignUpScreen/createAccountPassword.js'
import createAccountBirth from './Screens/SignUpScreen/CreateAccountBirth.js'
import ForgotPassword from './Screens/ForgotPassword/ForgotPassword'
import SkipLoginDialog from './Screens/SkipLoginDialog/SkipLoginDialog'
import ExploreHomeScreen from './Screens/ExploreHome/ExploreHomeScreen/ExploreHomeScreen'
import ExploreMapScreen from './Screens/ExploreHome/ExploreHomeScreen/ExploreMapScreen'
import HomeDetails6 from './Screens/ExploreHome/ExploreHomeEventScreen/MainComponent/HomeDetails6';
import ParticipantReview from './Screens/ExploreHome/ExploreHomeEventScreen/TabScreens/Participants/ParticipantReview';
import Review from './Screens/Review/Review'
import MyTab from './Screens/ExploreHome/ExploreHomeEventScreen/TabScreens/tabNavigation'
import Flag from './Screens/ExploreHome/ExploreHomeEventScreen/MainComponent/Flag/flag'
import FlagInappropriate from './Screens/ExploreHome/ExploreHomeEventScreen/MainComponent/Flag/FlagInappropriate'
import ExploreEventsUsers from './Screens/ExploreEventsUsers/ExploreEventsUsers';
import ExploreNoOfParticipants from './Screens/ExploreNoOfParticipants/ExploreNoOfParticipants'
import HomeScreen from './Screens/ExploreHome/ExploreHomeScreen/HomeScreen'
import NewScreen from './Screens/ExploreHome/ExploreHomeEventScreen/TabScreens/About/newScreen'
import { Colors, strings } from './Constants';


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
        navigationOptions: { title: strings.explore },
      },
      Saved: {
        screen: Saved,
        navigationOptions: { title: strings.saved },
      },
      MyEvents: {
        screen: MyEvents,
        navigationOptions: { title: strings.myEvents },
      },
      Chat: {
        screen: Chat,
        navigationOptions: { title: strings.chat },
      },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          if (routeName === 'Explore') {
            return (
              <VectorIcons.Ionicons
                name={'md-search'}
                size={vh(25)}
                color={tintColor}
                style={styles.iconTab}
              />
            );
          } else if (routeName === 'Saved') {
            return (
              <VectorIcons.Ionicons
                name={'ios-heart-empty'}
                size={vh(25)}
                color={tintColor}
                style={styles.iconTab}
              />
            );
          } else if (routeName === 'MyEvents') {
            return (
              <Image
                source={Images.logoIcon}
                style={[styles.iconTab, { tintColor: tintColor }]}
              />
            );
          } else if (routeName === 'Chat') {
            return (
              <VectorIcons.AntDesign
                name={'message1'}
                size={vh(25)}
                color={tintColor}
                style={styles.iconTab}
              />
            );
          }
        },
      }),
      tabBarOptions: {
        activeTintColor: Colors.fadedRed,
        inactiveTintColor: Colors.gray,
      },
    },
  ),
  {
    initialRouteName: 'Explore',
  },
);

const MainStack = createStackNavigator(
  {
    HomeNavigator: {
      screen: TabNavigator,
    },
    SplashScreen: {
      screen: SplashScreen,
    },
    OnboardingLogin: {
      screen: OnboardingLogin,
    },
    HomeDetails6: {
      screen: HomeDetails6,
    },
    MyTab: {
      screen: MyTab,
    },
    Review: {
      screen: Review,
    },
    ExploreNoOfParticipants: {
      screen: ExploreNoOfParticipants
    },
    HomeScreen: {
      screen: HomeScreen
    },
    FlagInappropriate: {
      screen: FlagInappropriate
    },
    NewScreen:{
      screen: NewScreen
    }
  },
  {
    initialRouteName: 'HomeNavigator',
    defaultNavigationOptions: ({ navigation }) => ({
      headerBackTitle: null,
      header: null,
    }),
  },
);

const RootStack = createStackNavigator(
  {
    Main: { screen: MainStack },
    LoginWithEmail: {
      screen: LoginWithEmail,
    },
    SkipLoginDialog: {
      screen: SkipLoginDialog,
    },
    createAccountName: {
      screen: createAccountName,
    },
    createAccountEmail: {
      screen: createAccountEmail,
    },
    createAccountGender: {
      screen: createAccountGender,
    },
    createAccountPassword: {
      screen: createAccountPassword,
    },
    createAccountBirth: {
      screen: createAccountBirth,
    },
    ForgotPassword: {
      screen: ForgotPassword,
    },
    Review: {
      screen: Review,
    },
    ExploreEventsUsers: {
      screen: ExploreEventsUsers,
    },
    Flag: {
      screen: Flag
    },

  },
  {
    mode: 'modal',
    headerMode: 'none',
    transparentCard: true,
  },
);

const AppContainer = createAppContainer(RootStack);
export default createAppContainer(AppContainer);
