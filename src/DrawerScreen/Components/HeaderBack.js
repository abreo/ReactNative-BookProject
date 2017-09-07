import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

const HeaderBack = ({ navigation: { navigate } }) => (
  <TouchableOpacity activeOpacity={0.5} onPress={() => navigate('MainDrawer')}>
    <Image source={require('../images/icons/back.png')} style={styles.icon} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10
  }
})

export default HeaderBack