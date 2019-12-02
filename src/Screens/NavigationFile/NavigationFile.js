import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from '../SplashScreen/SplashScreen'
import {createAccountName} from '../SignUpScreen/createAccountName.js'
import {createAccountEmail} from '../SignUpScreen/createAccountEmail.js'
import createAccountGender from '../SignUpScreen/createAccountGender.js'
import createAccountPassword from '../SignUpScreen/createAccountPassword.js'
import createAccountBirth from '../SignUpScreen/CreateAccountBirth.js'
import HomeDetails6 from '../ExploreHome/HomeDetails6';

const AppNavigator = createStackNavigator({
    createAccountName:{screen:createAccountName, navigationOptions:{header:null}},
    createAccountEmail:{screen:createAccountEmail, navigationOptions:{header:null}},
    createAccountGender:{screen:createAccountGender, navigationOptions:{header:null}},
    createAccountBirth:{screen:createAccountBirth, navigationOptions:{header:null}},
    createAccountPassword:{screen:createAccountPassword, navigationOptions:{header:null}},
    SplashScreen: {screen: SplashScreen, navigationOptions: {header: null,}},
    HomeDetails6: {screen: HomeDetails6, navigationOptions: {header: null,}},
},
    {
        initialRouteName: 'SplashScreen',
        defaultNavigationOptions: ({ navigation }) => ({
            headerBackTitle: null,
        }),
    }
);
export default createAppContainer(AppNavigator);