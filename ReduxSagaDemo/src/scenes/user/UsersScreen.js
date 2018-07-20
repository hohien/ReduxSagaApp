
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import UserFlatList from './components/UserFlatList';
import SearchUserBar from './components/SearchUserBar';
import {fetchingUsersRequest} from '../../actions/FetchingUserAction';
import { connect } from 'react-redux';
class UsersScreen extends Component {

  componentDidMount(){
    this.props.fetchingUsersRequest();
  }
  
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
const mapStateToProps = (state) => {
  return {};
};

export default  connect(mapStateToProps,{fetchingUsersRequest}) (UsersScreen);