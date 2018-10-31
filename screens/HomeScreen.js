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
import firebase from 'firebase';



export default class HomeScreen extends React.Component {
  componentDidMount() {
    const config = {
        apiKey: "AIzaSyDBGLSO6Do4yare2S7MxtqQ3v63Tq7pjo8",
        authDomain: "my-ideapad.firebaseapp.com",
        databaseURL: "https://my-ideapad.firebaseio.com",
        projectId: "my-ideapad",
        storageBucket: "my-ideapad.appspot.com",
        messagingSenderId: "702893693507"
    };
    firebase.initializeApp(config);
}

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
