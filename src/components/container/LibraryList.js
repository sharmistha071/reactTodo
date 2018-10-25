import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import ListItem from './ListItem';
import { Button } from '../common';

class LibraryList extends Component {
  displayItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    //console.log(this.props);
    return (
      <View>
        <FlatList
          data={this.props.libraries}
          renderItem={this.displayItem}
          keyExtractor={(library) => library.id}
        />
        <View style={{ height: 50 }}>
          <Button btnText="Log Out" onPress={() => firebase.auth().signOut()} />
        </View>
      </View>

    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
