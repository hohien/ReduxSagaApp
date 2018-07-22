
import React, { Component } from 'react';
import {View,Dimensions} from 'react-native';


import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';

import {searchUsersRequest}from '../../../actions/SearchUsersAction';
import {sortingUsersRequest, INCREASE} from '../../../actions/SortingUsersActions';

class SearchUserBar extends Component {

    _onChangeText = (text)=>{
        this.props.searchUsersRequest(text);
    }

    render() {
        return (
            <View style ={{width:Dimensions.get("window").width}}>
                <SearchBar
                    lightTheme
                    loadingIcon = { { color: '#86939e' }}
                    clearIcon
                    showLoadingIcon ={this.props.isSearchingUsers}
                    placeholder ={"Search user name or email ..."}
                    inputStyle ={{backgroundColor:"white"}}
                    containerStyle ={{backgroundColor:"white"}}
                    value = {this.props.query}
                    onChangeText ={this._onChangeText}
                />                
            </View>

        );
  }
}

const mapStateToProps = (state) => {
    return {
        query:state.searchUserQuery,
        isSearchingUsers: state.isSearchingUsers,
    }

};


export default connect(mapStateToProps, {sortingUsersRequest,searchUsersRequest})(SearchUserBar);
