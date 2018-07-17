
import React, { Component } from 'react';
import {View,Dimensions} from 'react-native';
import {fetchingUsersRequest} from '../../../actions/FetchingUserAction';

import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import {searchUsersRequest}from '../../../actions/SearchUsersAction';

class SearchUserBar extends Component {

    _onChangeText = (text)=>{
        this.props.searchUsersRequest(text);
    }
    componentDidMount(){
        this.props.fetchingUsersRequest("none");
    }
    render() {
        return (
            <View style ={{width:Dimensions.get("window").width}}>
                <SearchBar
                   
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

const mapStateToProps = (state) => ({
    query:state.searchUserQuery,
    isSearchingUsers: state.isSearchingUsers
})


export default connect(mapStateToProps, {searchUsersRequest,fetchingUsersRequest})(SearchUserBar)
