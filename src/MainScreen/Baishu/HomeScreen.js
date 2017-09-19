import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import HomeList from './PrivateC/HomeList'
import HomeSearch from './PrivateC/HomeSearch'

class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <HomeSearch />
        <HomeList navigate={navigate} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default HomeScreen