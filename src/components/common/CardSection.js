import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  const { cardSection } = styles;
  return (
    <View style={cardSection}>
      {props.children}
    </View>
  );
};

const styles = {
  cardSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 1
  }
};

export { CardSection };
