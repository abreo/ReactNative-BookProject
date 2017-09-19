import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native'
import Dimensions from 'Dimensions'
const { width: WIDTH } = Dimensions.get('window')

// img
const searchIcon = require('../images/search.png')

class BaishuList extends Component {
  render() {
    return (
      <View style={styles.searchWrap}>
        <View style={styles.search}>
          <View style={styles.inputWrap}>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.searchInput} />
          </View>
          <View>
            <Image source={searchIcon} style={styles.searchIcon} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchWrap: {
    width: WIDTH,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4
  },
  searchInput: {
    height: 30,
    width: WIDTH - 40,
    padding: 0,
    paddingRight: 6,
    paddingLeft: 6
  },
  searchIcon: {
    width: 22,
    height: 22,
    marginRight: 8
  }
})

export default BaishuList