import React, { Component, PureComponent } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity
} from 'react-native'
import { StackNavigator } from 'react-navigation'

// screen引入
import IntegralScreen from './IntegralScreen'
import WithdrawScreen from './WithdrawScreen'
import RuleScreen from './RuleScreen'

// component引入
import { JReact } from '../Components'
// import HeaderBack from '../Components/HeaderBack'
// import HeaderRight from '../Components/HeaderRight'


const IntegralStackNavigator = StackNavigator(
  {
    IntegralIntegralStack: {
      screen: IntegralScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '积分',
        headerLeft: <JReact.HeaderBack {...navigation} target={{ type: 'navigate', value: "MainDrawer" }} />,
        headerRight: <JReact.HeaderRight {...navigation} target={{type: 'navigate', value: 'IntegralRuleStack'}} text="规则"/>,
      })
    },
    IntegralWithdrawStack: {
      screen: WithdrawScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '积分变现',
        headerLeft: <JReact.HeaderBack {...navigation} target={{ type: 'goBack' }} />,
        headerRight: () => { },
      })
    },
    IntegralRuleStack: {
      screen: RuleScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '积分规则',
        headerLeft: <JReact.HeaderBack {...navigation} target={{ type: 'goBack' }} />,
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

export default IntegralStackNavigator