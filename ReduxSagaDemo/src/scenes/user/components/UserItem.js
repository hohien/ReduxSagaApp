
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';

export default class UserItem extends Component {
  render() {
    return (
      <View style={styles.container}>
            <Avatar 
                size = "small"
                rounded
                source = {{uri:this.props.user.picture.thumbnail}}
            />
            <View style={styles.containerMiddle}>
                <Text style = {styles.name}>
                    {this.props.user.name.first.trim()} {this.props.user.name.last.trim()}
                </Text>

                <Text style= {styles.email}>
                    {this.props.user.email.trim()}
                </Text>
            </View>
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:72,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  name:{
    color:"#000000de",
    fontSize:16,
  },
  email:{
    color:"#00000099",
    fontSize:14
  },
  containerMiddle:{
    flex:1,
    justifyContent: 'center',
    paddingLeft: 16,
  }

});
