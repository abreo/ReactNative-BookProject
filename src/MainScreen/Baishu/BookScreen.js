import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import { BookDetails } from '../Components'
import BookBottomMenu from './PrivateC/BookBottomMenu'

class BookScreen extends Component {
  render() {
    return (
      <View style={styles.container} >
        <BookDetails />
        <BookBottomMenu />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default BookScreen