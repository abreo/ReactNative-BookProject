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
import FaqScreen from './FaqScreen'
import SuggestScreen from './SuggestScreen'

// component引入
import { JReact } from '../Components'


const FaqStackNavigator = StackNavigator(
  {
    FaqFaqStack: {
      screen: FaqScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '常见问题',
        headerLeft: <JReact.HeaderBack {...navigation} target={{ type: 'navigate', value: "MainDrawer" }} />,
        headerRight: <JReact.HeaderRight {...navigation} target={{ type: 'navigate', value: 'FaqSuggestStack' }} text="反馈" />,
      })
    },
    FaqSuggestStack: {
      screen: SuggestScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '反馈',
        headerLeft: <JReact.HeaderBack {...navigation} target={{ type: 'navigate', value: "FaqFaqStack" }} />,
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

export default FaqStackNavigator