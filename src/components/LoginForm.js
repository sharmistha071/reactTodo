import React, { Component } from 'react';
import {Text, TextInput } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import Input from './common/Input';

class LoginForm extends Component {
  state = { email: '', password: ''};
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="user@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={{ height: 20, width: 100}}
            placeholder="Email"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={{ height: 20, width: 100}}
            placeholder="password"
          />
        </CardSection>
        <CardSection>
          <Button btnText="Log in"/>
        </CardSection>
      </Card>
    );
  }
};

export default LoginForm;
