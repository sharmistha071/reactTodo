import React, { Component } from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import Header from './components/common/Header';
import LoginForm from './components/LoginForm';
import Button from './components/common/Button';
import Spinner from './components/common/Spinner';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyClojAdu2-rp8puM0ZTXvBytYMwE-AReuA",
      authDomain: "reacttodo-a2336.firebaseapp.com",
      databaseURL: "https://reacttodo-a2336.firebaseio.com",
      projectId: "reacttodo-a2336",
      storageBucket: "reacttodo-a2336.appspot.com",
      messagingSenderId: "25830847225"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      }else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    // console.log(this.state.loggedIn);
    // if(this.state.loggedIn){
    //
    // }

    switch(this.state.loggedIn) {
      case true:
        return <Button btnText="Log Out" onPress={'hello'}></Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText={'Select a Topic'} />
        { this.renderContent() }
      </View>
    );
  }
};

export default App;
