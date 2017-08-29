import { TabNavigator } from 'react-navigation'
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

import HomeScreen from './HomeScreen'
  
  class Page1Screen extends Component {
    static navigationOptions = {
      headerTitle: 'page1'
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
      headerTitle: 'page2'
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
      headerTitle: 'user'
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
  
  const MainTabScreen = TabNavigator(
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
      animationEnabled: false,
      tabBarOptions: {
        // 隐藏指示器
        indicatorStyle: {
          height: 0
        }
      }
    }
  )
  
  MainTabScreen.navigationOptions = (props) => {
    console.log('watch', props)
    return {
      headerTitleStyle: {
        color: '#f00'
      }
    }
  }

  export default MainTabScreen