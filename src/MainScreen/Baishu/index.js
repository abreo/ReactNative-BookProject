import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-navigation'


import { StackNavigator } from 'react-navigation'

// screen
import HomeScreen from './HomeScreen'
import BookScreen from './BookScreen'

const BaishuStackNavigator = StackNavigator(
  {
    // 掰书首页
    BaishuHomeStack: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: '掰书'
      }
    },
    // 书本详情页
    BaishuBookStack: {
      screen: BookScreen,
      navigationOptions: ({ navigation: { state } }) => {
        console.log(state)
        return {
          headerTitle: state.params.msg
        }
      }
    }
  },
  {
    navigationOptions: {
      headerTitleStyle: {
        // 字体粗细
        fontWeight: 'normal',
        // 标题居中——安卓
        alignSelf: 'center'
      }
    }
  }
)


export default BaishuStackNavigator