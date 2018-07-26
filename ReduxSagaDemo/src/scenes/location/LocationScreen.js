import React, { Component } from 'react'
import { View, Text,Image ,StyleSheet} from 'react-native'

import { connect } from 'react-redux'
import {Icon} from 'react-native-elements';
class LocationScreen extends Component {
    static navigationOptions = ({navigation}) =>{
        let tabBarLabel ="Location";
        let tabBarIcon = ()=>(<Image style={{width:32,height:32}} source={require('../../drawables/icons/ic_placeholder_32.png')}/>);
        return {
          tabBarIcon,tabBarLabel
      }
      }
  render() {
    return (
      <View style={styles.container}>
        <Text> Location Screen </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"green"
    }
})

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationScreen)
