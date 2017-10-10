import React, { Component } from 'react'
import {
  StyleSheet,
  Image
} from 'react-native'

// 加载tab相应图标
const tabIcons = {
  baishu: [require('./images/icons/baishu.png'), require('./images/icons/baishu_select.png')],
  chat: [require('./images/icons/chat.png'), require('./images/icons/chat_select.png')],
  bookrack: [require('./images/icons/bookrack.png'), require('./images/icons/bookrack_select.png')],
  putbook: [require('./images/icons/putbook.png'), require('./images/icons/putbook_select.png')]
}

const renderTabIcon = function (e, type) {
  return (
    <Image source={tabIcons[type][Number(e.focused)]} style={styles.icon} />
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
})

import { TabNavigator } from 'react-navigation'
import BaishuScreen from './Baishu'
import ChatScreen from './Chat'
import BookrackScreen from './Bookrack'
import PutbookScreen from './Putbook'


const Tab = TabNavigator(
  {
    MainBaishuTab: {
      screen: BaishuScreen,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: '掰书',
          tabBarIcon: (e) => renderTabIcon(e, 'baishu')
        }
      }
    },
    MainChatTab: {
      screen: ChatScreen,
      navigationOptions: {
        tabBarLabel: '沟通',
        tabBarIcon: (e) => renderTabIcon(e, 'chat')
      }
    },
    MainBookrackTab: {
      screen: BookrackScreen,
      navigationOptions: {
        tabBarLabel: '书架',
        tabBarIcon: (e) => renderTabIcon(e, 'bookrack')
      }
    },
    MainPutbookTab: {
      screen: PutbookScreen,
      navigationOptions: ({ navigation: { state } }) => ({
        tabBarLabel: '传书',
        tabBarIcon: (e) => renderTabIcon(e, 'putbook')
      })
    }
  },
  {
    lazy: true,
    // 测试路由
    initialRouteName: 'MainBaishuTab',
    // tab定位于下方
    tabBarPosition: 'bottom',
    // 取消滑动切换
    swipeEnabled: false,
    // 安卓动画取消
    animationEnabled: false,
    tabBarOptions: {
      // 显示icon
      showIcon: true,
      // 按压不透明度
      pressOpacity: 0.5,
      // 隐藏指示器
      indicatorStyle: {
        height: 0
      },
      // 默认标签和图标颜色
      inactiveTintColor: '#558',
      // 活动标签和图标颜色
      activeTintColor: '#336',
      style: {
        height: 52,
        backgroundColor: '#fff',
        borderTopWidth: 0.5,
        borderTopColor: '#bbb',
        // justifyContent: 'center'
      },
      iconStyle: {
        marginTop: -2
      },
      labelStyle: {
        marginTop: -2,
        fontSize: 12
      }
    }
  }
)

export default Tab