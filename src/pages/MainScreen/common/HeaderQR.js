import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity
} from 'react-native'

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginRight: 10
  }
})

const HeaderQR = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate('DrawerOpen')}>
    <Image
      source={require('../icon/qr.png')}
      style={styles.icon}
    />
  </TouchableOpacity>
)


export default HeaderQR