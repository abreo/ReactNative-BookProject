import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native'

// 组件引入
import { HeaderUser, HeaderQR } from '../common'

class HomeScreen extends Component {
  static navigationOptions = (props) => {
    // console.log(props)
    return {
      headerLeft: <HeaderUser {...props}/>,
      headerRight: <HeaderQR {...props}/>
    }
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>掰书</Text>
        <TouchableOpacity onPress={() => navigate('DrawerOpen')}>
          <Text>弹出侧边栏</Text>
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


export default HomeScreen