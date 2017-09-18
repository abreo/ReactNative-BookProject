import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-navigation'

import { StackNavigator } from 'react-navigation'
import PutbookScreen from './PutbookScreen'
import AddbookScreen from './AddbookScreen'

// component
import { JReact } from '../Components'

const PutbookStackNavigator = StackNavigator(
  {
    PutbookPutbookStack: {
      screen: PutbookScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '传书',
        headerLeft: () => { },
        headerRight: <JReact.HeaderRight text="规则" target={{ type: null }} />
      })
    },
    PutbookAddbookStack: {
      screen: AddbookScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '添加传书',
        headerLeft: <JReact.HeaderBack {...navigation} target={{ type: 'goBack' }} />,
        headerRight: () => { }
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

export default PutbookStackNavigator