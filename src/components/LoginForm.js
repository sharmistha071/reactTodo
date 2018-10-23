import React, { Component } from 'react';
import {Text, TextInput } from 'react-native';
import firebase from 'firebase';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import Input from './common/Input';
import Spinner from './common/Spinner';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onLoginSuccess() {
    this.setState({
      loading: false,
      error: 'Successfully Signed in',
      email: '',
      password: ''
    });
  }

  onLoginError(e) {
    this.setState({
      loading: false,
      error: 'Authetication Failed',
    });
    console.log(e);
  }

  onButtonPress() {
    console.log('Button Clicked........');
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess.bind(this))
      .catch((e) => {
        console.log('err', e);
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginError.bind(this));
      });
  }

  renderButton() {
    if(this.state.loading){
      return <Spinner size="small" />
    }
    return (
      <Button
        btnText="Log in"
        onPress={this.onButtonPress.bind(this)}
      />
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="user@gmail.com"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="type password"
          />
        </CardSection>

        <Text style={styles.errorStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
};

const styles = {
  errorStyle: {
    color: 'red',
    alignItems: 'center'
  }
};

export default LoginForm;
