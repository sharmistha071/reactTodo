import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../common';
import * as actions from '../../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    if (this.props.library.item.id === this.props.selectedLibraryId) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{this.props.library.item.description}</Text>
        </CardSection>
      );
    }
  }
  render() {
    console.log(this.props);
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectedLibrary(this.props.library.item.id)}
      >
        <View>
          <CardSection>
            <Text>{this.props.library.item.title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId }
};

export default connect(mapStateToProps, actions)(ListItem);  //(mapStateToProps, actions)
