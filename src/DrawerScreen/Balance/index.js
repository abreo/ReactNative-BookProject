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
import WithdrawScreen from './WithdrawScreen'
import BankScreen from './BankScreen'

// component引入
// import HeaderBack from '../Components/HeaderBack'
import { JReact } from '../Components'

const BalanceStackNavigator = StackNavigator(
  {
    BalanceBalanceStack: {
      screen: BalanceScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '余额',
        headerLeft: <JReact.HeaderBack {...navigation} target={{ type: 'navigate', value: "MainDrawer" }} />,
        headerRight: () => { },
      })
    },
    BalanceWithdrawStack: {
      screen: WithdrawScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '提现',
        headerLeft: <JReact.HeaderBack {...navigation} target={{ type: 'goBack', value: null }} />,
        headerRight: () => { },
      })
    },
    BalanceBankStack: {
      screen: BankScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '银行卡',
        headerLeft: <JReact.HeaderBack {...navigation} target={{ type: 'goBack', value: null }} />,
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