/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'

// tab

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>
          Home
        </Text>
      </View>
    )
  }
}

class Page1Screen extends Component {
  render() {
    return (
      <View>
        <Text>
          Test
        </Text>
      </View>
    )
  }
}

class Page2Screen extends Component {
  render() {
    return (
      <View>
        <Text>
          Home
        </Text>
      </View>
    )
  }
}

class UserScreen extends Component {
  render() {
    return (
      <View>
        <Text>
          User
        </Text>
      </View>
    )
  }
}

const App = TabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    User: {
      screen: UserScreen
    },
    Page1: {
      screen: Page1Screen
    },
    page2: {
      screen: Page2Screen
    }
  },
  {
    // tab位置——下
    tabBarPosition: 'bottom',
    // 组织标签滑动
    swipeEnabled: false,
    tabBarOptions: {
      // 隐藏指示器
      indicatorStyle: {
        height: 0
      }
    }
  }
)

export default App
