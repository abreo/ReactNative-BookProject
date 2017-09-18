// @flow
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

import { StackNavigator, DrawerNavigator } from 'react-navigation'


// 主色#4b6

// 书本封面比例 18：25


// 登陆注册 App入口页
import LoginScreen from './LoginScreen/LoginScreen'



// 主屏
import MainTabNavigator from './MainScreen'
// 余额
import BalanceStackNavigator from './DrawerScreen/Balance'
// 积分
import IntegralStackNavigator from './DrawerScreen/Integral'
// 常见问题
import FaqStackNavigator from './DrawerScreen/Faq'
// 设置
import SetStackNavigator from './DrawerScreen/Set'
// 测试
import TwoTest from './TwoScreen'


import CustomDrawerContentComponent from './Components/AppDrawer'
import Dimensions from 'Dimensions'
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')


// 主程序
const AppMain = DrawerNavigator(
  {
    MainDrawer: {
      screen: MainTabNavigator,
      navigationOptions: {
        // 阻止侧栏显示主屏
        drawerLabel: () => { }
      }
    },
    BalanceDrawer: {
      screen: BalanceStackNavigator,
      navigationOptions: {
        drawerLabel: '余额',
        drawerIcon: () => <Image source={require('./images/icons/balance.png')} style={itemStyles.icon} />
      }
    },
    IntegralDrawer: {
      screen: IntegralStackNavigator,
      navigationOptions: {
        drawerLabel: '积分',
        drawerIcon: () => <Image source={require('./images/icons/integral.png')} style={itemStyles.icon} />
      }
    },
    FaqDrawer: {
      screen: FaqStackNavigator,
      navigationOptions: {
        drawerLabel: '常见问题',
        drawerIcon: () => <Image source={require('./images/icons/faq.png')} style={itemStyles.icon} />
      }
    },
    SetDrawer: {
      screen: SetStackNavigator,
      navigationOptions: {
        drawerLabel: '设置',
        drawerIcon: () => <Image source={require('./images/icons/setting.png')} style={itemStyles.icon} />
      }
    }
  },
  {
    // 锁定drawe，拒绝手势打开,修复中
    // drawerLockMode: 'locked-closed',
    // 初始路由测试用
    // initialRouteName: 'BalanceDrawer',
    // drawer宽度设置
    drawerWidth: 3 * WIDTH / 5,
    // 自定义样式组件
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      labelStyle: {
        fontWeight: 'normal',
        marginLeft: -10,
      }
    }
  }
)

const itemStyles = StyleSheet.create({
  icon: {
    width: 18,
    height: 18
  }
})


// 入口
const App = StackNavigator(
  {
    loginStack: {
      screen: LoginScreen
    },
    AppStack: {
      screen: AppMain
    }
  },
  {
    // 默认路由
    initialRouteName: 'AppStack',
    // 入口页取消header
    headerMode: 'none'
  }
)



export default App
