import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20},
    shadowOpacity: 0.5,
    elavation: 2
  },
  textStyle: {
    fontSize: 20,
  }
}

export default Header;
