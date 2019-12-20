import React, { Component } from 'react';
import { Provider } from "react-redux";
import Navigation  from './src/Navigation'
// import RootNavigator from './src/RootNavigator'
import store from './src/Store/Reducer/index'

export default class createAccountBirthMain extends Component {
  render() {
    return (
        <Provider store={store}>
          <Navigation/>
            {/* <RootNavigator/> */}
        </Provider>
    );
  }
}