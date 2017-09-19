import React, { Component } from 'react'
import {
  StyleSheet,
  Image
} from 'react-native'

// 加载tab相应图标
const tabIcons = {
  baishu: [require('./images/baishu.png'), require('./images/baishu_select.png')],
  chat: [require('./images/chat.png'), require('./images/chat_select.png')],
  bookrack: [require('./images/bookrack.png'), require('./images/bookrack_select.png')],
  putbook: [require('./images/putbook.png'), require('./images/putbook_select.png')]
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
      navigationOptions: ({ navigation: { state } }) => ({
        tabBarLabel: '掰书',
        tabBarIcon: (e) => renderTabIcon(e, 'baishu'),
        // 判断路由层级，子路由隐藏tab
        tabBarVisible: state.index === 0
      })
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
      navigationOptions: ({ navigation: { state } }) => ({
        tabBarLabel: '传书',
        tabBarIcon: (e) => renderTabIcon(e, 'putbook'),
        tabBarVisible: state.index === 0
      })
    }
  },
  {
    // 测试路由
    initialRouteName: 'MainPutbookTab',
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
        height: 52,
        backgroundColor: '#fff',
        borderTopWidth: 0.5,
        borderTopColor: '#bbb',
        // justifyContent: 'center'
      },
      iconStyle: {
        marginTop: -2
        // backgroundColor: '#00f'
      },
      labelStyle: {
        marginTop: -2,
        fontSize: 12
        // backgroundColor: '#f00'
      },
      tabStyle: {

      }
    }
  }
)


// 预留
MainTab.navigationOptions = {

}



export default MainTab