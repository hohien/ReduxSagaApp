

import React, {Component} from 'react';
import {Platform,RefreshControl,FlatList, StyleSheet, Text, View} from 'react-native';

import UserItem from './UserItem';
import {
    ListItem
} from 'react-native-elements'

import {fetchingUsersRequest} from '../../../actions/FetchingUserAction';

import {connect} from 'react-redux';

class UserFlatList extends Component {

    _onRefresh = ()=>{
        this.props.fetchingUsersRequest();
    }

    _onPressUserItem = (user,index)=>{
        this.props.navigation.navigate()
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
                                onPressUserItem = {this._onPressUserItem}
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
    quality:{
        alignItems: 'center',
    }
});

function mapStateToProps (state){
    return {
        userData    : state.searchUserResult,
        isRefreshing: state.isFetchingUsers
    }
}
export default connect(mapStateToProps,{fetchingUsersRequest}) (UserFlatList);