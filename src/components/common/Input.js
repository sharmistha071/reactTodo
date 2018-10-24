import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = (props) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{props.label}</Text>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        autocorrect={false}
        style={inputStyle}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    height: 80,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
