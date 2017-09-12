import React, { PureComponent } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native'

import Dimensions from 'Dimensions'
const { width: WIDTH } = Dimensions.get('window')

class SetScreen extends PureComponent {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>个人设置</Text>
        <TouchableOpacity activeOpacity={.5} onPress={() => navigate('SetAvatarStack')}>
          <Text>修改头像</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})



export default SetScreen