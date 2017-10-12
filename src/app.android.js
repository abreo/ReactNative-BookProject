// @flow
import React, { Component } from 'react'
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
const { width: WIDTH } = Dimensions.get('window')



// 主程序
const AppMain = DrawerNavigator(
  {
    LoginDrawer: {
      screen: LoginScreen
    },
    MainDrawer: {
      screen: MainTabNavigator
    },
    BalanceDrawer: {
      screen: BalanceStackNavigator
    },
    IntegralDrawer: {
      screen: IntegralStackNavigator
    },
    FaqDrawer: {
      screen: FaqStackNavigator
    },
    SetDrawer: {
      screen: SetStackNavigator
    }
  },
  {
    // 初始路由测试用
    initialRouteName: 'MainDrawer',
    // drawer宽度设置
    drawerWidth: 3 * WIDTH / 5,
    // 自定义样式组件
    contentComponent: CustomDrawerContentComponent
  }
)


// 全局锁定
const App = () => <AppMain screenProps={{ drawerLockMode: 'locked-closed' }} />


export default App
