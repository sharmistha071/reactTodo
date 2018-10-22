import React, { Component } from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import Header from './components/common/Header';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // const config = ;
    // const firebase = require("firebase");
    firebase.initializeApp({
      apiKey: "AIzaSyClojAdu2-rp8puM0ZTXvBytYMwE-AReuA",
      authDomain: "reacttodo-a2336.firebaseapp.com",
      databaseURL: "https://reacttodo-a2336.firebaseio.com",
      projectId: "reacttodo-a2336",
      storageBucket: "reacttodo-a2336.appspot.com",
      messagingSenderId: "25830847225"
    });
  }

  render() {
    return (
      <View>
        <Header headerText={'Select a Topic'} />
        <LoginForm />
      </View>
    );
  }
};

export default App;
