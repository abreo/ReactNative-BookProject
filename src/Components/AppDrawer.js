import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

import { DrawerItems } from 'react-navigation'

import Dimensions from 'Dimensions'
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')


const balanceIcon = require('./images/icons/balance.png')
const integralIcon = require('./images/icons/integral.png')
const faqIcon = require('./images/icons/faq.png')
const settingIcon = require('./images/icons/setting.png')

const menuData = [
  {
    label: '余额',
    icon: balanceIcon,
    route: 'BalanceDrawer'
  },
  {
    label: '积分',
    icon: integralIcon,
    route: 'IntegralDrawer'
  },
  {
    label: '常见问题',
    icon: faqIcon,
    route: 'FaqDrawer'
  },
  {
    label: '设置',
    icon: settingIcon,
    route: 'SetDrawer'
  }
]


const CustomDrawerContentComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoWrap}>
        <Image source={require('../images/user_avatar.jpg')} style={styles.infoAvatar} />
        <Text style={styles.infoUser}>徐玉佩</Text>
        <Text style={styles.BookNum}>288</Text>
        <View style={styles.infoBookSum}>
          <Text style={{ fontSize: 10, color: '#aaa' }}>读过</Text>
          <Text style={{ fontSize: 10, color: '#aaa' }}>本书</Text>
        </View>
        <View style={styles.infoRanking}>
          <Text style={styles.infoRankingFont}>位列19048位</Text>
          <Text style={styles.infoRankingFont}>|</Text>
          <Text style={styles.infoRankingFont}>查看榜单</Text>
        </View>
      </View>
      {/* <DrawerItems {...props} /> */}
      <View style={styles.menuWrap}>
        {
          menuData.map(item => {
            return (
              <TouchableOpacity key={item.label} style={styles.menuItemWrap} onPress={() => navigation.navigate(item.route)}>
                <View style={styles.menuItem}>
                  <Image source={item.icon} style={styles.menuIcon} />
                  <Text>{item.label}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  infoWrap: {
    height: 280,
    alignItems: 'center',
    // borderWidth: 2,
    // borderColor: '#f00'
  },
  infoAvatar: {
    width: 60,
    height: 60,
    marginTop: 60,
    borderRadius: 30
  },
  infoUser: {
    marginTop: 4,
    fontSize: 14,
    color: '#555'
  },
  BookNum: {
    marginTop: 24,
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
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  infoRanking: {
    width: 120,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  infoRankingFont: {
    fontSize: 10,
    color: '#aaa'
  },
  menuWrap: {
    marginLeft: 28,
    // borderWidth: 1,
  },
  menuItemWrap: {
    marginBottom: 16
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuIcon: {
    width: 16,
    height: 16,
    marginRight: 8
  }
})


export default CustomDrawerContentComponent