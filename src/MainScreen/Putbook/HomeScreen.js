import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native'

class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: '传书'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>传书</Text>
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