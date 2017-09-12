import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

// 公共组件
import { HeaderUser, HeaderQR } from '../Components'
// 模块组件
import { HomeList, HomeSearch } from '../Components/baishu'


class HomeScreen extends Component {
  static navigationOptions = (props) => {
    return {
      headerLeft: <HeaderUser {...props} />,
      headerRight: <HeaderQR {...props} />
    }
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <HomeSearch />
        <HomeList navigate={navigate} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})


export default HomeScreen