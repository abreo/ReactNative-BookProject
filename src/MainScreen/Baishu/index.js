import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-navigation'
import { StackNavigator } from 'react-navigation'

// screen
import HomeScreen from './HomeScreen'
import BookScreen from './BookScreen'

// component
import { JReact } from '../Components'

const BaishuStackNavigator = StackNavigator(
  {
    // 掰书首页
    BaishuHomeStack: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '掰书',
        headerLeft: <JReact.HeaderUser navigate={navigation.navigate} />,
        headerRight: <JReact.HeaderQR navigate={navigation.navigate} />
      })
    },
    // 书本详情页
    BaishuBookStack: {
      screen: BookScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.msg,
        headerLeft: <JReact.HeaderBack {...navigation} target={{ type: 'goBack' }} />,
        headerRight: <JReact.HeaderRight text="..." target={{type: null}}/>
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


export default BaishuStackNavigator