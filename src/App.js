import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { Header, Spinner } from './components/common';
import LoginForm from './components/container/LoginForm';
import LibraryList from './components/container/LibraryList';
import configureStore from './configStore';

const store = configureStore();

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyClojAdu2-rp8puM0ZTXvBytYMwE-AReuA',
      authDomain: 'reacttodo-a2336.firebaseapp.com',
      databaseURL: 'https://reacttodo-a2336.firebaseio.com',
      projectId: 'reacttodo-a2336',
      storageBucket: 'reacttodo-a2336.appspot.com',
      messagingSenderId: '25830847225'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        // return (
        //   <View style={{ height: 50 }}>
        //     <Button btnText="Log Out" onPress={() => firebase.auth().signOut()} />
        //   </View>
        // );
        return <LibraryList />;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View>
          <Header headerText={'Select a Topic'} />
          { this.renderContent() }
        </View>
      </Provider>
    );
  }
}

export default App;
