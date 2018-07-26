
import React, {Component} from 'react';
import {Platform, Image,StyleSheet, Text, SafeAreaView} from 'react-native';
import {Icon} from 'react-native-elements';
import UserFlatList from './components/UserFlatList';
import SearchUserBar from './components/SearchUserBar';

import { connect } from 'react-redux';


class UsersScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container} >
        <SearchUserBar/>
        <UserFlatList/> 
      </SafeAreaView>
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