import React, { PureComponent } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native'

import Dimensions from 'Dimensions'
const { width: WIDTH } = Dimensions.get('window')

class AddBook extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.itemWrap}></View>
        <View style={styles.itemWrap}></View>
        <View style={styles.itemWrap}></View>
        <View style={styles.itemWrap}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  itemWrap: {
    height: 80,
    borderWidth: 1
  }
})

export default AddBook