import React, { PureComponent } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'
import PropTypes from 'prop-types'

import Dimensions from 'Dimensions'
const { width: WIDTH } = Dimensions.get('window')

const addIcon = require('../images/addbook.jpg')
const demoImg = require('../images/dev/book_cover.jpeg')

class PictureWrap extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={.5}>
          <Image source={demoImg} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.5}>
          <Image source={addIcon} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.5}>
          <Image source={addIcon} style={styles.image} />
        </TouchableOpacity>
      </View>
    )
  }
}



// 书本宽度计算
const bookNum = 3
const bookMargin = 10
const bookWidth = (WIDTH - bookMargin * bookNum * 2) / 3
const bookHeigth = 25 / 18 * bookWidth

const styles = StyleSheet.create({
  image: {
    width: bookWidth,
    height: bookHeigth
  },
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default PictureWrap