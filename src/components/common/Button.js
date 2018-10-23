import React, { Component  } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const {buttonStyle, textStyle} = styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
      <Text style={textStyle}>{props.btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = {
   buttonStyle: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    borderColor: '#007aff',
    borderRadius: 5,
    borderWidth: 1
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5
  }
}

export default Button;
