import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native'

import { JReact } from '../Components'
import { AddBook } from '../Components/putbook'

class PutbookScreen extends Component {
  static navigationOptions = {
    headerTitle: '传书'
  }
  render() {
    return (
      <View style={styles.container}>
        <JReact.IntervalSpace text="添加传书" />
        <AddBook />
        <JReact.IntervalSpace text="我的传书" />
        <Text>传书</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
})


export default PutbookScreen