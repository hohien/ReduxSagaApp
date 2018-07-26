import React, { Component } from 'react'
import { View, Text ,StyleSheet} from 'react-native'

import { connect } from 'react-redux'

import {Image} from 'react-native'

import {Icon} from 'react-native-elements';
class IdeaScreen extends Component {
    static navigationOptions = ({navigation}) =>{
        let tabBarLabel ="Idea";
        let tabBarIcon = ()=>(<Image style={{width:32,height:32}} source={require('../../drawables/icons/ic_idea_32.png')}/>);
        return {
            tabBarIcon,tabBarLabel
        }
      }
  render() {
    return (
      <View style={styles.container}>
        <Text> IdeaScreen </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"blue"
    }
})

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaScreen)
