import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Colors, strings } from './Constants';

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
import Review from './Screens/Review/Review'
import Flag from './Screens/ExploreHome/ExploreHomeEventScreen/MainComponent/Flag/flag'
import FlagInappropriate from './Screens/ExploreHome/ExploreHomeEventScreen/MainComponent/Flag/FlagInappropriate'
import ExploreEventsUsers from './Screens/ExploreEventsUsers/ExploreEventsUsers';
import ExploreNoOfParticipants from './Screens/ExploreNoOfParticipants/ExploreNoOfParticipants'
import HomeScreen from './Screens/ExploreHome/ExploreHomeScreen/HomeScreen'
import VenueReviews from './Screens/ExploreHome/ExploreHomeEventScreen/TabScreens/About/VenueReviews'
import Reviews from './Screens/ExploreHome/ExploreHomeEventScreen/TabScreens/Participants/Reviews';
import Settlement from './Screens/ExploreHome/ExploreHomeEventScreen/TabScreens/Settlement/Settlement';
import ReviewFlatList from './Screens/ExploreHome/ExploreHomeEventScreen/TabScreens/Participants/ReviewFlatList';
import Card from './Screens/ExploreNoOfParticipants/Card'
import Response from './Screens/ExploreHome/ExploreHomeEventScreen/MainComponent/Flag/response'
import AddGuests from './Screens/AddGuests/AddGuests'
import LeaveEvent from './Screens/ExploreHome/ExploreHomeEventScreen/MainComponent/LeaveEvent'
import transitionConfiguration from './transitionConfiguration';
import RaiseIncident from './Screens/ExploreHome/ExploreHomeEventScreen/TabScreens/Settlement/RaiseIncident/RaiseIncident'
import RaiseReport from './Screens/ExploreHome/ExploreHomeEventScreen/TabScreens/Settlement/RaiseIncident/RaiseReport'
import Check from './Check';
import RateAndReviewStep1 from './Screens/RateAndReview/RateAndReviewStep1'
import RateAndReviewStep2 from './Screens/RateAndReview/RateAndReviewStep2'
import RateAndReviewStep3 from './Screens/RateAndReview/RateAndReviewStep3'
import RateAndReviewModal from './Screens/RateAndReview/RateAndReviewModal'
import CreateEventStep1 from './Screens/CreateEvent/CreateEventStep1'
import CreateEventStep2 from './Screens/CreateEvent/CreateEventStep2'
import CreateEventStep3 from './Screens/CreateEvent/CreateEventStep3'
import CreateEventStep4 from './Screens/CreateEvent/CreateEventStep4'
import PickerView from './Screens/CreateEvent/PickerView'
import SaveModal from './Screens/CreateEvent/SaveModal'
import CategorySelectModal from './Screens/CreateEvent/CategorySelectModal'
import SortDialog from './Screens/ExploreHome/ExploreHomeEventScreen/MainComponent/SortDialog/SortDialog';
import Filter from './Screens/ExploreHome/ExploreHomeEventScreen/MainComponent/filterPage/Filter';
import InfoDialog from './Screens/ExploreHome/ExploreHomeEventScreen/MainComponent/filterPage/InfoDialog';
import InfoForFamily from './Screens/CreateEvent/InfoForFamily'
import ResetDialog from './Screens/ExploreHome/ExploreHomeEventScreen/MainComponent/filterPage/ResetDialog';
import MyAccount from './Screens/MyAccount/MyAccount';
import ContactUs from './Screens/MyAccount/ContactUs/ContactUs';
import MyProfile from './Screens/MyAccount/MyProfile/MyProfile';
import Payments from './Screens/MyAccount/Payments/Payments';
import PrivacyPolicy from './Screens/MyAccount/PrivacyPolicy/PrivacyPolicy';
import Settings from './Screens/MyAccount/Settings/Settings';
import Incidents from './Screens/MyAccount/Incidents/Incidents';
import InviteFrnd from './Screens/MyAccount/InviteFrnd/InviteFrnd';
import CategorySelectModalPart2 from './Screens/ExploreHome/ExploreHomeEventScreen/MainComponent/filterPage/CategorySelectModalPart2'
import ExploreSaved from './Screens/ExploreSaved/ExploreSaved'
import ExploreChat from "./Screens/ExploreChat/ExploreChat";
import ExploreMyEvents from "./Screens/ExploreMyEvents/ExploreMyEvents";
import ResetPassword from './Screens/ResetPassword/ResetPassword';
import NewTabNavigation from './Screens/ExploreHome/ExploreHomeEventScreen/MainComponent/NewTabNavigation';
import PublishModel from './Screens/CreateEvent/PublishModel'
import AddressModal from './Screens/CreateEvent/AddressModal'
import Notification from './Screens/MyAccount/Settings/Notification';
import Privacy from './Screens/MyAccount/Settings/Privacy';
import Blocked from './Screens/MyAccount/Settings/Blocked';
import LogoutDialog from './Screens/MyAccount/Settings/SkipLoginDialog';
import ProfileTab from './Screens/MyAccount/MyProfile/ProfileTab';
import EditProfile from './Screens/MyAccount/MyProfile/EditProfile';
import RenderCard from './Screens/ExploreHome/ExploreHomeScreen/RenderCard'


