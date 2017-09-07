import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import { StackNavigator } from 'react-navigation'

// screen引入
import BalanceScreen from './BalanceScreen'

// component引入
import HeaderBack from '../Components/HeaderBack'

const BalanceStackNavigator = StackNavigator(
  {
    BalanceBalanceStack: {
      screen: BalanceScreen,
      navigationOptions: (props) => ({
        headerTitle: '余额',
        headerLeft: <HeaderBack {...props} />,
        headerRight: () => { },
      })
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

export default BalanceStackNavigator