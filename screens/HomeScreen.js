import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import config from '../config'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../src/reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import AppNavigator from '../src/navigation';

export default class HomeScreen extends React.Component {
  componentDidMount() {
  firebase.initializeApp(config);

}

  render() {
    const store = createStore(reducers , {} , applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },

});
