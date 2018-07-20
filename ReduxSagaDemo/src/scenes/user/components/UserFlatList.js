

import React, {Component} from 'react';
import {Platform,FlatList, StyleSheet, Text, View} from 'react-native';

import UserItem from './UserItem';
import {
    ListItem
} from 'react-native-elements'

import {connect} from 'react-redux';

class UserFlatList extends Component {

    render() {
        return (
            <FlatList
                style ={styles.flatList}
                renderItem ={({item,index})=> {
                    return (
                        <UserItem 
                            user = {item}
                            index = {index}
                        />
                    );
                }}
                data ={this.props.userData}
                keyExtractor ={(item,index)=> item.id.value}
            />
        );
  }
}

const styles = StyleSheet.create({
    flatList: {
        flex: 100,
        backgroundColor: "white",
    },
});

function mapStateToProps (state){
    return {
        userData:state.searchingUserResult,
    }
}
export default connect(mapStateToProps) (UserFlatList);