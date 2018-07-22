
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import UserFlatList from './components/UserFlatList';
import SearchUserBar from './components/SearchUserBar';

import { connect } from 'react-redux';

class UsersScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <SearchUserBar />
        <UserFlatList /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

});

export default connect(null,null)(UsersScreen);