import React, { Component } from 'react'
import {
  StyleSheet,
  Image
} from 'react-native'

// 加载tab相应图标
const tabIcons = {
  baishu: [require('./icon/baishu.png'), require('./icon/baishu_select.png')],
  chat: [require('./icon/chat.png'), require('./icon/chat_select.png')],
  bookrack: [require('./icon/bookrack.png'), require('./icon/bookrack_select.png')],
  putbook: [require('./icon/putbook.png'), require('./icon/putbook_select.png')]
}

const renderTabIcon = function (e, type) {
  return (
    <Image source={tabIcons[type][Number(e.focused)]} style={styles.icon} />
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

//

import { TabNavigator } from 'react-navigation'
import BaishuStackNavigator from './Baishu'
import ChatStackNavigator from './Chat'
import BookrackStackNavigator from './Bookrack'
import PutbookStackNavigator from './Putbook'


const MainTab = TabNavigator(
  {
    MainBaishuTab: {
      screen: BaishuStackNavigator,
      navigationOptions: {
        tabBarLabel: '掰书',
        tabBarIcon: (e) => renderTabIcon(e, 'baishu')
      }
    },
    MainChatTab: {
      screen: ChatStackNavigator,
      navigationOptions: {
        tabBarLabel: '沟通',
        tabBarIcon: (e) => renderTabIcon(e, 'chat')
      }
    },
    MainBookrackTab: {
      screen: BookrackStackNavigator,
      navigationOptions: {
        tabBarLabel: '书架',
        tabBarIcon: (e) => renderTabIcon(e, 'bookrack')
      }
    },
    MainPutbookTab: {
      screen: PutbookStackNavigator,
      navigationOptions: {
        tabBarLabel: '传书',
        tabBarIcon: (e) => renderTabIcon(e, 'putbook')
      }
    }
  },
  {
    // tab定位于下方
    tabBarPosition: 'bottom',
    // 取消滑动切换
    swipeEnabled: false,
    // 安卓动画取消
    // animationEnabled: false,
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
        height: 64,
        backgroundColor: '#fff'
      }
    }
  }
)


// 预留
MainTab.navigationOptions = {
  
}



export default MainTab