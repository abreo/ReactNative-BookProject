import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

import { DrawerNavigator, DrawerItems } from 'react-navigation'
import Dimensions from 'Dimensions'

import MainTabNavigator from './MainScreen'
import TwoTest from './TwoScreen'


const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')


const CustomDrawerContentComponent = (props) => (
  <View style={styles.container}>
    <View style={styles.infoWrap}>
      <Image source={require('./images/user_avatar.jpg')} style={styles.infoAvatar} />
      <Text style={styles.infoUser}>徐玉佩</Text>
      <Text style={styles.BookNum}>288</Text>
      <View style={styles.infoBookSum}>
        <Text style={{ fontSize: 10 }}>读过</Text>
        <Text style={{ fontSize: 10 }}>本书</Text>
      </View>
    </View>
    <DrawerItems {...props} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  infoWrap: {
    height: 400,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#f00'
  },
  infoAvatar: {
    width: 60,
    height: 60,
    marginTop: 60,
    borderRadius: 50
  },
  infoUser: {
    marginTop: 4,
    fontSize: 14,
    color: '#555'
  },
  BookNum: {
    marginTop: 30,
    fontSize: 30
  },
  infoBookSum: {
    width: 120,
    height: 16,
    marginTop: -22,
    paddingLeft: 4,
    paddingRight: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  }
})


const App = DrawerNavigator(
  {
    MainDrawer: {
      screen: MainTabNavigator
    },
    Tow: {
      screen: TwoTest
    }
  },
  {
    // drawer宽度设置
    drawerWidth: 3 * WIDTH / 5,
    // 自定义样式组件
    contentComponent: CustomDrawerContentComponent
  }
)



export default App
