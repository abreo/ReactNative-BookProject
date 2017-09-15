import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

import { DrawerItems } from 'react-navigation'

import Dimensions from 'Dimensions'
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')


const CustomDrawerContentComponent = (props) => (
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
    <DrawerItems {...props} />
  </View>
)

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
  }
})


export default CustomDrawerContentComponent