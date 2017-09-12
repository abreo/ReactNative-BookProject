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
import SetScreen from './SetScreen'
import AvatarScreen from './AvatarScreen'

// component引入
import HeaderBack from '../Components/HeaderBack'
// import HeaderRight from '../Components/HeaderRight'


const SetStackNavigator = StackNavigator(
  {
    SetSetStack: {
      screen: SetScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '个人设置',
        headerLeft: <HeaderBack {...navigation} target={{ type: 'navigate', value: "MainDrawer" }} />,
        headerRight: () => {},
      })
    },
    SetAvatarStack: {
      screen: AvatarScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '编辑头像',
        headerLeft: <HeaderBack {...navigation} target={{ type: 'navigate', value: "SetSetStack" }} />,
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

export default SetStackNavigator