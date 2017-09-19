import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import { BookDetails } from '../Components'
import BookBottonMenu from './PrivateC/BookBottomMenu'

class BookScreen extends Component {
  render() {
    return (
      <View style={styles.container} >
        <BookDetails />
        <BookBottonMenu />
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