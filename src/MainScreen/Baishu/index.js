import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-navigation'


import { StackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'

const BaishuStackNavigator = StackNavigator(
  {
    // 掰书首页
    BaishuHomeStack: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: '掰书'
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