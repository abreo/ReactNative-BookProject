import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import HomeList from './Components/HomeList'
import HomeSearch from './Components/HomeSearch'

class Baishu extends Component {
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


export default Baishu