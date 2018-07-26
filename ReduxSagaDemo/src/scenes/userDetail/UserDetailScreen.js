import React, { Component } from 'react'
import { View, Text ,StyleSheet} from 'react-native'

import { connect } from 'react-redux'

class UserDetailScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text> prop </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"yellow"
    }
})

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailScreen)
