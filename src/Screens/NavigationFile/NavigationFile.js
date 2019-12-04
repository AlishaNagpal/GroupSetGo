import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from '../SplashScreen/SplashScreen'
import { createAccountName } from '../SignUpScreen/createAccountName.js'
import { createAccountEmail } from '../SignUpScreen/createAccountEmail.js'
import createAccountGender from '../SignUpScreen/createAccountGender.js'
import createAccountPassword from '../SignUpScreen/createAccountPassword.js'
import createAccountBirth from '../SignUpScreen/CreateAccountBirth.js'
import ExploreHomeScreen from '../ExploreHome/ExploreHomeScreen/ExploreHomeScreen'
import OnboardingLogin from '../OnboardingLogin/OnboardingLogin'
import ForgotPassword from '../ForgotPassword/ForgotPassword'
import LoginWithEmail from '../LoginScreen/LoginWithEmail'
import ResetPassword from '../ResetPassword/ResetPassword'
import ExploreNoOfParticipants from '../ExploreNoOfParticipants/ExploreNoOfParticipants'
import HomeDetails6 from '../ExploreHome/ExploreHome6/HomeDetails6';
import ExploreHomeScreen02 from '../ExploreHome/ExploreHomeScreen02/ExploreHomeScreen02'
import ExploreEventsUsers from '../ExploreEventsUsers/ExploreEventsUsers'

const AppNavigator = createStackNavigator({
    createAccountName: { screen: createAccountName, navigationOptions: { header: null } },
    createAccountEmail: { screen: createAccountEmail, navigationOptions: { header: null } },
    createAccountGender: { screen: createAccountGender, navigationOptions: { header: null } },
    createAccountBirth: { screen: createAccountBirth, navigationOptions: { header: null } },
    createAccountPassword: { screen: createAccountPassword, navigationOptions: { header: null } },
    ExploreHomeScreen01: { screen: ExploreHomeScreen01, navigationOptions: { header: null } },
    HomeDetails6: { screen: HomeDetails6, navigationOptions: { header: null, } },
    ExploreHomeScreen02: { screen: ExploreHomeScreen02, navigationOptions: { header: null } },
    SplashScreen: { screen: SplashScreen, navigationOptions: { header: null, } },
    OnboardingLogin: {
        screen: OnboardingLogin,
        navigationOptions: () => ({
            header: null
        })
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: () => ({
            header: null
        })
    },
    ExploreEventsUsers: {
        screen: ExploreEventsUsers,
        navigationOptions: () => ({
            header: null
        })
    },
    LoginWithEmail: {
        screen: LoginWithEmail,
        navigationOptions: () => ({
            header: null
        })
    },
    ExploreNoOfParticipants: {
        screen: ExploreNoOfParticipants,
        navigationOptions: () => ({
            header: null
        })
    },
    ResetPassword: {
        screen: ResetPassword,
        navigationOptions: () => ({
            header: null
        })
    },
},

    {
        initialRouteName: 'SplashScreen',
        defaultNavigationOptions: ({ navigation }) => ({
            headerBackTitle: null,
        }),
    }
);
export default createAppContainer(AppNavigator);