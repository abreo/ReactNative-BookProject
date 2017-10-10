import React, { Component } from 'react'
import {
  StyleSheet,
  Image
} from 'react-native'

import { StackNavigator } from 'react-navigation'

// tab
import Tab from './Tab'
// 书籍详情
import BookDetails from './BookDetails/BookDetails'
// 编辑书籍
import BookEditor from './BookEditor/BookEditor'

// 根据index设置title
const setTitle = ({index}) => {
  let title = ''
  switch (index) {
    case 0: title = '掰书'
      break
    case 1: title = '沟通'
      break
    case 2: title = '书架'
      break
    case 3: title = '传书'
      break
  }
  return title
}

const MainStackNavigator = StackNavigator(
  {
    TabStack: {
      screen: Tab,
      navigationOptions: ({ navigation: {state} }) => {
        return {
          headerTitle: setTitle(state)
        }
      }
    },
    BookDetailsStack: {
      screen: BookDetails,
      navigationOptions: ({navigation}) => {
        return {
          // 书名
          headerTitle: navigation.state.params.msg
        }
      }
    },
    BookEditorStack: {
      screen: BookEditor,
      navigationOptios: ({navigation}) => {
        return {
          headerTitle: '添加传书'
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
        alignSelf: 'center',
      },
      headerStyle: {
        height: 48,
        borderBottomWidth: .3,
        borderBottomColor: '#ccc'
      }
    }
  }
)

export default MainStackNavigator