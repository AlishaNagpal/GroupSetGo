import React, { Component } from 'react';
import { Provider } from "react-redux";
// import NavigationFile from './src/Screens/NavigationFile/NavigationFile'
import RootNavigator from './src/RootNavigator'
import store from './src/Store/Reducer/index'

export default class createAccountBirthMain extends Component {
  render() {
    return (
        <Provider store={store}>
            {/* <NavigationFile /> */}
            <RootNavigator/>
        </Provider>
    );
  }
}
