import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

export class Toolbar extends Component {


  render() {
    return (
      <View>
        <Text> prop </Text>
      </View>
    )
  }
}
const styles =StyleSheet.create({
    container:{
        
    }
});

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