// console.disableYellowBox = true

const Explore = createStackNavigator({ Explore: ExploreHomeScreen, Map: ExploreMapScreen },
    { defaultNavigationOptions: { header: null } });
const Saved = createStackNavigator({ Saved: ExploreSaved, },
    { defaultNavigationOptions: { header: null } });
const MyEvents = createStackNavigator({ MyEvents: ExploreMyEvents },
    { defaultNavigationOptions: { header: null } });
const Chat = createStackNavigator({ Chat: ExploreChat },
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
        HomeNavigator: TabNavigator,
        HomeDetails6:HomeDetails6,
        ExploreNoOfParticipants: ExploreNoOfParticipants,
        HomeScreen: HomeScreen,
        FlagInappropriate: FlagInappropriate,
        VenueReviews: VenueReviews,
        Reviews: Reviews,
        Settlement: Settlement,
        ReviewFlatList: ReviewFlatList,
        RaiseReport: RaiseReport,
        Check: Check,
        RateAndReviewStep1: RateAndReviewStep1,
        RateAndReviewStep2: RateAndReviewStep2,
        RateAndReviewStep3: RateAndReviewStep3,
        CreateEventStep1: CreateEventStep1,
        CreateEventStep2: CreateEventStep2,
        CreateEventStep3: CreateEventStep3,
        CreateEventStep4: CreateEventStep4,
        MyAccount: MyAccount,
        ContactUs: ContactUs,
        MyProfile: MyProfile,
        Payments: Payments,
        PrivacyPolicy: PrivacyPolicy,
        Settings: Settings,
        Incidents: Incidents,
        InviteFrnd: InviteFrnd,
        ExploreEventsUsers: ExploreEventsUsers,
        ResetPassword: ResetPassword,
        NewTabNavigation: NewTabNavigation,
        Notification: Notification,
        Privacy: Privacy,
        Blocked: Blocked,
        ProfileTab: ProfileTab,
        EditProfile: EditProfile,
    },
    {
        initialRouteName: 'HomeNavigator',
        defaultNavigationOptions: ({ navigation }) => ({
            headerBackTitle: null,
            header: null,
        }),
        transitionConfig: transitionConfiguration,
    },
);

const ModalStack = createStackNavigator(
    {
        Main: MainStack,
        AddGuests: AddGuests,
        ForgotPassword: ForgotPassword,
        Card: Card,
        Review: Review,
        Flag: Flag,
        Response: Response,
        LeaveEvent: LeaveEvent,
        RaiseIncident: RaiseIncident,
        RateAndReviewModal: RateAndReviewModal,
        SaveModal: SaveModal,
        CategorySelectModal: CategorySelectModal,
        SortDialog: SortDialog,
        Filter: Filter,
        InfoDialog: InfoDialog,
        InfoForFamily: InfoForFamily,
        ResetDialog: ResetDialog,
        CategorySelectModalPart2: CategorySelectModalPart2,
        PickerView: PickerView,
        PublishModel: PublishModel,
        AddressModal: AddressModal,
        LogoutDialog: LogoutDialog,
        RenderCard:RenderCard,
    },
    {
        mode: 'modal',
        headerMode: 'none',
        transparentCard: true,
        cardStyle: {
            opacity: 1,
            backgroundColor: Colors.transparentBG
        }
    },
);

const SplashStack = createStackNavigator(
    { SplashScreen: SplashScreen },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerBackTitle: null,
            header: null,
        }),
    }

)

const AuthStack = createStackNavigator(
    {
        OnboardingLogin: OnboardingLogin,
        LoginWithEmail: LoginWithEmail,
        SkipLoginDialog: SkipLoginDialog,
        createAccountName: createAccountName,
        createAccountEmail: createAccountEmail,
        createAccountGender: createAccountGender,
        createAccountPassword: createAccountPassword,
        createAccountBirth: createAccountBirth,
    },
    {
        mode: 'modal',
        headerMode: 'none',
        transparentCard: true,
        cardStyle: {
            opacity: 1,
            backgroundColor: Colors.transparentBG
        }
    },
)

export default createAppContainer(createSwitchNavigator(
    {
        SplashStack: SplashStack,
        AuthStack: AuthStack,
        ModalStack: ModalStack
    },
    {
        initialRouteName: 'SplashStack',
        headerMode: 'none',
        defaultNavigationOptions: ({ navigation }) => ({
            headerBackTitle: null,
            header: null,
        }),
    }
));

