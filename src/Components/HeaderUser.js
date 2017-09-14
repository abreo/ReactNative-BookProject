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
    marginLeft: 10
  }
})

const HeaderUser = ({ navigate }) => (
  <TouchableOpacity onPress={() => navigate('DrawerOpen')}>
    <Image
      source={require('./images/icons/user.png')}
      style={styles.icon}
    />
  </TouchableOpacity>
)


export default HeaderUser