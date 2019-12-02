import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../SplashScreen/SplashScreen'
import LoginScreen from "../LoginScreen/LoginScreen.js";
import {createAccountName} from '../SignUpScreen/createAccountName.js'
import {createAccountEmail} from '../SignUpScreen/createAccountEmail.js'
import createAccountGender from '../SignUpScreen/createAccountGender.js'
import {createAccountPassword} from '../SignUpScreen/createAccountPassword.js'
import createAccountBirth from '../SignUpScreen/CreateAccountBirth.js'

const AppNavigator = createStackNavigator({
    LoginScreen:{screen:LoginScreen},
    createAccountName:{screen:createAccountName, navigationOptions:{header:null}},
    createAccountEmail:{screen:createAccountEmail, navigationOptions:{header:null}},
    createAccountGender:{screen:createAccountGender, navigationOptions:{header:null}},
    createAccountBirth:{screen:createAccountBirth, navigationOptions:{header:null}},
    createAccountPassword:{screen:createAccountPassword, navigationOptions:{header:null}},
    SplashScreen: {screen: SplashScreen,navigationOptions: {header: null,}},
},
    {
        initialRouteName: 'createAccountName',
        defaultNavigationOptions: ({ navigation }) => ({
            headerBackTitle: null,
        }),
    }
);
export default createAppContainer(AppNavigator);