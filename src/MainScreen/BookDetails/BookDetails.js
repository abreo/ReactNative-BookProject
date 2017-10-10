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

import Details from './Components/Details'
import MenuBaishu from './Components/MenuBaishu'
import MenuPutbook from './Components/MenuPutbook'

class BookDetails extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Details />
        <MenuBaishu />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default BookDetails