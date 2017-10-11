import React, { Component } from 'react'
import {
  StyleSheet,
  Image
} from 'react-native'

import { StackNavigator } from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import JReact from './jreact-pull'

// tab
import Tab from './Tab'
// 书籍详情
import BookDetails from './BookDetails/BookDetails'
// 编辑书籍
import BookEditor from './BookEditor/BookEditor'

// 根据index设置title
const setTitle = ({ index }) => {
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
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: setTitle(navigation.state),
          headerLeft: <JReact.HeaderUser />,
          headerRight: <JReact.HeaderQR />
        }
      }
    },
    BookDetailsStack: {
      screen: BookDetails,
      navigationOptions: ({ navigation }) => {
        return {
          // 书名
          headerTitle: navigation.state.params.msg
        }
      }
    },
    BookEditorStack: {
      screen: BookEditor,
      navigationOptios: ({ navigation }) => {
        return {
          headerTitle: '添加传书'
        }
      }
    }
  },
  {
    headerMode: 'screen',
    // 安卓定制，模拟ios行为
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),
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