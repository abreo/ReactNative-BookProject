import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native'


class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: '掰书'
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>
          this is home
        </Text>
        <View style={{ width: 50 }}>
          <Button title="ON" onPress={() => navigate('DrawerOpen')} />
        </View>
      </View>
    )
  }
}


class Page1Screen extends Component {
  static navigationOptions = {
    headerTitle: '沟通'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Test
          </Text>
      </View>
    )
  }
}

class Page2Screen extends Component {
  static navigationOptions = {
    headerTitle: '书架'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Home
          </Text>
      </View>
    )
  }
}

class UserScreen extends Component {
  static navigationOptions = {
    headerTitle: '传书'
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>
          User
          </Text>
        <Button title='去下一层' onPress={() => navigate('Test')}>click me</Button>
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


const MainTabScreenT = TabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Page1: {
      screen: Page1Screen
    },
    page2: {
      screen: Page2Screen
    },
    User: {
      screen: UserScreen
    }
  },
  {
    // tab位置——下
    tabBarPosition: 'bottom',
    // 取消滑动切换
    swipeEnabled: false,
    // 安卓动画取消
    // animationEnabled: false,
    // 安卓tab样式调整
    tabBarOptions: {
      // 隐藏指示器
      indicatorStyle: {
        height: 0
      },
      activeTintColor: '#336',
      inactiveTintColor: '#558',
      style: {
        backgroundColor: '#fff'
      }
    }
  }
)


// DrawerNavigator

import TestPage from './pages/TwoScreen'

const AppRouter = DrawerNavigator(
  {
    Main: {
      screen: MainTabScreenT
    },
    Test: {
      screen: TestPage
    }
  }
)

export default AppRouter