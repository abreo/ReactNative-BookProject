import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native'

class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>沟通</Text>
        <TouchableOpacity onPress={() => navigate('Tow')}>
          <Text>跳转进入</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default HomeScreen