import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity
} from 'react-native'

const userAvatar = require('./images/dev/user.jpg')
const robotAvatar = require('./images/dev/robot.jpg')

import JReact from '../jreact-pull'

class Chat extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <JReact.IntervalSpace />

        <View>
          <View style={styles.robotWrap}>
            <Image source={robotAvatar} style={{ width: 50, height: 50 }} />
            <View>
              <Text>掰书小秘书</Text>
              <Text>感谢使用掰书，分享存书，共享书香中国。</Text>
            </View>
          </View>

        </View>

        <JReact.IntervalSpace />
        <View></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  robotWrap: {
    flexDirection: 'row'
  }
})


export default Chat