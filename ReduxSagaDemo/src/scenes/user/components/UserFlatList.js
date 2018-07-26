

import React, {Component} from 'react';
import {Platform,RefreshControl,FlatList, StyleSheet, Text, View} from 'react-native';

import UserItem from './UserItem';

import {withNavigation} from 'react-navigation';

import {fetchingUsersRequest} from '../../../actions/FetchingUserAction';


import {connect} from 'react-redux';

class UserFlatList extends Component {

    _onRefresh = ()=>{
        this.props.fetchingUsersRequest();
    }

    _onUserItemPress =(user,index)=>{
        
        this.props.navigation.navigate("UserDetailScreen",{user,index});
    }
    
    componentDidMount(){
        
        this.props.fetchingUsersRequest();
    }
    
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style ={styles.flatList}
                    renderItem ={({item,index})=> {
                        return (
                            <UserItem 
                                onUserItemPress = {this._onUserItemPress}
                                user = {item}
                                index = {index}
                            />
                        );
                    }}
                    data ={this.props.userData}
                    keyExtractor ={(item,index)=> index.toString()}
                    refreshControl = {
                        <RefreshControl
                            onRefresh ={this._onRefresh}
                            refreshing ={this.props.isRefreshing}/>
                    }
                />
            </View>
            
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    flatList:{
        flex:1
    },

});

function mapStateToProps (state){
    return {
        userData    : state.searchUserResult,
        isRefreshing: state.isFetchingUsers,

    }
}
export default connect(mapStateToProps,{fetchingUsersRequest}) (withNavigation(UserFlatList));