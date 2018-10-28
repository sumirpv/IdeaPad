import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import LoginForm from '../src/components/login-form';
import Header from '../src/components/header';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../src/reducers';
import ReduxThunk from 'redux-thunk';

export default class HomeScreen extends React.Component {
  render() {
    const store = createStore(reducers , {} , applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View >
          <Header text='Login' />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },

});
