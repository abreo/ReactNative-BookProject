import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

import { DrawerNavigator } from 'react-navigation'


// 主色#4b6


// 主屏
import MainTabNavigator from './MainScreen'
// 余额
import BalanceStackNavigator from './DrawerScreen/Balance'
// 测试
import TwoTest from './TwoScreen'


import CustomDrawerContentComponent from './Components/AppDrawer'
import Dimensions from 'Dimensions'
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')



const App = DrawerNavigator(
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
    ss: {
      screen: TwoTest,
      navigationOptions: {
        drawerLabel: '积分',
        drawerIcon: () => <Image source={require('./images/icons/integral.png')} style={itemStyles.icon} />
      }
    },
    dd: {
      screen: TwoTest,
      navigationOptions: {
        drawerLabel: '常见问题',
        drawerIcon: () => <Image source={require('./images/icons/faq.png')} style={itemStyles.icon} />
      }
    },
    ee: {
      screen: TwoTest,
      navigationOptions: {
        drawerLabel: '设置',
        drawerIcon: () => <Image source={require('./images/icons/setting.png')} style={itemStyles.icon} />
      }
    }
  },
  {
    // 初始路由测试用
    initialRouteName: 'BalanceDrawer',
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



export default App
