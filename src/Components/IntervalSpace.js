import React, { PureComponent } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import PropTypes from 'prop-types'

import Dimensions from 'Dimensions'
const { width: WIDTH } = Dimensions.get('window')

class IntervalSpace extends PureComponent {
  static propTypes = {
    text: PropTypes.string
  }
  render() {
    const { text = '' } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    padding: 10,
    // borderWidth: 1,
  },
  text: {
    color: '#333'
  }
})

export default IntervalSpace