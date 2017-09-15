import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-navigation'

import { StackNavigator } from 'react-navigation'
import PutbookScreen from './PutbookScreen'

// component
import { JReact } from '../Components'

const PutbookStackNavigator = StackNavigator(
  {
    PutbookHomeStack: {
      screen: PutbookScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '传书',
        headerLeft: () => { },
        headerRight: <JReact.HeaderRight text="规则" target={{ type: null }} />
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